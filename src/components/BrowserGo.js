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
        <h3>Browser Go</h3>
        <div className="project__project-general__links">
          <div className="project__links__github">
            <GitHub/>
            <a 
              href="https://github.com/sorrelbri/browser-go-api"
            >API Repo</a>
            <a 
              href="https://github.com/sorrelbri/browser-go-react"
            >Frontend Repo</a>
          </div>
          <div className="project__links__open-app">
            <a href="https://sorrelbri.github.io/browser-go-proto/">Open Prototype</a>
          </div>
        </div>
        {this.state.showDetail 
          ? <BrowserGoDetail handleClick={this.handleClick}/>
          : <>
            <a href="/" onClick={e=>this.handleClick(e)}><h5>What is Browser Go?</h5></a>
            <img 
              src="/browser-go-screenshot-full-board.png" 
              alt="Screenshot of a Browser Go game in session on a 19 by 19 board."
            />
          </>
        }
      </div>
    );
  }
}

export default BrowserGo;