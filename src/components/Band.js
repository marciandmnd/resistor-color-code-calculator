import React, { Component } from 'react';

class Band extends Component{
  constructor(props) {
    super(props);

    this.state = {
      color: 'rgb(255,0,255)'
    }
  }

  render() {
    return (
        <rect x={this.props.x} width={this.props.width} height="100" 
                style={{fill: this.state.color, 
                strokeWidth: '3',
                stroke:'rgb(0,0,0)'}} />
    );
  }
}

export default Band;
