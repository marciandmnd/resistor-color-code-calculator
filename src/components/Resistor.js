import React, { Component } from 'react';
import Band from './Band';

class Resistor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bands = [];
    let bandBinWidth = this.props.width/this.props.bandCount;

    for(let i=0; i<this.props.bandCount; i++) {
        bands.push(<Band width={bandBinWidth-10} x={bandBinWidth*i + 5}/>);
    }
    return (
      <div>
      <svg width={this.props.width} height="300">
        <rect width="300" height="100" 
              style={{fill:'rgb(0,0,255)', 
              strokeWidth: '3',
              stroke:'rgb(0,0,0)'}} />
        {bands}
      </svg>
      </div>
    );
  }
}

Resistor.defaultProps = {
  width: 300
};
export default Resistor;
