export const STOPWATCH = "[stopwatch]";

export const STOPWATCH_UPDATE = `${STOPWATCH} START`;

export const stopwatchUpdate = () => ({
  type: STOPWATCH_UPDATE,
  payload: {}
});
