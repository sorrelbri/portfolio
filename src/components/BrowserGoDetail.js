import React from 'react';

const BrowserGoDetail = (props) => {
  return (<div className="project__project-detail ">
  <p>
    Node Go is an under construction proof of concept matchmaking server for players of the boardgame Go.
  </p>
  <br/>
  <p>
    <a href="https://sorrelbri.github.io/browser-go-proto/"
      >Prototype</a> built with vanilla JavaScript. Full stack application built with PostgreSQL, Express, and React.
  </p>
  <br/>
  <p>
    <a href="/" onClick={e=>props.handleClick(e)}>Back to the screenshot!</a>
  </p>
</div>);
}

export default BrowserGoDetail;