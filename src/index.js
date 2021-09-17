import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6

// Project Demo Videos
import PathFindingVisualizerMP4 from "./ProjectVideos/PathFindingVisualizer.mp4";
import SortingVisualizerMP4 from "./ProjectVideos/SortingVisualizer.mp4";

// Project Screenshots
import PathFindingVisualizerIMG from "./ProjectImages/PathFindingVisualizer.jpeg";
import SortingVisualizerIMG from "./ProjectImages/SortingVisualizer.jpeg";

const projectsArray = [
  {
    name: "PathFinding Visualizer",
    image: PathFindingVisualizerIMG,
    video: PathFindingVisualizerMP4,
    description: "Description example 1",
    // githubLink: "#",
    // demoLink: "#",
  },
  {
    name: "Sorting Visualizer",
    image: SortingVisualizerIMG,
    video: SortingVisualizerMP4,
    description: "Description example 2",
    // githubLink: "#",
    // demoLink: "#",
  },
];

class ProjectImage extends React.Component {
  render() {
    return <img className="project_image" src={this.props.imgName} alt="" />;
  }
}

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="project_card" onClick={this.props.onClick}>
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
        {projectsArray.map((proj, i) => {
          return (
            <ProjectCard
              imgName={proj.image}
              heading={proj.name}
              key={i}
              onClick={() => this.props.onClick(i)}
            />
          );
        })}
      </div>
    );
  }
}

class ProjectVideo extends React.Component {
  render() {
    return (
      <TransitionGroup id="video_container">
        <CSSTransition
          key={this.props.projectKey}
          timeout={200}
          classNames="fade"
        >
          <video
            autoPlay
            muted
            loop
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

class ProjectDetails extends React.Component {
  render() {
    return (
      <div id="project_details">
        <h1 className="project_title">{this.props.title}</h1>

        <p className="project_description">{this.props.desc}</p>
        {/* <a href="#" className="project_link">
          GitHub Repository
        </a>
        <a href="#" className="project_link">
          Go to project
        </a> */}
      </div>
    );
  }
}

class ProjectViewer extends React.Component {
  render() {
    return (
      <div id="project_viewer">
        <ProjectDetails title={this.props.title} desc={this.props.desc} />

        <ProjectVideo
          video={this.props.video}
          projectKey={this.props.projectKey}
        />
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

        <ProjectViewer
          projectKey={this.props.projectKey}
          video={this.props.currentProject.video}
          title={this.props.currentProject.name}
          desc={this.props.currentProject.description}
        />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: projectsArray[0],
    };
    this.projectClicked = this.projectClicked.bind(this);
  }

  projectClicked(i) {
    this.setState({
      selectedProject: projectsArray[i],
      projectKey: i, // This is passed down to video component and serves as a key attribute for the div it's contained in to trigger a re-render and change videos
    });
  }

  render() {
    return (
      <div>
        <ContentContainer
          currentProject={this.state.selectedProject}
          projectKey={this.state.projectKey}
        />

        <ProjectsContainer onClick={(i) => this.projectClicked(i)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
