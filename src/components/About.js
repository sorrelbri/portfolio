import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="section About" id="Bio">
      <h2 className="About__header --header">Bio</h2>
      <div className="About__bio">
        <p className="About__bio__line">
        Strategic and incisive, Sorrel is an engineer on an eternal quest for the most elegant software solutions to complex problems and whose work ethos is ‘share all knowledge, always.’ 
        </p>
        <p className="About__bio__line">
        Before plunging into software, Sorrel juggled tight deadlines, varied stakeholder interests, and sensitive information in data projects for a nonprofit development department. 
        </p>
        <p className="About__bio__line">
        Possessed of a drive to understand, bits to abstracts, she is better at math today than she was yesterday.
        </p>
      </div>
    </section>
  );
}
export default About;