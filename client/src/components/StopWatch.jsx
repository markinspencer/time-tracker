import React, { Component } from "react";
import { connect } from "react-redux";
import { stopwatchUpdate } from "../redux/actions/stopwatch.actions";

class StopWatch extends Component {
  timer;

  start = () => {
    if (!this.timer) {
      const { interval } = this.props.viewState.stopwatch;
      this.timer = setInterval(this.props.tick, interval);
    }
  };

  stop = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  render() {
    const { seconds } = this.props.viewState.stopwatch;
    const time = new Date(seconds * 1000).toISOString().substr(11, 8);
    return (
      <div>
        <div> {time} </div>
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
