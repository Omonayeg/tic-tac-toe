import React from "react";
import "./Board.css"
import Cell from "./Cell"

const Board = () => {

    const [board, setBoard] = React.useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = React.useState('X');
    const [winner, setWinner] = React.useState(null); 

    const handleCellClick = (index) => {
    
        if (board[index] || winner) {
            return 
        }
            const updatedBoard = [...board];

            updatedBoard[index] = currentPlayer;

            setBoard(updatedBoard);

            setCurrentPlayer(currentPlayer === 'X' ? 'O' : "X")

            checkWinner(updatedBoard, currentPlayer);
        
       
    }


     const checkWinner = (board, currentPlayer) => {
        const winCombinations = [
            [0,1,2], [3,4,5], [6,7,8],   //rows
            [0,3,6], [1,4,7], [2,5,8],   //columns
            [0,4,8], [2,4,6]             //diagonals 
        ]

        for (let array of winCombinations) {
            const [a,b,c] = array;
            if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
                setWinner(currentPlayer);  
                break;     
            }
        }
     }

    const renderCells = () => {
        return board.map((value, index) => (
            <Cell  key={index} value={value} onClick = {() => handleCellClick(index)}/>
            )
        )

    }

    const resetGame = () => {
       setBoard(Array(9).fill(null));
       setCurrentPlayer('O');
       setWinner(null)

    }


    function calculateStatus(winner, board, currentPlayer) {
        if(winner) {
        return `Player ${winner} WINS!`
        } else if (board.every(Boolean)) {
        return `Scratch: Its a Draw!`
        } else {
        return `Next player: ${currentPlayer}`
        }
      }

      const status = calculateStatus(winner, board, currentPlayer);

    return (
    <div  className="board">
        <div className="status">
            {/* <h4>Current Player; {currentPlayer} </h4> */}
            <h3> {status} </h3>
        </div>

        <div className="cells">
            {renderCells()}
        </div>
        <button className="btn" onClick = {resetGame}>Restart</button>
    </div>
    )

}

export default Board