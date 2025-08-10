import { GET_GITHUB_PROFILE_BASIC_DATA } from "../ActionType/githubTypes";

import { getGithubProfileBasicDataApi } from "../../api/githubApi";

export const getGithubProfileBasicData = (username) => async (dispatch) => {
  const data = await getGithubProfileBasicDataApi(username);
  dispatch({ type: GET_GITHUB_PROFILE_BASIC_DATA, payload: data });
  return Promise.resolve(data);
};
