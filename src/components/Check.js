import React, {Component} from 'react';
import Check1 from '../components/Check1';

import '../App.css';


class Check extends Component {

 a = [
  { id: 1,
    name : 'ddd'

  },
  {
id:2,
name: 'ssssss'
  }
]

 
    render(){
   const   gur = this.a.map(x => <div> < Check1  a={x} />

   </div>)

  return (
    <div >
     {gur}
    </div>
  );
}
}


  
  

export default Check;
