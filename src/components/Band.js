import React, { Component } from 'react';

import BandColorPicker from './BandColorPicker';

class Band extends Component{
  constructor(props) {
    super(props);

    this.state = {
      showSwatch: false,
      color: 'white',
      weight: 0
    }
  }

  onClick() {
    let showSwatch = this.state.showSwatch;
    
    this.setState({
      showSwatch: !showSwatch
    });
    this.props.onClick();
  }

  onColorSelect(c,i) {
    this.setState({
      color: c,
      weight: i,
      showSwatch: false
    }, this.props.onColorSelect);
  }

  getWeight() {
    return this.state.weight;
  }

  render() {
    return (
      <g>
        <rect onClick={()=>this.onClick()} x={this.props.x} width={this.props.width} height="100" 
          style={{fill: this.state.color, 
          strokeWidth: '3',
          stroke:'rgb(0,0,0)'}} />
        
        { this.state.showSwatch &&
          <BandColorPicker 
            x={this.props.x} 
            width={this.props.width} 
            onColorSelect={(c,i)=>this.onColorSelect(c,i)}  
          />
        }
      </g>
    );
  }
}

export default Band;
