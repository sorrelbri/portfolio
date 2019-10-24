import React from 'react';
import './Links.scss';
import GitHub from './logos/GitHub';
import LinkedIn from './logos/LinkedIn';
import Medium from './logos/Medium';

const Links = () => {
  return (<div className="Links">
    <div className="Contact__link Contact__link__github">
      <a 
        href="https://github.com/sorrelbri"
        target="_blank" 
        rel="noopener noreferrer" 
        >
        <GitHub/>
        <p>GitHub</p>
      </a>
    </div>
    
    <div className="Contact__link Contact__link__linkedin">
      <a 
        href="https://www.linkedin.com/in/sorrel-june/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
        <p>LinkedIn</p>
      </a>
    </div>
    
    <div className="Contact__link Contact__link__medium">
      <a 
        href="https://medium.com/@sorrel.bri.june"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Medium />
        <p>Medium</p>
      </a>
    </div>
    
  </div>);
}

export default Links;