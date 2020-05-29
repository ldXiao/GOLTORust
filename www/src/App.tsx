import React, { memo } from 'react';
import SudokuTable from './components/SudokuTable';
import { Container, Navbar, Row } from "react-bootstrap";
import logo from './logo.svg';
import './App.css'
import {Universe, Cell} from "wasm-game-of-life";
import { memory } from "wasm-game-of-life/wasm_game_of_life_bg.wasm";

// var memory = new WebAssembly.Memory({initial:10, maximum:100});
const CELL_SIZE = 5; // px
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";
const universe = Universe.new();
// Construct the universe, and get its width and height.
const width = universe.width();
const height = universe.height();
for(var i=0; i < 200; ++i){
    universe.tick();
}
// universe.tick();
// universe.tick();
// universe.tick();
type pair = {
  x:number,
  y:number,
  z:number,
}

var dict : Record<number, string> = {1:"black", 2:"white"};

const Cell1: React.FC<pair> = ({ x, y, z}) => <div className="Cell" style={{
  left: `${CELL_SIZE * x + 1}px`,
  top: `${CELL_SIZE * y + 1}px`,
  width: `${CELL_SIZE - 1}px`,
  height: `${CELL_SIZE - 1}px`,
  backgroundColor: dict[z],
}} />

const Board: React.FC = () =>{
  const cellsPtr = universe.cells();
  
  const cells = Array.from(new Uint8Array(memory.buffer, cellsPtr, width * height));
    // const cells = [1,2,3,4,5,6,7];
    var indents = [];
    for (var i = 0; i < width; i++) {
        for(var j = 0 ; j < height; ++j){
            indents.push(<Cell1  x={i} y={j} z={cells[i*width+j]}/>);
        }
    }
    return  <div className="Board">{indents}</div>

}

function update() {
    universe.tick();
    requestAnimationFrame(update);
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
