import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class MoreDetails extends Component
  {
    
  constructor()
  {  super();
     this.state = 
      {
       
        media: [],
      }
  }


  componentDidMount()
  {
    
    // getting all the media data from json file
    let projectsURL1 = "http://paramour.anythingnet.com.au/wp-json/wp/v2/media";

    // storing the media data in projects array 
    fetch(projectsURL1)
    .then(response => response.json())
    .then(response => {
     this.setState({
     media: response
      })
    })     
  }
 
   render()
   { 

   
    const media = this.state.media.map(media => 
     { 
      if(media.title.rendered===this.props.location.aboutProps)
     {
       console.log(this.props.location.aboutProps)
return (
<div style = {{ padding: 15, display: 'inline'}}>
 
<img  src = {media.source_url}  alt="NP" style = {{ border: '5px solid green', height: 500, width: 400}} />         
      </div>    

)
     }
     })
   
      
  return (
    
    <div className ="container-fluid" style= {{ padding: 20}}> 
      <h1> {media} 
      
</h1>
     </div>
  );
}

}


  
  

export default MoreDetails;
