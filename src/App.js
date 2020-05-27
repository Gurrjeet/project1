import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar';
import Home from './components/Home';
import ViewSite from './components/ViewSite';
import Error from './components/Error';
import MoreDetails from './components/MoreDetails';
import Check from './components/Check';

class App extends Component {
  render(){
  return (
  
    <div>
  

  
  <BrowserRouter>
       <Navbar /> 
     <Switch>
    <Route path = '/' component= {Home} exact/> {/* This link is for the home page  */} 
    <Route path = '/viewSite' component= {ViewSite} />  {/* This component shows the photo and information of all the service provider  */} 
    <Route path = "/moredetails"  component= {MoreDetails} /> {/* This component shows the all the photos of a specific service provider  */} 
    <Route  component= {Error} />  {/* it workss only if the above components are not used */} 
     </Switch>
     </BrowserRouter> 

   </div>
  )
}
}

export default App;
