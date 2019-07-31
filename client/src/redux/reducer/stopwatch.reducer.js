import { STOPWATCH_UPDATE } from "../actions/stopwatch.actions";

const initState = {
  seconds: 0,
  interval: 1000
};

export const stopwatchReducer = (state = initState, action) => {
  switch (action.type) {
    case STOPWATCH_UPDATE:
      const seconds = state.seconds + 1;
      return {
        ...state,
        seconds
      };

    default:
      return state;
  }
};
