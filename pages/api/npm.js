import "isomorphic-unfetch"

export default async (req, res) => {
  try {
    fetch(`https://api.npmjs.org/downloads/point/2000-01-01:${new Date().toISOString().split('T')[0]}/${req.query.package}`)
    .then(response => response.json())
    .then(data => res.status(200).json({
      downloads: data.downloads
    }))
    .catch(e => res.status(500).json({error: e}))
  } catch (e) {
    res.status(500).json({error: e})
  }
}