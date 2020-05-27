import React, {Component} from 'react';

import '../App.css';


class Check extends Component {
    render(){
  return (
    <div  style = {{padding: 3}}>
     <img src ="../image/a.jpg" className="img-thumbnail"  alt="NP" style = {{ border: '3px solid green', height: 350, width: 400}} />         
     <img src ="../image/b.jpg" className="img-thumbnail"  alt="NP" style = {{ border: '3px solid green', height: 350, width: 400}} />         
     <img src ="../image/c.jpg" className="img-thumbnail"  alt="NP" style = {{ border: '3px solid green', height: 350, width: 400}} />         
     <img src ="../image/e.jpg" className="img-thumbnail"  alt="NP" style = {{ border: '3px solid green', height: 350, width: 400}} />         
    
    </div>
  );
}
}


  
  

export default Check;
