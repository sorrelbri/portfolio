import React from 'react'

const AStardustTruceDetail = (props) => {
  return (<div className="project__project-detail ">
    <p>
      A Stardust Truce seeks to elevate student comprehension of core computer science concepts by providing an interactive utility that allows users to build common data structures from prefabricated code blocks.
    </p>
    <br/>
    <p>
      A Stardust Truce was built with Django to write and serve Python and JavaScript files based on user input.
    </p>
    <br />
    <p>
      <a href="/" onClick={e=>props.handleClick(e)}>Back to the screenshot!</a>
    </p>
  </div>);
}

export default AStardustTruceDetail;