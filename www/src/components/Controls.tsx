import React from 'react';
import { Button } from 'semantic-ui-react';
type controlPropsType= {
    playing: boolean,
    next: ()=>void,
    play: ()=>void,
    stop:()=>void,
}
const Controls = (props:controlPropsType) => (
  <div className='controls'>
    <Button content='Next' icon='right arrow' labelPosition='right' onClick={props.next} />
    {props.playing ?
      <Button content='Stop' icon='stop' labelPosition='right' onClick={props.stop} /> :
      <Button content='Play' icon='play' labelPosition='right' onClick={props.play} />
    }
  </div>
);

export default Controls;