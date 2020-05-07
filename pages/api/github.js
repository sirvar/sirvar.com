import "isomorphic-unfetch"

export default async (req, res) => {
  try {
    fetch('https://api.github.com/repos/' + req.query.repo, {
      headers: {
        'Authorization': process.env.GITHUB_TOKEN, 
        'Content-Type': 'application/json'
      }, 
    })
    .then(response => response.json())
    .then(data => res.status(200).json({
      stars: data.stargazers_count
    }))
    
  } catch (e) {
    res.status(500).json({error: e, 'Authorization': 'token ' + process.env.GITHUB_TOKEN, })
  }
}