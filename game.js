// Tetromino shapes (each type has 4 rotation states)
const TETROMINOS = {
    I: {
        shape: [
            [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
            [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
            [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
            [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]
        ],
        color: '#00f0f0'
    },
    O: {
        shape: [
            [[1, 1], [1, 1]],
            [[1, 1], [1, 1]],
            [[1, 1], [1, 1]],
            [[1, 1], [1, 1]]
        ],
        color: '#f0f000'
    },
    T: {
        shape: [
            [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
            [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
            [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
            [[0, 1, 0], [1, 1, 0], [0, 1, 0]]
        ],
        color: '#a000f0'
    },
    S: {
        shape: [
            [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
            [[0, 1, 0], [0, 1, 1], [0, 0, 1]],
            [[0, 0, 0], [0, 1, 1], [1, 1, 0]],
            [[1, 0, 0], [1, 1, 0], [0, 1, 0]]
        ],
        color: '#00f000'
    },
    Z: {
        shape: [
            [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
            [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
            [[0, 0, 0], [1, 1, 0], [0, 1, 1]],
            [[0, 1, 0], [1, 1, 0], [1, 0, 0]]
        ],
        color: '#f00000'
    },
    J: {
        shape: [
            [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
            [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
            [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
            [[0, 1, 0], [0, 1, 0], [1, 1, 0]]
        ],
        color: '#0000f0'
    },
    L: {
        shape: [
            [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
            [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
            [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
            [[1, 1, 0], [0, 1, 0], [0, 1, 0]]
        ],
        color: '#f0a000'
    }
};

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const previewCanvas = document.getElementById('preview-canvas');
const previewCtx = previewCanvas.getContext('2d');

const scoreEl = document.getElementById('score');
const levelEl = document.getElementById('level');
const linesEl = document.getElementById('lines');
const gameStatusEl = document.getElementById('game-status');
const startBtn = document.getElementById('start-btn');

let board = [];
let currentPiece = null;
let nextPiece = null;
let score = 0;
let level = 1;
let linesCleared = 0;
let gameLoop = null;
let dropInterval = 1000;
let lastDrop = 0;
let isGameOver = false;
let isPaused = false;

const TETROMINO_TYPES = Object.keys(TETROMINOS);

function createBoard() {
    return Array(ROWS).fill().map(() => Array(COLS).fill(0));
}

function getRandomPiece() {
    const type = TETROMINO_TYPES[Math.floor(Math.random() * TETROMINO_TYPES.length)];
    const tetromino = TETROMINOS[type];
    return {
        type,
        shape: tetromino.shape[0],
        color: tetromino.color,
        x: Math.floor((COLS - tetromino.shape[0][0].length) / 2),
        y: 0,
        rotation: 0
    };
}

function spawnPiece() {
    if (nextPiece === null) {
        nextPiece = getRandomPiece();
    }
    currentPiece = nextPiece;
    nextPiece = getRandomPiece();
    drawPreview();

    if (collision(currentPiece)) {
        gameOver();
        return;
    }
}

function collision(piece) {
    const shape = piece.shape;
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const newX = piece.x + x;
                const newY = piece.y + y;
                if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
                if (newY >= 0 && board[newY][newX]) return true;
            }
        }
    }
    return false;
}

function mergePiece() {
    const shape = currentPiece.shape;
    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const boardY = currentPiece.y + y;
                const boardX = currentPiece.x + x;
                if (boardY >= 0) {
                    board[boardY][boardX] = currentPiece.color;
                }
            }
        }
    }
}

function clearLines() {
    let cleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) {
        if (board[y].every(cell => cell !== 0)) {
            board.splice(y, 1);
            board.unshift(Array(COLS).fill(0));
            cleared++;
            y++;
        }
    }
    if (cleared > 0) {
        const points = [0, 100, 300, 500, 800];
        score += (points[cleared] || 800) * level;
        linesCleared += cleared;
        level = Math.floor(linesCleared / 10) + 1;
        dropInterval = Math.max(100, 1000 - (level - 1) * 100);
        updateScoreboard();
    }
}

function updateScoreboard() {
    scoreEl.textContent = score;
    levelEl.textContent = level;
    linesEl.textContent = linesCleared;
}

function movePiece(dir) {
    if (!currentPiece || isGameOver || isPaused) return;
    currentPiece.x += dir;
    if (collision(currentPiece)) {
        currentPiece.x -= dir;
    }
}

function rotatePiece() {
    if (!currentPiece || isGameOver || isPaused) return;
    const tetromino = TETROMINOS[currentPiece.type];
    const newRotation = (currentPiece.rotation + 1) % 4;
    const newShape = tetromino.shape[newRotation];
    const prevShape = currentPiece.shape;
    currentPiece.shape = newShape;
    currentPiece.rotation = newRotation;
    if (collision(currentPiece)) {
        currentPiece.shape = prevShape;
        currentPiece.rotation = (currentPiece.rotation - 1 + 4) % 4;
    }
}

function dropPiece() {
    if (!currentPiece || isGameOver || isPaused) return;
    currentPiece.y++;
    if (collision(currentPiece)) {
        currentPiece.y--;
        mergePiece();
        clearLines();
        spawnPiece();
    }
}

function hardDrop() {
    if (!currentPiece || isGameOver || isPaused) return;
    while (!collision(currentPiece)) {
        currentPiece.y++;
        score += 2;
    }
    currentPiece.y--;
    mergePiece();
    clearLines();
    spawnPiece();
    updateScoreboard();
}

function drawBlock(ctx, x, y, color) {
    const padding = 1;
    ctx.fillStyle = color;
    ctx.fillRect(x * BLOCK_SIZE + padding, y * BLOCK_SIZE + padding, BLOCK_SIZE - padding * 2, BLOCK_SIZE - padding * 2);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x * BLOCK_SIZE + padding, y * BLOCK_SIZE + padding, BLOCK_SIZE - padding * 2, BLOCK_SIZE - padding * 2);
}

function drawBoard() {
    ctx.fillStyle = '#0f3460';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
            if (board[y][x]) {
                drawBlock(ctx, x, y, board[y][x]);
            }
        }
    }

    if (currentPiece) {
        const shape = currentPiece.shape;
        for (let y = 0; y < shape.length; y++) {
            for (let x = 0; x < shape[y].length; x++) {
                if (shape[y][x]) {
                    drawBlock(ctx, currentPiece.x + x, currentPiece.y + y, currentPiece.color);
                }
            }
        }
    }
}

function drawPreview() {
    previewCtx.fillStyle = '#1a1a2e';
    previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);

    if (!nextPiece) return;

    const blockSize = 20;
    const shape = nextPiece.shape;
    const offsetX = (previewCanvas.width - shape[0].length * blockSize) / 2;
    const offsetY = (previewCanvas.height - shape.length * blockSize) / 2;

    for (let y = 0; y < shape.length; y++) {
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const padding = 1;
                previewCtx.fillStyle = nextPiece.color;
                previewCtx.fillRect(offsetX + x * blockSize + padding, offsetY + y * blockSize + padding, blockSize - padding * 2, blockSize - padding * 2);
            }
        }
    }
}

function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(gameLoop);
    gameStatusEl.textContent = 'Game Over';
    startBtn.disabled = false;
}

function resetGame() {
    board = createBoard();
    currentPiece = null;
    nextPiece = null;
    score = 0;
    level = 1;
    linesCleared = 0;
    dropInterval = 1000;
    isGameOver = false;
    isPaused = false;
    gameStatusEl.textContent = '';
    updateScoreboard();
    spawnPiece();
    drawBoard();
    drawPreview();
}

function gameStep(timestamp) {
    if (isGameOver) return;
    drawBoard();

    if (!isPaused && currentPiece && timestamp - lastDrop > dropInterval) {
        dropPiece();
        lastDrop = timestamp;
    }

    gameLoop = requestAnimationFrame(gameStep);
}

function init() {
    board = createBoard();
    ctx.fillStyle = '#0f3460';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    previewCtx.fillStyle = '#1a1a2e';
    previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);
    gameStatusEl.textContent = 'Click Start to play';

    document.addEventListener('keydown', (e) => {
        if (isGameOver) return;
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                movePiece(-1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                movePiece(1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                rotatePiece();
                break;
            case 'ArrowDown':
                e.preventDefault();
                dropPiece();
                score += 1;
                updateScoreboard();
                break;
            case ' ':
                e.preventDefault();
                hardDrop();
                break;
        }
    });

    startBtn.addEventListener('click', () => {
        if (isGameOver || !gameLoop) {
            resetGame();
            lastDrop = performance.now();
            gameLoop = requestAnimationFrame(gameStep);
            startBtn.disabled = true;
        }
    });
}

init();
