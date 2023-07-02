import React from "react";
import './Board.css'

const Cell = ({value, onClick}) => {
    return (
        <div className="square" onClick={onClick}>
            {value}
        </div>
    )
}
export default Cell;