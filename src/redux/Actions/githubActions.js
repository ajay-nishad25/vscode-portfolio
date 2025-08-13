import {
  GET_GITHUB_PROFILE_BASIC_DATA,
  GET_STARRED_REPOS_LIST_DATA,
} from "../ActionType/githubTypes";

import {
  getGithubProfileBasicDataApi,
  getStarredReposListApi,
} from "../../api/githubApi";

export const getGithubProfileBasicData = (username) => async (dispatch) => {
  const data = await getGithubProfileBasicDataApi(username);
  dispatch({ type: GET_GITHUB_PROFILE_BASIC_DATA, payload: data });
  return Promise.resolve(data);
};

export const getStarredReposList = (username) => async (dispatch) => {
  const data = await getStarredReposListApi(username);
  dispatch({ type: GET_STARRED_REPOS_LIST_DATA, payload: data });
  return Promise.resolve(data);
};
