const withCSS = require('@zeit/next-css')
const client = require('./client')
// const withTM = require("next-transpile-modules");

const isProduction = process.env.NODE_ENV === 'production'
const query = `
{
  "routes": *[_type == "route"] {
    ...,
    disallowRobot,
    includeInSitemap,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
    }
  },
  "stills": *[_type == "stills"] {
    ...,
  },
}
`
const reduceRoutes = (obj, route) => {
  const {page = {}, slug = {}} = route
  const {_createdAt, _updatedAt} = page
  const {includeInSitemap, disallowRobot} = route
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  obj[path] = {
    query: {
      slug: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: '/LandingPage'
  }
  return obj
}

const exportPathMap = () => {
  return client.fetch(query).then((res) => {
    const {routes = [], stills = []} = res

    const nextRoutes = {
      // Routes imported from sanity
      ...routes.filter((route) => typeof route.slug !== 'undefined').filter(({slug}) => slug.current).reduce(reduceRoutes, {}),
      ...stills.filter((route) => typeof route.slug !== 'undefined').filter(({slug}) => slug.current).reduce(reduceRoutes, {})
    }
    return nextRoutes
  })
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
  },
  exportTrailingSlash: true,
  exportPathMap
})
