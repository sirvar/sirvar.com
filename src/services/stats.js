import fetch from "isomorphic-fetch"

export const getStars = (repo) => {
  return fetch('https://api.github.com/repos/' + repo, {
    headers: new Headers({
      'Authorization': 'token 96841690ca04f21d6c04296b4ea78fdd7d2ecd33', 
      'Content-Type': 'application/json'
    }), 
  })
  .then(res => res.json())
  .then(data => data.stargazers_count)
}

export const getNPMDownloads = (name) => {
  return fetch(`https://api.npmjs.org/downloads/point/2014-01-01:${new Date().toISOString().split('T')[0]}/${name}`)
  .then(res => res.json())
  .then(data => data.downloads)
}