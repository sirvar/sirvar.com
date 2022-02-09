import axios, { AxiosResponse } from 'axios';

const GITHUB_API_URL = process.env.GITHUB_API_URL;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export const getUser = async () => {
  if (!GITHUB_API_URL || !GITHUB_TOKEN) return;

  try {
    const user = (await axios.get(`${GITHUB_API_URL}/users/sirvar`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })) as AxiosResponse;

    return user.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getRepos = async () => {
  if (!GITHUB_API_URL || !GITHUB_TOKEN) return;

  try {
    const repos = (await axios.get(`${GITHUB_API_URL}/users/sirvar/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })) as AxiosResponse;

    return repos.data;
  } catch (err: any) {
    throw new Error(err);
  }
};
