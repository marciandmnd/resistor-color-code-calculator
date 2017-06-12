import React, { Component } from 'react';
import Band from './Band';

// import  BandColorPicker from './BandColorPicker';

class Resistor extends Component {
  constructor(props) {
    super(props);

    this.state = {
        resistance: null,
        pickColor: false,
        x: 0, 
        y: 0
    };
  }

  // componentDidUpdate(){
  //   alert('test');
  // }

  componentWillMount() {
    this.setState({
      bands: ['foo', 'bar']
    });
  };
 
  pickColor(e) {
    this.setState({
      pickColor: true
    });
  }

  getResistance() {
    let resistance = 0;

    for(let i = 0; i < this.props.bandCount; i++) {
      resistance += this.refs["band-"+i].getWeight() * Math.pow(10,i);
    }

    return resistance;
  }

  onColorSelect(){
    let resistance = this.getResistance()
    this.setState({
      resistance: resistance
    });
  }

 
  render() {
    const bands = [];
    let bandBinWidth = this.props.width/this.props.bandCount;

    for(let i=0; i<this.props.bandCount; i++) {
        bands.push(
        <Band
          key={'band-' + i + '-key'}
          ref={'band-' + i}
          index={i}
          onClick={(e)=>this.pickColor(e)} 
          width={bandBinWidth-10} 
          x={bandBinWidth*i + 5}
          onColorSelect={()=>this.onColorSelect()}
        />);
    }
    return (
      <div>
      <svg width={this.props.width} height="400">
        <rect width="300" height="100" 
              style={{fill:'rgb(0,0,255)', 
              strokeWidth: '3',
              stroke:'rgb(0,0,0)'}} />
        {bands}
      </svg>
      <h1>{this.state.resistance} Ohms</h1>
    
      </div>
    );
  }
}

Resistor.defaultProps = {
  width: 300
};
export default Resistor;
