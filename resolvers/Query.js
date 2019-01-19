const fetch = require('node-fetch')
const api = process.env.VH_ENDPOINT

const Query = {
  Query: {
    projects: (obj, args) => {
      const { language } = args
      return fetch(`${api}/projects?language=${language}`).then(response => response.json())
    },
    project: (obj, args) => {
      const { language, slug } = args
      return fetch(`${api}/projects/${slug}?language=${language}`).then(response => response.json())
    },
  },
}

module.exports = Query
