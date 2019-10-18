import React from 'react';
import './Contact.scss';
import Resume from './Resume';
import Links from './Links';

const Contact = () => {
  return (<div className="section" id="Contact">
    <a href="mailto:sorrel.bri.june@gmail.com">Email Me</a>
    <Resume />
    <Links />
  </div>);
}

export default Contact;