import React from 'react';
import './Contact.scss';
import Resume from './Resume';
import Links from './Links';

const Contact = () => {
  return (<>
    <div className="footer-area">
    </div>
    <section className="section section__contact">
      <h2 className="--header">Contact</h2>
      <div id="Contact">
        <div className="Contact__personal">

          <div className="Contact__link Contact__link__email">
            <a href="mailto:sorrel.bri.june@gmail.com">
                <p>Email Me</p>
            </a>
          </div>
          <Resume />
        </div>
        <Links />
      </div>
    </section>
  </>);
}

export default Contact;