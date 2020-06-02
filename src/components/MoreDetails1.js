import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class MoreDetails1 extends Component
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

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides"
    }
       
   
const check = this.state.media.map(media =>
    { 
        if(media.title.rendered===this.props.location.aboutProps)
       {
           return(
               <div>
  <img  src = {media.source_url} alt="NP" className ="img-thumbnail mx-auto d-block" style = {{height: 500, width: 600, border: '2px solid green'}} />         
  </div>
       
           )}
           else
           {
console.log("DDD")
           }

    })

return (

/*<div style = {{padding: 30, alignItems: 'center'}}>
  <Slider {...settings}>
  {check}
  </Slider>
*/
<div>
  dndmdjkdjkkl
      </div>    

);
    
   
      

}}


  
  

export default MoreDetails1;
