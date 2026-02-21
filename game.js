// Tetromino shapes and colors
const SHAPES = {
    I: { shape: [[1, 1, 1, 1]], color: '#00d4ff' },
    O: { shape: [[1, 1], [1, 1]], color: '#ffd700' },
    T: { shape: [[0, 1, 0], [1, 1, 1]], color: '#bf5fff' },
    S: { shape: [[0, 1, 1], [1, 1, 0]], color: '#00ff7f' },
    Z: { shape: [[1, 1, 0], [0, 1, 1]], color: '#ff4757' },
    J: { shape: [[1, 0, 0], [1, 1, 1]], color: '#4169e1' },
    L: { shape: [[0, 0, 1], [1, 1, 1]], color: '#ff8c00' }
};

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

let canvas, ctx, previewCanvas, previewCtx;
let board;
let currentPiece;
let nextPiece;
let score = 0;
let level = 1;
let lines = 0;
let dropInterval = 1000;
let lastDrop = 0;
let gameLoopId;

function init() {
    canvas = document.getElementById('game');
    ctx = canvas.getContext('2d');
    previewCanvas = document.getElementById('preview');
    previewCtx = previewCanvas.getContext('2d');

    board = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));
    nextPiece = createPiece();
    spawnPiece();
    updateScoreboard();
    drawPreview();
    gameLoopId = requestAnimationFrame(gameLoop);
}

function createPiece() {
    const types = Object.keys(SHAPES);
    const type = types[Math.floor(Math.random() * types.length)];
    const { shape, color } = SHAPES[type];
    return {
        shape: shape.map(row => [...row]),
        color,
        x: Math.floor((COLS - shape[0].length) / 2),
        y: 0
    };
}

function spawnPiece() {
    currentPiece = nextPiece;
    nextPiece = createPiece();
    drawPreview();

    if (collision(currentPiece)) {
        cancelAnimationFrame(gameLoopId);
        return;
    }
}

function drawBlock(ctx, x, y, color, size = BLOCK_SIZE) {
    const padding = size * 0.05;
    ctx.fillStyle = color;
    ctx.fillRect(x * size + padding, y * size + padding, size - padding * 2, size - padding * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(x * size + padding, y * size + padding, (size - padding * 2) * 0.3, (size - padding * 2) * 0.3);
}

function drawPiece(piece, ctxRef = ctx, size = BLOCK_SIZE) {
    const p = piece;
    p.shape.forEach((row, dy) => {
        row.forEach((cell, dx) => {
            if (cell) {
                drawBlock(ctxRef, p.x + dx, p.y + dy, p.color, size);
            }
        });
    });
}

function drawBoard() {
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    board.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                drawBlock(ctx, x, y, cell, BLOCK_SIZE);
            }
        });
    });

    if (currentPiece) {
        drawPiece(currentPiece);
    }
}

function drawPreview() {
    previewCtx.fillStyle = '#0d1117';
    previewCtx.fillRect(0, 0, previewCanvas.width, previewCanvas.height);

    if (nextPiece) {
        const size = 20;
        const offsetX = Math.floor((4 - nextPiece.shape[0].length) / 2);
        const offsetY = Math.floor((4 - nextPiece.shape.length) / 2);

        nextPiece.shape.forEach((row, dy) => {
            row.forEach((cell, dx) => {
                if (cell) {
                    drawBlock(previewCtx, offsetX + dx, offsetY + dy, nextPiece.color, size);
                }
            });
        });
    }
}

function collision(piece, offsetX = 0, offsetY = 0) {
    const p = piece;
    for (let y = 0; y < p.shape.length; y++) {
        for (let x = 0; x < p.shape[y].length; x++) {
            if (p.shape[y][x]) {
                const newX = p.x + x + offsetX;
                const newY = p.y + y + offsetY;
                if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
                if (newY >= 0 && board[newY][newX]) return true;
            }
        }
    }
    return false;
}

function rotatePiece() {
    if (!currentPiece) return;
    const rotated = currentPiece.shape[0].map((_, i) =>
        currentPiece.shape.map(row => row[i]).reverse()
    );
    const original = currentPiece.shape;
    currentPiece.shape = rotated;
    if (collision(currentPiece)) {
        currentPiece.shape = original;
    }
}

function mergePiece() {
    const p = currentPiece;
    p.shape.forEach((row, dy) => {
        row.forEach((cell, dx) => {
            if (cell) {
                const boardY = p.y + dy;
                const boardX = p.x + dx;
                if (boardY >= 0) {
                    board[boardY][boardX] = p.color;
                }
            }
        });
    });
}

function clearLines() {
    let linesCleared = 0;
    for (let y = ROWS - 1; y >= 0; y--) {
        if (board[y].every(cell => cell)) {
            board.splice(y, 1);
            board.unshift(Array(COLS).fill(0));
            linesCleared++;
            y++;
        }
    }
    if (linesCleared > 0) {
        lines += linesCleared;
        score += [0, 100, 300, 500, 800][linesCleared] * level;
        level = Math.floor(lines / 10) + 1;
        dropInterval = Math.max(100, 1000 - (level - 1) * 100);
    }
}

function move(dx) {
    if (!currentPiece) return;
    if (!collision(currentPiece, dx, 0)) {
        currentPiece.x += dx;
    }
}

function hardDrop() {
    if (!currentPiece) return;
    while (!collision(currentPiece, 0, 1)) {
        currentPiece.y++;
        score += 2;
    }
    mergePiece();
    clearLines();
    spawnPiece();
}

function softDrop() {
    if (!currentPiece) return;
    if (!collision(currentPiece, 0, 1)) {
        currentPiece.y++;
        score += 1;
        return true;
    }
    return false;
}

function updateScoreboard() {
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = level;
    document.getElementById('lines').textContent = lines;
}

function gameLoop(timestamp) {
    if (timestamp - lastDrop > dropInterval) {
        lastDrop = timestamp;
        if (!softDrop()) {
            mergePiece();
            clearLines();
            spawnPiece();
        }
        updateScoreboard();
    }
    drawBoard();
    gameLoopId = requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (!currentPiece) return;
    switch (e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            move(-1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            move(1);
            break;
        case 'ArrowUp':
            e.preventDefault();
            rotatePiece();
            break;
        case 'ArrowDown':
            e.preventDefault();
            softDrop();
            updateScoreboard();
            break;
        case ' ':
            e.preventDefault();
            hardDrop();
            updateScoreboard();
            break;
    }
});

init();
