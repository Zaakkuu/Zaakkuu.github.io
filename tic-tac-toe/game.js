console.log("Welcome to Tic-Tac-Toe! Enjoy!")

// basic game setup
let noughtsTurn = true; // noughts goes first
let gameIsOver = false;
const cells = document.getElementsByTagName("td");

// Main function to handle cel clicks
function cellClicked(e) {
    const cell = e.target;
    
    // stating requirements to proceed if the game is not over or the box is empty
    if (cell.innerHTML === "" && !gameIsOver) {
        // Determines the symbol next played
        const symbol = noughtsTurn ? "O" : "X";
        
        // Update the cell
        cell.innerHTML = symbol;
        
        // Check for win and win text
        if (checkForWin(symbol)) {
            gameIsOver = true;
            document.getElementById("subtitle").innerHTML = `${symbol} GETS A CHICKEN DINNER!`;
        } else {
            // swap turns if the game isnt ended
            noughtsTurn = !noughtsTurn;
            //update subtitle to show whose turn it is (function is below)
            updateSubtitle();
        }
    }
}

function checkForWin(symbol) {
    // identify different winning combinations 
    const winningCombinations = [
        // Horizontal
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Vertical
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Diagonal 
        [0, 4, 8], [2, 4, 6]
    ];

    // Check each combination and what symbol is in each cell
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (cells[a].innerHTML === symbol && 
            cells[b].innerHTML === symbol && 
            cells[c].innerHTML === symbol) {
            return true;
        }
    }
    
    return false;
}

function updateSubtitle() {
    const currentPlayer = noughtsTurn ? "O" : "X";
    document.getElementById("subtitle").innerHTML = 
        `Player ${currentPlayer}'s turn`;
}

// Add click event to each cell using for loop
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = cellClicked;
}
// Set initial subtitle
updateSubtitle();