import React from "react";

class ProjectImage extends React.Component {
  render() {
    return <img className="project_image" src={this.props.imgName} alt="" />;
  }
}

class ProjectCard extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.project === this.props.currentProject
            ? "highlighted project_card"
            : "project_card"
        }
        onClick={this.props.onClick}
      >
        <div className="project_heading">{this.props.heading}</div>
        <ProjectImage imgName={this.props.imgName} />
        <div className="project_card_overlay"></div>
      </div>
    );
  }
}

export default ProjectCard;
