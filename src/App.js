import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/Input/UserInput';
import UserOutput from './Components/Output/UserOutput';

class App extends Component {

  state = {
    username: "the Wizard",
  }

  // updates name with event and value from change event
  updateUsernameHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  render() {
    return (
      <div className="App">
        <UserInput 
        userUpdate={this.updateUsernameHandler}
        username={this.state.username}
         />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
