import { combineReducers } from "redux";
import githubReducer from "./githubReducer";

const rootReducer = combineReducers({
  githubReducer,
});
export default rootReducer;
