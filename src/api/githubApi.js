export async function getGithubProfileBasicDataApi(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

export async function getStarredReposListApi(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/starred`,
  );
  return response.json();
}
