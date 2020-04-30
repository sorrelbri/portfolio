import React from 'react';

const FCApplierDetail = ({handleClick}) => {
  return (<div className="project__project-detail ">
  <p>
    Feature Change Applier and LATL programming language are tools for linguists and hobbyists to model phonetic changes in human languages
  </p>
  <br/>
  <p>
    Feature Change Applier was built with React. LATL programming language has a JavaScript compiler utilizing Moo.js and Nearley.js. 
  </p>
  <br/>
  <p>
    <a href="/" onClick={ e => handleClick(e) }>Go back!</a>
  </p>
</div>);
}

export default FCApplierDetail;