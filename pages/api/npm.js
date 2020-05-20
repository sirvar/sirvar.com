import "isomorphic-unfetch"

export default async (req, res) => {
  try {
    npm(req.query.package)
    .then(downloads => res.status(200).json({
      downloads
    }))
  } catch (e) {
    res.status(500).json({error: e})
  }
}

export const npm = async (pckg) => {
  return fetch(`https://api.npmjs.org/downloads/point/2000-01-01:${new Date().toISOString().split('T')[0]}/${pckg}`)
  .then(response => response.json())
  .then(data => {
    const rounded = Math.floor((data.downloads / 1000)) * 1000
    const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+"
    return formatted
  })
}