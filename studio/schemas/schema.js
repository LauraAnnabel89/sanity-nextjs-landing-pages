// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import video from './objects/video'
import homepagevideo from './objects/homepagevideo'
import hero from './objects/hero'
import homePage from './objects/homePage'
import imageSection from './objects/imageSection'
import fullbleedimage from './objects/fullbleedimage'
import mailchimp from './objects/mailchimp'
import textSection from './objects/textSection'
import twoColumn from './objects/twoColumn'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    homePage,
    twoColumn,
    video,
    homepagevideo,
    imageSection,
    fullbleedimage,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection
  ])
})
