const express = require('express')
const next = require('next')
const routes = require('next-routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})

const r = routes().add({name: 'LandingPage', pattern: '/:page', page: 'LandingPage'})
const handler = r.getRequestHandler(app)

const PROD_PORT = process.env.PORT || 80
const PORT = dev ? 3000 : PROD_PORT

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
