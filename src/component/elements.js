import React, { Component } from 'react';
import './component.css';


class ServicesList extends Component {
    render()
    {
    return (
        <div className="services">
          <input type="checkbox" name="services[] " />
          <label htmlFor="services[]">  
            Board: 
            Class: 
            Discount :
            Scholarship : 
            Tutor:  
            Rating :  
            Subjects :  
          </label> 
          </div>
    );
  }
};



export default ServicesList;