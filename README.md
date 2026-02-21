# Tetris

A fully functional Tetris game built with HTML5 Canvas and vanilla JavaScript.

## Features

- Real-time scoreboard (Score, Level, Lines)
- Upcoming block preview
- Rotatable falling blocks (↑ to rotate)
- Dark themed UI
- Distinct colors for different tetromino types
- Core Tetris mechanics: block falling, line clearing, game over detection

## Controls

- **← →** Move left/right
- **↑** Rotate
- **↓** Soft drop (accelerate descent)
- **Space** Hard drop (instant place)

## How to Play

1. Open `index.html` in a web browser, or run a local server:
   ```
   python3 -m http.server 8080
   ```
   Then visit http://localhost:8080

2. Click "Start Game" to begin
3. Clear lines by filling complete rows
4. The game ends when blocks stack to the top

## Tech Stack

- HTML5 Canvas
- Vanilla JavaScript
- CSS (dark theme styling)
