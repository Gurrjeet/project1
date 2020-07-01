import React, {Component} from 'react';
import '../App.css';
import  Modal from 'react-modal';

Modal.setAppElement('#root')

class Contact extends Component {

  constructor()
  {  super();
     this.state = 
      {
        media: [], 
        email: false,
        number: false
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




  
emailChange(email1) {
this.setState({
  email: email1

}) }

numberChange(number1) {
  this.setState({
    number: number1
  
  }) }


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
      <button onClick= {()=> this.emailChange(true)} className =  "btn btn-success .btn-lg"> Click for Email id</button>
       <div>
         <Modal isOpen = {this.state.email}  onRequestClose = {()=>this.emailChange(false)} style= {{
        overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' },
        content: { position: 'absolute', top: 40, left: 40, right: 40,bottom: 40, border: '1px solid red', background: 'white', overflow: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 40, outline: 'none', padding: 50 }
          }}>
             <h2> Email Id for {this.props.location.aboutProps} is *******@gmail.com</h2>
             <div style = {{paddingTop: 120, paddingLeft : 580 }}>
               <button className =  "btn btn-success .btn-lg" onClick = {()=> this.emailChange(false)}> close</button>
            </div>
         </Modal>    

       </div>
       <div style= {{paddingTop:65}}>
      <button onClick= {()=> this.numberChange(true)} className =  "btn btn-success .btn-lg"> Click for number</button>
       <div>
         <Modal isOpen = {this.state.number}  onRequestClose = {()=>this.numberChange(false)} style= {{
        overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' },
        content: { position: 'absolute', top: 40, left: 40, right: 40,bottom: 40, border: '1px solid red', background: 'white', overflow: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: 40, outline: 'none', padding: 50 }
          }}>
            <h2> Number for {this.props.location.aboutProps} is *********</h2>
            <div style = {{paddingTop: 120, paddingLeft : 580 }}>
              <button className =  "btn btn-success .btn-lg" onClick = {()=> this.numberChange(false)}> close</button>
            </div>
       </Modal>    
       </div>
      
       </div>
     </div>
 </div>
</div>
  );
}
} 

export default Contact;
