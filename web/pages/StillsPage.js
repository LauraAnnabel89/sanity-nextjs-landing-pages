import PropTypes from 'prop-types'
import React, {Component} from 'react'
import NextSeo from 'next-seo'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../components/Layout'
import client from '../client'
import ImageGallery from '../components/sections/ImageGallery'

const builder = imageUrlBuilder(client)
const pageQuery = groq`
*[_type == "stills" && slug.current == $slug][0]{
  ...,
}
`

class LandingPage extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    // TODO: improve types
    disallowRobots: PropTypes.any,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any,
    slug: PropTypes.any
  };

  static async getInitialProps ({query}) {
    const {slug} = query
    if (!query) {
      console.error('no query')
      return
    }
    if (slug && slug !== '/') {
      return client.fetch(pageQuery, {slug}).then((res) => ({...res, slug}))
    }

    return null
  }

  render () {
    const {
      title = 'Missing title',
      description,
      disallowRobots,
      openGraphImage,
      image = [],
      config = {},
      headerInvert = false,
      slug
    } = this.props

    const openGraphImages = openGraphImage
      ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title
        },
        {
          // Facebook recommended size
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title
        },
        {
          // Square 1:1
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title
        }
      ]
      : []

    return (
      <Layout slug={slug} config={config} headerInvert={headerInvert}>
        <NextSeo
          config={{
            title,
            titleTemplate: `${config.title} | %s`,
            description,
            canonical: config.url && `${config.url}/${slug}`,
            openGraph: {
              images: openGraphImages
            },
            noindex: disallowRobots
          }}
        />
        {image && <ImageGallery images={image} back={'/stills'} name={title} />}
      </Layout>
    )
  }
}

export default LandingPage
