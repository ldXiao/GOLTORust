import React from 'react';
import SudokuTable from './sudoku/SudokuTable';
import { Container, Navbar, Row } from "react-bootstrap";
import logo from './logo.svg';
import './App.css'
import * as wasm from "sudoku_solver";
import { memory } from "sudoku_solver/wasm_game_of_life_bg";

const CELL_SIZE = 15; // px
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";
const universe = wasm.Universe.new();
// Construct the universe, and get its width and height.
const width = universe.width();
const height = universe.height();

type pair = {
  x:number,
  y:number 
}

const Cell: React.FC<pair> = ({ x, y}) => <div className="Cell" style={{
  left: `${CELL_SIZE * x + 1}px`,
  top: `${CELL_SIZE * y + 1}px`,
  width: `${CELL_SIZE - 1}px`,
  height: `${CELL_SIZE - 1}px`,
}} />

const Board:React.FC = () =>{
  const cellsPtr = universe.cells();
  const cells = [1,2,3,4,5,6];
  return(<tbody>
  {cells
    .fill(0)
    .map(
      (v,i)=>
      <Cell x={i} y={i}/>
  )}
</tbody>
  )
}


function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top sudoku-logo"
              alt="bla"
            />
      &nbsp;&nbsp;Game of Life on torus
    </Navbar.Brand>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="mt-3 justify-content-center">
          <Board/>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;                             
