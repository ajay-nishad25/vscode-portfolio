export async function getGithubProfileBasicDataApi(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}
