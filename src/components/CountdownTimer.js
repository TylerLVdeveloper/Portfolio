import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ES6

import desertImg from "../BackgroundImages/desert.jpg";
import infoIcon from "../ButtonIcons/infoIcon.png";
import closeIcon from "../ButtonIcons/closeIcon.png";

const outerContainer = {
  position: "relative",
  width: "90%",
  height: "auto",
  marginTop: "50px",
  marginRight: "auto",
  marginLeft: "auto",
  backgroundImage: `url(${desertImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "black",
  borderRadius: "5px",
};

const timerContainer = {
  textAlign: "center",
  backgroundColor: "none",
  display: "grid",
  gridTemplateColumns: "25% 25% 25% 25%",
  girdTemplateRows: "40% 40% 20%",
};
const mainText = {
  fontSize: "3em",
  paddingTop: "15px",
};
const subText = {
  fontSize: "1em",
  paddingBottom: "25px",
};

const until = {
  fontFamily: '"Josefin Sans", sans-serif',
  fontSize: "1.2em",
  textAlign: "center",
};

const occasion = {
  fontFamily: "'Graduate', cursive",
  fontSize: "2.7em",
  backgroundColor: "none",
  color: "black",
  textAlign: "center",
  paddingBottom: "50px",
  paddingTop: "10px",
};

const infoIconContainer = {
  position: "absolute",
  bottom: "5px",
  left: "45%",
  width: "10%",
};

const infoOverlay = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  opacity: ".95",
  backgroundColor: "white",
};

const hidden = {
  display: "none",
};

const degreeDetails = {
  fontSize: "1.3em",
  padding: "15px",
  textAlign: "center",
};

const universityText = {
  fontSize: "1.2em",
  padding: "15px",
  textAlign: "center",
  fontFamily: "'Graduate', cursive",
};

const closeIconContainer = {
  position: "absolute",
  bottom: "5px",
  left: "45%",
  width: "10%",
};

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoView: false,
      viewKey: 0,
    };
    this.handleInfoClick = this.handleInfoClick.bind(this);
  }

  tick() {
    this.newYears = "22 Nov 2021";
    this.newYearsDate = new Date(this.newYears);
    this.currentDate = new Date();

    this.secsRemaining = (this.newYearsDate - this.currentDate) / 1000;

    this.daysRemaining = Math.floor(this.secsRemaining / 3600 / 24);
    this.hoursRemaining = Math.floor((this.secsRemaining / 3600) % 24);
    this.minutesRemaining = Math.floor((this.secsRemaining / 60) % 60);
    this.secondsRemaining = Math.floor(this.secsRemaining % 60);

    this.setState({
      daysLeft: this.daysRemaining,
      hoursLeft: this.hoursRemaining,
      minutesLeft: this.minutesRemaining,
      secondsLeft: this.secondsRemaining,
    });
  }

  componentDidMount() {
    this.tick();
    this.countDown = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  handleInfoClick() {
    this.setState((prevState) => {
      return {
        infoView: !prevState.infoView,
        viewKey: prevState.viewKey === 0 ? 1 : 0,
      };
    });
  }

  render() {
    const addZero = (num) => {
      if (num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    };

    return (
      <div style={outerContainer}>
        <TransitionGroup>
          <CSSTransition
            key={this.state.viewKey}
            timeout={1000}
            classNames="slideIn"
          >
            <div style={this.state.infoView ? infoOverlay : hidden}>
              <div style={degreeDetails}>
                Bachelor of Science in Information Technology with an Advanced
                Software Developer Certificate
              </div>
              <div style={universityText}>University of Phoenix</div>
              <div style={closeIconContainer}>
                <img
                  src={closeIcon}
                  width="35px"
                  height="35px"
                  onClick={this.handleInfoClick}
                />
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>

        <div style={timerContainer}>
          <div style={mainText}>{addZero(this.state.daysLeft)}</div>
          <div style={mainText}>{addZero(this.state.hoursLeft)}</div>
          <div style={mainText}>{addZero(this.state.minutesLeft)}</div>
          <div style={mainText}>{addZero(this.state.secondsLeft)}</div>
          <div style={subText}>Days</div>
          <div style={subText}>Hours</div>
          <div style={subText}>Minutes</div>
          <div style={subText}>Seconds</div>
        </div>
        <div style={until}>Until</div>
        <div style={occasion}>Graduation</div>
        <div style={this.state.infoView ? hidden : infoIconContainer}>
          <img
            src={infoIcon}
            width="35px"
            height="35px"
            onClick={this.handleInfoClick}
          />
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
