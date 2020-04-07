import React, { Component } from 'react';
import FCApplierDetail from './FCApplierDetail';
import GitHub from './logos/GitHub';

class FCApplier extends Component {
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
        <h3>Feature Change Applier / LATL</h3>
        <div className="project__project-general__links">
          <div className="project__links__github">
            <GitHub/>
            <a 
              href="https://github.com/sorrelbri/phono-change-applier"
            >Repo</a>
          </div>
          <div className="project__links__open-app">
            <a href="https://sorrelbri.github.io/feature-change-applier">Open App</a>
          </div>
        </div>
        {this.state.showDetail 
          ? <FCApplierDetail handleClick={this.handleClick}/>
          : <>
            <a href="/" onClick={e=>this.handleClick(e)}><h5>What is Feature Change Applier?</h5></a>
            <img 
              src="feature-change-applier-screenshot.png" 
              alt="Screenshot of Feature Change Applier with feature definitions and an epoch of sound change rules."
            />
          </>
        }
      </div>
    );
  }
}

export default FCApplier;