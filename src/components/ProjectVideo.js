import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6

class ProjectVideo extends React.Component {
  render() {
    return (
      <TransitionGroup id="video_container">
        <CSSTransition
          key={this.props.projectKey}
          timeout={1000}
          classNames="slide"
        >
          <video
            controls
            muted
            playsInline
            className="project_video"
            key={this.props.projectKey}
          >
            <source src={this.props.video} type="video/mp4" />
          </video>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default ProjectVideo;
