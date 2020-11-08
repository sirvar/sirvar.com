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

export const npm = async(pckg) => {
  return fetch(`https://npm-stat.com/api/download-counts?package=${pckg}&from=2014-01-01&until=${new Date().toISOString().split('T')[0]}`)
  .then(response => response.json())
  .then(data => {
    let downloads = Object.values(data[pckg])
    const rounded = Math.floor((downloads.reduce(sum) / 1000)) * 1000
    const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+"
    return formatted
  })
}

function sum(total, n) {
  return total + n
}
