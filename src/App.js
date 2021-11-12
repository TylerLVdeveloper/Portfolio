import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6

// Stylesheets
import "./index.css";

// Project Data
import projectsArray from "./ProjectData.js";

// Icon Images
import gitHubIcon2 from "./IconImages/GitHub-icon2.png";
import gmailIcon from "./IconImages/Gmail_Icon.png";
import linkedinIcon from "./IconImages/Linkedin_Icon.png";

// Components
import ProjectCard from "./components/ProjectCard.js";
import ProjectDetails from "./components/ProjectDetails.js";
import ProjectVideo from "./components/ProjectVideo";
import CountdownTimer from "./components/CountdownTimer.js";

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

class ProjectViewer extends React.Component {
  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          key={this.props.viewKey}
          timeout={1000}
          classNames="slide"
        >
          <div
            id="project_viewer"
            className={this.props.mobileViewProjects ? "visible" : "hidden"}
          >
            <div className="hide_projects_link" onClick={this.props.onClick}>
              BACK
            </div>
            <ProjectDetails
              proj={this.props.proj}
              projectKey={this.props.projectKey}
            />

            <ProjectVideo
              video={this.props.proj.video}
              projectKey={this.props.projectKey}
            />
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

class AboutMeViewer extends React.Component {
  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          key={this.props.viewKey}
          timeout={1000}
          classNames="slide"
        >
          <div
            id="about_me_viewer"
            className={this.props.mobileViewProjects ? "hidden" : "visible"}
          >
            <div className="heading">Tyler Dickinson</div>
            <div className="sub_heading">Front-End Web Development</div>
            <div className="skills">ReactJS | JavaScript | HTML | CSS</div>
            <div className="contact_link">
              <div className="contact_img">
                <a href="mailto:tylerd062292@gmail.com">
                  <img src={gmailIcon} alt="" />
                </a>
              </div>
              <div className="contact_img">
                <a href="https://www.linkedin.com/in/tyler-dickinson-288790101/">
                  <img src={linkedinIcon} alt="" />
                </a>
              </div>
              <div className="contact_img">
                <a href="https://github.com/TylerLVdeveloper">
                  <img src={gitHubIcon2} alt="" />
                </a>
              </div>
            </div>
            <CountdownTimer />
            <div className="view_projects_link" onClick={this.props.onClick}>
              View Projects
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

class ContentContainer extends React.Component {
  render() {
    return (
      <div id="content_container">
        <AboutMeViewer
          onClick={this.props.onClick}
          mobileViewProjects={this.props.mobileViewProjects}
          viewKey={this.props.viewKey}
        />

        <ProjectViewer
          projectKey={this.props.projectKey}
          proj={this.props.currentProject}
          mobileViewProjects={this.props.mobileViewProjects}
          viewKey={this.props.viewKey}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

class ProjectMenu extends React.Component {
  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          key={this.props.viewKey}
          timeout={1000}
          classNames="slide"
        >
          <div
            className={
              this.props.mobileViewProjects
                ? "visible projects_container"
                : "hidden"
            }
          >
            {projectsArray.map((proj, i) => {
              return (
                <ProjectCard
                  currentProject={this.props.currentProject}
                  project={proj}
                  imgName={proj.image}
                  heading={proj.name}
                  key={i}
                  onClick={() => this.props.onClick(i)}
                />
              );
            })}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: projectsArray[0],
      mobileViewProjects: false,
      viewKey: 0,
    };
    this.projectClicked = this.projectClicked.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  projectClicked(i) {
    this.setState({
      selectedProject: projectsArray[i],
      projectKey: i, // This is passed down to video component and serves as a key attribute for the div it's contained in to trigger a re-render and change videos
    });
  }

  toggleView() {
    this.state.viewKey === 0
      ? this.setState({
          mobileViewProjects: true,
          viewKey: 1,
        })
      : this.setState({
          mobileViewProjects: false,
          viewKey: 0,
        });
  }

  render() {
    return (
      <div>
        <ContentContainer
          currentProject={this.state.selectedProject}
          projectKey={this.state.projectKey}
          onClick={this.toggleView}
          mobileViewProjects={this.state.mobileViewProjects}
          viewKey={this.state.viewKey}
        />

        <ProjectMenu
          currentProject={this.state.selectedProject}
          viewKey={this.state.viewKey}
          onClick={(i) => this.projectClicked(i)}
          mobileViewProjects={this.state.mobileViewProjects}
        />
      </div>
    );
  }
}

export default App;
