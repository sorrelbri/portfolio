import React from 'react';
import './Contact.scss';
import Resume from './Resume';
import Links from './Links';

const Contact = () => {
  return (<>
    <div className="footer-area">
    </div>
    <div className="section" id="Contact">
      <div className="Contact__personal">
        <h3>Contact</h3>
        <div className="Contact__link Contact__link__email">
          <a href="mailto:sorrel.bri.june@gmail.com">
              <p>Email Me</p>
          </a>
        </div>
        <Resume />
      </div>
      <Links />
    </div>
  </>);
}

export default Contact;