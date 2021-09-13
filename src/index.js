import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import PathFindingVisualizerMP4 from "./ProjectVideos/PathFindingVisualizer.mp4";
import SortingVisualizerMP4 from "./ProjectVideos/SortingVisualizer.mp4";
import PathFindingVisualizerIMG from "./ProjectImages/PathFindingVisualizer.jpeg";
// import SortingVisualizerIMG from "./ProjectImages/SortingVisualizer.jpeg";

const projectsArray = [
  {
    name: "PathFinding Visualizer",
    image: PathFindingVisualizerIMG,
    video: PathFindingVisualizerMP4,
    description: "Description example ...",
    githubLink: "#",
    demoLink: "#",
  },
];

class ProjectImage extends React.Component {
  render() {
    return <img className="project_image" src={this.props.imgName} />;
  }
}

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };

    this.viewProject = this.viewProject.bind(this);
  }

  viewProject(e) {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }

  render() {
    return (
      <div
        className={
          this.state.expanded ? "project_card.expanded" : "project_card"
        }
      >
        <div className="project_heading">{this.props.heading}</div>
        <ProjectImage imgName={this.props.imgName} />
        <div className="project_card_overlay"></div>
      </div>
    );
  }
}

class ProjectsContainer extends React.Component {
  render() {
    return (
      <div className="projects_container">
        {/* will want to store projects in an array to be looped over instead of hardcoding each project card */}
        <ProjectCard
          imgName={PathFindingVisualizerIMG}
          heading="Pathfinding Visualizer"
        />
        <ProjectCard
          imgName={PathFindingVisualizerIMG}
          heading="Pathfinding Visualizer"
        />
        <ProjectCard
          imgName={PathFindingVisualizerIMG}
          heading="Pathfinding Visualizer"
        />

        {/* <ProjectCard
          imgName={SortingVisualizerIMG}
          heading="Sorting Visualizer"
        /> */}
      </div>
    );
  }
}

class ProjectVideo extends React.Component {
  render() {
    return (
      <div id="video_container">
        <video autoPlay muted loop className="project_video">
          <source src={this.props.videoName} type="video/mp4" />
        </video>
      </div>
    );
  }
}

class ProjectDetails extends React.Component {
  render() {
    return (
      <div id="project_details">
        <h1 className="project_title">Pathfinding Visualizer</h1>
        <p className="project_description">
          Pathfinding visualizer that allows the user to select a start point,
          end point, and obstruction point(s), then finds the shortest path
          using the A* algorithm.
        </p>
        <a href="#" className="project_link">
          GitHub Repository
        </a>
        <a href="#" className="project_link">
          Go to project
        </a>
      </div>
    );
  }
}

class ProjectViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectBeingViewed: null,
    };
  }
  render() {
    return (
      <div id="project_viewer">
        <ProjectDetails />
        <ProjectVideo videoName={this.props.videoName} />
      </div>
    );
  }
}

class AboutMeViewer extends React.Component {
  render() {
    return <div id="about_me_viewer"></div>;
  }
}

class ContentContainer extends React.Component {
  render() {
    return (
      <div id="content_container">
        <AboutMeViewer />
        <ProjectViewer videoName={SortingVisualizerMP4} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ContentContainer />
        <ProjectsContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
