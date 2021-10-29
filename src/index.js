import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6
import projectsArray from "./ProjectData.js";

import gitHubIcon from "./IconImages/GitHub-icon.png";
import gitHubIcon2 from "./IconImages/GitHub-icon2.png";
import gmailIcon from "./IconImages/Gmail_Icon.png";
import linkedinIcon from "./IconImages/Linkedin_Icon.png";

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

class ProjectsContainer extends React.Component {
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

        <ProjectsContainer
          currentProject={this.state.selectedProject}
          viewKey={this.state.viewKey}
          onClick={(i) => this.projectClicked(i)}
          mobileViewProjects={this.state.mobileViewProjects}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
