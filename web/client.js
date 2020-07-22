const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'f24siizv',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: process.env.NODE_ENV === 'production' // `false` if you want to ensure fresh data
})

module.exports = client
