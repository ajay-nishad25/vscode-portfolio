import {
  GET_GITHUB_PROFILE_BASIC_DATA,
  GET_STARRED_REPOS_LIST_DATA,
} from "../ActionType/githubTypes";

const initialState = {
  githubProfileBasicData: {},
  githubStarredReposList: [],
};

function githubReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GITHUB_PROFILE_BASIC_DATA:
      return { ...state, githubProfileBasicData: action.payload };
    case GET_STARRED_REPOS_LIST_DATA:
      return { ...state, githubStarredReposList: action.payload };
    default:
      return state;
  }
}

export default githubReducer;
