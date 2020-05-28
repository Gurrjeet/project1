import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
    render(){
  return (
    
    <div className =  'bg-success text-white' style = {{padding: 3, borderBottomStyle: 'solid', borderColor: 'black', borderWidth: 2  }}>
    <small style = {{textAlign:'left', fontSize : 14}}> Hey, have some fun :)</small>
     <h1 className = 'gur' style = {{textAlign: 'center'}}> THE FORCE</h1>
     <h2 style = {{textAlign:'center', fontSize :14}}>
       {/* Links to home page and View page  */}
     <NavLink to = '/'  style ={{color:'white', padding :5}}  className = 'main-nav'>Home</NavLink>|| <NavLink to = '/viewSite' style ={{color:'white', padding :5}} className = 'main-nav'>ViewSite</NavLink>
    </h2>
    </div>
  );
}
}


export default Navbar;
