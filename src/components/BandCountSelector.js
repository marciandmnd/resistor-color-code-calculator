import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class BandCountSelector extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <p>Band count: </p>
        <RaisedButton label="4" 
          primary={this.props.bandCount == 4} 
          onClick={()=>this.props.onSelect(4)} />
        <RaisedButton label="5" 
          primary={this.props.bandCount == 5} 
          onClick={()=>this.props.onSelect(5)}/>
        <RaisedButton label="6" 
          primary={this.props.bandCount == 6} 
          onClick={()=>this.props.onSelect(6)}/>
      </div>
    );
  }
}

export default BandCountSelector;
