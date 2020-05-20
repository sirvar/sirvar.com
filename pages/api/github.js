import "isomorphic-unfetch"

export default async (req, res) => {
  try {
    github(req.query.repo)
    .then(stars => res.status(200).json({
      stars
    }))
  } catch (e) {
    res.status(500).json({error: e})
  }
}

export const github = async (repo) => {
  return fetch('https://api.github.com/repos/' + repo, {
    headers: {
      'Authorization': 'token ' + process.env.GITHUB_TOKEN, 
      'Content-Type': 'application/json'
    }, 
  })
  .then(response => response.json())
  .then(data => data.stargazers_count)
}