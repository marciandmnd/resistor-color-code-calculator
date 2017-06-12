import React, { Component } from 'react';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import BandCountSelector from './components/BandCountSelector';
import Resistor from './components/Resistor';

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
      <div className='max-width-4 mx-auto center'>
        <MuiThemeProvider>
          <BandCountSelector 
            
            bandCount={this.state.bandCount}
            onSelect={(n)=>this.onSelect(n)}/>
        </MuiThemeProvider>
        <Resistor bandCount={this.state.bandCount}/>
        <p>foo</p>
       </div>   
    );
  }
}

export default App;
