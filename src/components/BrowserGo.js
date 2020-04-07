import React, { Component } from 'react';
import BrowserGoDetail from './BrowserGoDetail';
import GitHub from './logos/GitHub';

class BrowserGo extends Component {
  state = { showDetail: false }

  handleClick = e => {
    e.preventDefault();
    this.setState(state => state.showDetail = state.showDetail 
      ? false 
      : true);
  }

  render() { 
    return (
      <div className="project">
        <h3>Node Go</h3>
        <div className="project__project-general__links">
          <div className="project__links__github">
            <GitHub/>
            <a 
              href="https://github.com/sorrelbri/node-go"
            >Repo</a>
          </div>
          <div className="project__links__open-app">
            <a href="https://play-node-go.herokuapp.com/">Open App</a>
          </div>
        </div>
        {this.state.showDetail 
          ? <BrowserGoDetail handleClick={this.handleClick}/>
          : <>
            <a href="/" onClick={e=>this.handleClick(e)}><h5>What is Node Go?</h5></a>
            <img 
              src="browser-go-screenshot-full-board.png" 
              alt="Screenshot of a Node Go game in session on a 19 by 19 board."
            />
          </>
        }
      </div>
    );
  }
}

export default BrowserGo;