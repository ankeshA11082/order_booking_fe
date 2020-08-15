import React, { Component } from 'react';
import './App.css';
import  ServiceList from './component/elements'; 
import  PopUpForm from './component/PopUpForm'
import Logo from './Resources/toppr.png';
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
         
         <div>
         <img className="Logo" src={Logo} alt="Logo"/>
         <h1 > Services</h1>
         </div>
        
        <form >
      
         <div className="myBox"> 
         {Array(10).fill(1).map((el, i) =>
          <ServiceList  key={i} />
          )}
        </div>

        <button onClick={this.togglePopup.bind(this)} className="Any-button" >Order Now</button>
        {this.state.showPopup ? 
          <PopUpForm closePopup={this.togglePopup.bind(this)} />  : null
        }
        </form>
      </div>
    );
  }
};


export default App;


