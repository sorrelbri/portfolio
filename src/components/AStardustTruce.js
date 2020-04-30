import React, { Component } from 'react';
import AStardustTruceDetail from './AStardustTruceDetail';
import GitHub from './logos/GitHub';

class AStardustTruce extends Component {
  state = { showDetail: false }

  handleClick = e => {
    e.preventDefault();
    this.setState(state => state.showDetail = state.showDetail
      ? false
      : true);
  }

  render() { 
    return (
      <div className={`project ${this.props.last ? 'project--last' : ''}`}>
        <h3>A Stardust Truce</h3>
        <div className="project__project-general__links">
          <div className="project__links__github">
            <GitHub/>
            <a 
              href="https://github.com/sorrelbri/a-stardust-truce"
              >A Stardust Truce Repo
            </a>
          </div>
          <div className="project__links__open-app">
            <a href="https://astardusttruce.herokuapp.com/">Open App</a>
          </div>
        </div>
        {this.state.showDetail
          ? <AStardustTruceDetail handleClick={this.handleClick}/>
          : <>
            <a href="/" onClick={e=>this.handleClick(e)}><h5>What is A Stardust Truce?</h5></a>
            <img 
              src="a-stardust-truce-screenshot-python.png" 
              alt="screenshot from A Stardust Truce application featuring generated Python code for a Stack instantiated as a linked list."
            />
          </>
        }
      </div>
    );
  }
}
 
export default AStardustTruce;
