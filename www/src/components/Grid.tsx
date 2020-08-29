import React from 'react';

type gridPropsType = {
    world: boolean[][],
    onChange: (x:number,y:number)=>void,
}

export class Grid extends React.Component<gridPropsType> {

   private toggleCell = (x:number,y:number) => {
    this.props.onChange(x,y);
   }
   private renderCell=(alive:boolean,x:number, y:number) => {
        return (
            <div key={x}
            className="cell"
            onMouseDown={() => this.toggleCell(x,y)}
            style={{ backgroundColor: alive ? '#424151' : "" }}
            />
        )
    }
    private renderRow = (row:boolean[], y:number) => (
        <div className='row' key={y}>
      {row.map((alive, x) => this.renderCell(alive, x, y))}
    </div>
    )

    render() {
        return (
          <div className='game-grid'>
            {this.props.world.map((row, y) => this.renderRow(row, y))}
          </div>
        );
      }
}

export default Grid;