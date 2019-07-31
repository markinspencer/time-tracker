import { combineReducers, createStore } from "redux";
import { stopwatchReducer } from "./reducer/stopwatch.reducer";

const rootReducer = combineReducers({
  stopwatch: stopwatchReducer
});

export const store = createStore(rootReducer);
