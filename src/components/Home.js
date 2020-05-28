import React, {Component} from 'react';
import '../App.css';


class Home extends Component {
    render(){
  return (
    
  
 <div > 
{/* all the images are in the public folder*/}
    <img src ="../image/a.jpg"  className="rounded-circle"  alt="NP" style = {{ height: 520, maxWidth: 450,  padding: 25 }}/>
     <img src ="../image/b.jpg" className="rounded-circle"  alt="NP" style = {{ height: 520, maxWidth: 450,  padding:25 }}/>
    <img src ="../image/c.jpg"  className="rounded-circle" alt="NP"style = {{ height: 520, maxWidth: 450,  padding:25 }}/>
     

</div>
   
  );
}




}




export default Home;
