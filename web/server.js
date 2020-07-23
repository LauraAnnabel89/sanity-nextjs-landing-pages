const express = require('express')
const next = require('next')
const routes = require('next-routes')
const pathmap = require('./next.config').exportPathMap()

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})

pathmap.then((paths) => {
  Object.keys(paths).forEach((key) => {
    const path = paths[key]

    try {
      const {query, page} = path
      const {slug} = query

      routes().add(slug, `/${slug}`, page.replace('/', ''))
    } catch (err) {
      // Silent
    }
  })

  const handler = routes().getRequestHandler(app)

  const PORT = dev ? 3000 : 80

  app.prepare()
    .then(() => {
      const server = express()

      server.use(handler)
      server.listen(PORT, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${PORT}`)
      })
    })
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    })
})
