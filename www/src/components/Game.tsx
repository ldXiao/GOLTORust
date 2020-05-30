import React from 'react';
import {Universe, Cell} from "wasm-game-of-life";
import {Grid} from  "./Grid";
import { memory } from "wasm-game-of-life/wasm_game_of_life_bg.wasm";
import Controls from "./Controls";

/* this is a wrapper class to interact with wasm */
const universe = Universe.new();
// Construct the universe, and get its width and height.
const width = universe.width();
const height = universe.height();
const changeArrayValue = (arr:any[], i:number, val:any) => [
    ...arr.slice(0, i), val, ...arr.slice(i + 1)
];

const createWorld=()=>{
    return Array(width).fill(0).map(() => Array(height).fill(false))
}
const getWorld= (world:boolean[][]) =>{
    const cellsPtr = universe.cells();
  
    const cells = Array.from(new Uint8Array(memory.buffer, cellsPtr, width * height));

    return world.map((row,y)=>row.map((val,x)=>cells[x*width+y] != 0))
}
export class Game extends React.Component {
    state = {
        world: getWorld(createWorld()),
        generation:0,
        playing:false,
        interval: setInterval(()=>{},100),
    }
    onChange = (x:number, y:number) => {
        universe.toggle_cell(x,y);
        const val = this.state.world[y][x];
        const row = changeArrayValue(this.state.world[y], x, ! val);
        const newWorld = changeArrayValue(this.state.world, y, row);
        this.setState({
            world: newWorld,
        });
    }

    onNext = () => {
        universe.tick();
        this.setState({
            world: getWorld(this.state.world),
            generation: this.state.generation +1,
        });
    }
    onShuffle = () => {
        universe.shuffle();
        this.setState({
            world:getWorld(this.state.world),
            generation:0,
        })
    }
    onPlay = () => {
        this.setState({ playing: true });
        this.state.interval = setInterval(() => this.onNext(), 100);
      }

    onStop = () => {
    this.setState({ playing: false });
    clearInterval(this.state.interval);
    }

    render() {
        const { world, playing } = this.state;
    return (
      <div>
        <Grid world={world} onChange={this.onChange} />
        <Controls
          next={this.onNext}
          play={this.onPlay}
          stop={this.onStop}
          playing={playing}
          shuffle={this.onShuffle}
        />
        <p>Generation: {this.state.generation}</p>
      </div>
    );

    }




}