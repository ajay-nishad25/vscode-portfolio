import { GET_GITHUB_PROFILE_BASIC_DATA } from "../ActionType/githubTypes";

const initialState = {
  githubProfileBasicData: {},
};

function githubReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GITHUB_PROFILE_BASIC_DATA:
      return { ...state, githubProfileBasicData: action.payload };
    default:
      return state;
  }
}

export default githubReducer;
