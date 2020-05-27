import React, { Component } from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


class ViewSite extends Component 
{

  constructor()
  { super();
    this.state = 
    {
      postData: [],
      imageData: [],

    }
  }

  componentDidMount()
 {
   // getting all the post data from json file
   let projectsURL = "http://paramour.anythingnet.com.au/wp-json/wp/v2/posts";
   // getting all the media data from json file
   let projectsURL1 = "http://paramour.anythingnet.com.au/wp-json/wp/v2/media";

   // storing the post data in project array 
   fetch(projectsURL)
   .then(response => response.json())
   .then(response => {
    this.setState({
      postData: response
     })
   })
   // storing the media data in projects array 
   fetch(projectsURL1)
   .then(response => response.json())
   .then(response => {
    this.setState({
      imageData: response
     })
   })     
 }

 


 render() 
 {
  

   const imageData = this.state.imageData.map(imageData => 
   <div key = {imageData.id}>{imageData.title.rendered} {imageData.source_url} </div>)
  
   const postData = this.state.postData.map(postData =>
    { 
      const regex = /(<([^>]+)>)/ig; 
      var short =postData.excerpt.rendered.replace(regex, '')      
      let b = 0;
      for(let i =0; i < imageData.length ; i++) 
       {    if (postData.title.rendered === imageData[i].props.children[0])
         { 
           if (b === 0)
           { b++
            return (
             
            
           <div className ="container-fluid p-2" key ={postData.id} style ={{backgroundColor:'white'}}>
             <div style = {{ borderColor: 'black', borderWidth: 3, padding: 15,  borderBottomStyle: 'outset'}}>
           <h4 style = {{color: 'black', fontSize: 50, textAlign : 'center', fontFamily: " Arial" }}> <p className = 'ViewSite'>{postData.title.rendered}</p></h4>
           <div className="row">
           <div className="col-4" >
           <img   src = {imageData[i].props.children[2]} className="img-thumbnail"  alt="NP" style = {{ border: '2px solid green', height: 450, width: 350}} />         
           </div>
           <div className="col-8 text-success" > 
           <p className= 'Desc' style = {{ color: 'black', fontSize: 20, textIndent: 50, fontFamily: 'Times'}}> {short}</p>
          <h4> <NavLink to = {{ pathname: '/moredetails', aboutProps: postData.title.rendered }} className = 'btn btn-dark btn-lg' style ={{textDecoration:'underline'}}>More Pics</NavLink> </h4> 
            
           </div>
           </div>
           </div>
           </div>
            )}
           else {
           return(
           
           
           <div className ="container-fluid p-2" key ={postData.id} style ={{backgroundColor:'#3c3c3c'}}>
            <h3>
           <img   src = {imageData[i].props.children[2]} className="img-thumbnail"  alt="NP" style = {{ border: '1px solid black',  height: 450, width: 350}} />         
           
           
           </h3>
           </div>
              )}
        }
     }

               })

   return(
         <div>  
         {postData}  
        </div>
      )

  }
}


export default ViewSite;




  










