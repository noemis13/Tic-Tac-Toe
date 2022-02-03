import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { useState } from 'react';

const gameStyles = {
  backgroundColor: 'salmon',
  margin: 10,
  padding: 20,
};

const Square = (props) => {
  
  return (
    <button 
    className='square'
    onClick={props.onClickEvent}
    >
      {props.value}
    </button>
  );
};

const Board = () => {
  const initialSquares = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];
  const [squares, setSquares] = useState(initialSquares);

  const handleClickEvent = (i) => {
    // 1. make a copy of square state array
    const newSquares = [...squares];
    // 2. mutate the copy, setting the i-th element to 'x'
    newSquares[i] = 'X';
    // 3. call the setSquares function with the mutated copy
    setSquares(newSquares);
  };

  const renderSquare = (i) => {
    return (
      <Square 
      values={squares[i]}
      onClickEvent={() => handleClickEvent(i)}
      />
    );
  }
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20,
    }}>
      Board
      <div className='board-row'>
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
};



ReactDOM.render(
  <Game />,
  document.getElementById('root')
);