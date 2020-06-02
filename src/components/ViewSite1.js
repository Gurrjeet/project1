import React, {Component} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'
import '../App.css';


class ViewSite1 extends Component {
    render(){
  return (
    <div>
        <Carousel>
            <div>
            <img src ="../image/a.jpg"  style = {{ height: 520, maxWidth: 450,  padding: 25 }} alt="NP" />
   
                <h2>heloo</h2>
            </div>
            <div>
            <img src ="../image/b.jpg"   style = {{ height: 520, maxWidth: 450,  padding: 25 }} alt="NP" />
                <h2></h2>
            </div>
            <div>
            <img src ="../image/c.jpg"  style = {{ height: 520, maxWidth: 450,  padding: 25 }} alt="NP" />
                <h2></h2>
            </div>
            </Carousel>
        

      
    </div>
  );
}
}

export default ViewSite1;
