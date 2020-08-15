import React, { Component } from 'react';
import './App.css';
import  ServiceList from './component/elements'; 
import  PopUpForm from './component/PopUpForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='app'>
        <form >
         <div className="myBox"> 
            <ServiceList/>
        </div>
        <button onClick={this.togglePopup.bind(this)} className="Any-button" >Order Now</button>
        {this.state.showPopup ? 
          <PopUpForm
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </form>
      </div>
    );
  }
};


export default App;


