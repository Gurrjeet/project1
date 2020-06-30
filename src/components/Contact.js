import React, {Component} from 'react';
import '../App.css';


class Contact extends Component {

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


    render(){
 
      const images =  this.state.media.filter(media => media.title.rendered===this.props.location.aboutProps)



      const photos =  images.map(mediaa => 
            <div key = {mediaa.id}>
            <img   src = {mediaa.source_url}  className="img-thumbnail" style = {{height :500, width:500}} alt="NP"  />         
            </div>
           )
         

  return (
    <div className="container-fluid" style= {{padding:5}}>
      <div className="row" style= {{padding:5}}>
  <div className="col-sm-5">
    
 {photos[0]}
  </div>
    <div className="col-sm-7" style= {{paddingTop:65}}>
      <h1> Contact Number: ***-***-****</h1>
      <div style= {{paddingTop:65}}>
      <h1> Email Id: ***-***@gmail.com</h1>
      </div>
    </div>
</div>
</div>
    
 
  
  );
}
}


  
  

export default Contact;
