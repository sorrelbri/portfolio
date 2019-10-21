import React from 'react';
import './Contact.scss';
import Resume from './Resume';
import Links from './Links';

const Contact = () => {
  return (<>
    <div className="footer-area">
    </div>
    <div className="section" id="Contact">
      <h3>Contact</h3>
      <a href="mailto:sorrel.bri.june@gmail.com">
        <div className="Contact__link Contact__link__email">
          <p>Email Me</p>
        </div>
      </a>
      <Resume />
      <Links />
    </div>
  </>);
}

export default Contact;