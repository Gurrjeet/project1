import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

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
    
    // getting all the media data from json 
    let projectsURL1 = "http://f6n.4d5.myftpupload.com/wp-json/wp/v2/media";

    // storing the media data in media array 
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

  const images =  this.state.media.filter(media => media.title.rendered===this.props.location.aboutProps)
    


return (
  <div style= {{backgroundColor: 'white'}}>

   <Carousel>
   {
     images.map(images => {
       return (
      <div key = {images.id}>
        <img   src = {images.source_url}  alt="NP"  />         
        <h1 className = 'text-uppercase'> {this.props.location.aboutProps}</h1>   
        
          </div>
       );
     }
     )}
</Carousel>


</div>      
);
  


}}
  
export default MoreDetails;
