import React, { Component } from 'react';


class BandColorPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const colorSwatch = [];
    for(let i=0; i < this.props.colors.length; i++) {
        let color = this.props.colors[i];

        colorSwatch.push(
          <rect x={this.props.x}
                onClick={()=>this.props.onColorSelect(color,i)} 
                y={100 + i*24} width={this.props.width} height="24" 
                style={{fill: color, 
                strokeWidth: '2',
                stroke:'rgb(0,0,0)'}} />
        );
    }
    return(
       <g>
          {colorSwatch}
        </g>
    );
  }
}

BandColorPicker.defaultProps = {
  colors: ['black', 'brown', 'red', 'orange', 'yellow', 'green',
    'blue', 'violet', 'gray', 'white']
};
export default BandColorPicker;
