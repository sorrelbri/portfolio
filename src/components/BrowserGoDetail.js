import React from 'react';

const BrowserGoDetail = (props) => {
  return (<div className="project__project-detail ">
  <p>
    Browser Go is a proof of concept matchmaking server for players of the boardgame Go.
  </p>
  <br/>
  <p>
    Browser Go was built in Flask and React utilizing Socket.io for realtime game communication.
  </p>
  <br/>
  <p>
    <a href="https://sorrelbri.github.io/browser-go-proto/">Play locally with completed game logic here.</a>
  </p>
  <br />
  <p>
    <a href="/" onClick={e=>props.handleClick(e)}>Back to the screenshot!</a>
  </p>
</div>);
}

export default BrowserGoDetail;