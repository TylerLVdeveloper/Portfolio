import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6
import gitHubIcon from "../IconImages/GitHub-icon.png";

class ProjectDetails extends React.Component {
  render() {
    return (
      <TransitionGroup className="project_details">
        <CSSTransition
          key={this.props.projectKey}
          timeout={1000}
          classNames="slide"
        >
          <div className="view_project_wrapper">
            <div className="project_title">
              <h1 key={this.props.projectKey}>{this.props.proj.name}</h1>
            </div>

            <div className="project_description">
              <p>{this.props.proj.description}</p>
              <p className="languages">JavaScript | HTML | CSS</p>
            </div>

            <div id="bottom">
              <div className="gitHub_link">
                <a href={this.props.proj.githubLink}>
                  <img src={gitHubIcon} width="70px" height="70px" alt="" />
                  <h4>Go To Repository</h4>
                </a>
              </div>

              <div className="view_project">
                <a href={this.props.proj.demoLink}>Try it out!</a>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default ProjectDetails;
