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
        came:[],
      }
  }


  componentDidMount()
  {
    
    // getting all the media data from json 
    let projectsURL1 = "http://paramour.anythingnet.com.au/wp-json/wp/v2/media";

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
let a =0;
let b =0;
 
const check = this.state.media.map(media =>
    { 
  /* comparing the name of the images stored at image json link with name of the employee retirved from Viewsite
  component */
      if(media.title.rendered===this.props.location.aboutProps)
       {  a++;
       
           return(
           
               <div key = {media.id}>
               {media.source_url}  
               </div>
                 
        )
      
        }
    })
    console.log('gg' + check.key )  
    

return (
<div>
 
{check[0]}

</div>
          
);
    
}}


  
  

export default MoreDetails;
