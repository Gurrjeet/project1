import React, {Component} from 'react';

import '../App.css';


class Design extends Component {


 
    render(){
 

  return (
  <div className = "container-fluid">
  
  <h1 className = 'display-1'>display from 1-4</h1>
  <h4>this is to show <mark>mark</mark></h4>
  <p>The <abbr title="Gurjeet">WHO</abbr> move the mouse over.</p>
  <p>Use <kbd>ctrl + p</kbd> to open the Print dialog box.</p>
  <p>The following HTML elements: <code>section</code>, and <code>div</code> defines.</p>
  <p><small>small</small></p>
  <p><strong>large</strong></p>

  
  <p className="font-weight-bold">we can use font-weight-bolder, font-weight-normal, font-weight-light, font-weight-lighter  </p>
  <p className="font-italic">Italic text.</p>


  <p className="text-center">We can use left, center or justify.</p>
  <p class="text-lowercase">we can use text-uppercase, text-capitalize </p>
  <p className="bg-primary text-black-50 text-right">This text is important.</p>
  

        
  <blockquote class="blockquote">
  <p> The world's upported by </p>
  <footer class="blockquote-footer">From WWF's website</footer>
  </blockquote>


  <ul className="pagination">
  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
  <li className="page-item"><a className="page-link" href="#">1</a></li>
  <li className="page-item"><a className="page-link" href="#">Next</a></li>
</ul>
 

  
  <div className="progress" style={{height:30}}>
  <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{width:400}}> progressive bar</div>
</div>



  
     </div>
    
 
  
  );
}
}


  



export default Design;
