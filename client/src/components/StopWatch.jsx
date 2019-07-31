import React, { Component } from "react";
import { connect } from "react-redux";
import { stopwatchUpdate } from "../redux/actions/stopwatch.actions";

class StopWatch extends Component {
  timer;

  start = () => {
    const { interval } = this.props.viewState.stopwatch;
    this.timer = setInterval(this.props.tick, interval);
  };

  stop = () => {
    clearInterval(this.timer);
  };

  render() {
    const { seconds } = this.props.viewState.stopwatch;
    return (
      <div>
        <div> {seconds} </div>
        <button onClick={() => this.start()}> Start </button>
        <button onClick={() => this.stop()}> Stop </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewState: state
});

const mapDispatchToProps = dispatch => ({
  tick: () => dispatch(stopwatchUpdate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopWatch);
