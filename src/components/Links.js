import React from 'react';
import './Links.scss';

const Links = () => {
  return (<div className="Links">
    <a 
      href="https://github.com/sorrelbri"
      target="_blank"  
    >
      <div className="Contact__link Contact__link__github">
        <p>GitHub</p>
      </div>
    </a>
    
    <a 
      href="https://www.linkedin.com/in/sorrel-june/"
      target="_blank"  
    >
      <div className="Contact__link Contact__link__linkedin">
        <p>LinkedIn</p>
      </div>
    </a>
    
    <a 
      href="https://medium.com/@sorrel.bri.june"
      target="_blank"  
    >
      <div className="Contact__link Contact__link__medium">
        <p>Medium</p>
      </div>
    </a>
    
  </div>);
}

export default Links;