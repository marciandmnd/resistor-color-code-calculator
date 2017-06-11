import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BandCountSelector from './components/BandCountSelector';
import Resistor from './components/Resistor';

import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandCount: 4
    }
  }

  onSelect(n) {
    this.setState({
      bandCount: n
    });
  }

  render() {
    return (
      <div>
      <MuiThemeProvider>
        <BandCountSelector bandCount={this.state.bandCount} onSelect={(n)=>this.onSelect(n)}/>
      </MuiThemeProvider>
          
        <Resistor bandCount={this.state.bandCount}/>
       </div>   
    );
  }
}

export default App;
