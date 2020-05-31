import React, { ReactComponentElement } from 'react';
import { Dropdown, Button,Form} from 'semantic-ui-react'

const options = [
    { key: 'line', value: 'line', text: 'Line' },
    { key: 'glider', value: 'glider', text: 'Glider' },
    { key: 'pulsar', value: 'pulsar', text: 'Pulsar' },
    { key: 'diehard', value: 'diehard', text: 'Diehard' },
    { key: 'gliderGun', value: 'gliderGun', text: 'Gosper Glider Gun' }
];

const option_dict : Record<string, number> = {"line":0, "glider":1,"pulsar":3,"diehard":2,"gliderGun":4};

type presetsPropsType = {
    load:(x:number)=>void,
    playing:boolean,
};

class Presets extends React.Component<presetsPropsType> {

    state = {
        preset: 'line'
    }

    onLoad = () => {
        const { preset } = this.state;
        return preset ? this.props.load(option_dict[preset]) : null;
    }
    handleChange=(event:any)=>{
        this.setState({preset: event.target.value});
      }

    render() {
        return (
            <div className='controls'>
                <Button as='div' labelPosition='left'>
            <select value={this.state.preset} onChange={this.handleChange}>
            <option value="line">Line</option>
            <option value="glider">glider</option>
            <option value="pulsar">pulsar</option>
            <option value="gliderGun">gliderGun</option>
            <option value="diehard">diehard</option>
          </select>
                    <Button
                        content='Load'
                        onClick={this.onLoad}
                        disabled={this.props.playing}
                    />
                </Button>
            </div>
        );
    }

}
export default Presets;