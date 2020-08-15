import React, { Component } from 'react';
import './component.css';

 
class FormInput  extends Component
    { 
     render(){ return(
        <div className="form-container">
          
          First Name <input type="text" placeholder="First name" name="first_name" required /> <br />
          Last Name <input type="text" placeholder="Last name" name="last_name" /> <br />
          City <input type="text" placeholder="city" name="city" required />  <br />
          Phone Number<input type="text" placeholder="Phone Number" name="phone_number" required /> <br />

          <input type="submit" className="order-button" onClick={ ()=>{ alert('User Registered');}}  defaultValue="Order Now" />
        </div>
      );
    }
  };

 
 
class PopUpForm extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
                <div class="modal-header">    
                 <span class="close" onClick={this.props.closePopup}>&times;</span>
                  <h2>Toppr</h2>
                </div>
             <h1 id="message_services" > </h1>
             <FormInput />
          </div>
        </div>
      );
    }
  }
  
export default PopUpForm;