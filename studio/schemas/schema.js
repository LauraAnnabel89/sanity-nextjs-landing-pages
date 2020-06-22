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
import fourColumn from './objects/fourColumn'
import hero from './objects/hero'
import homePage from './objects/homePage'
import homepagevideo from './objects/homepagevideo'
import imageGrid from './objects/imageGrid'
import imageSection from './objects/imageSection'
import imageSlider from './objects/imageSlider'
import internalLink from './objects/internalLink'
import link from './objects/link'
import locationsImageGallery from './objects/locationsImageGallery'
import mailchimp from './objects/mailchimp'
import modalImageGrid from './objects/modalImageGrid'
import navigationImageGrid from './objects/navigationImageGrid'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import textSection from './objects/textSection'
import textSectionThreeColumns from './objects/textSectionThreeColumns'
import threeColumn from './objects/threeColumn'
import twoColumn from './objects/twoColumn'
import video from './objects/video'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    fourColumn,
    hero,
    homePage,
    homepagevideo,
    imageGrid,
    imageSection,
    imageSlider,
    internalLink,
    link,
    locationsImageGallery,
    mailchimp,
    modalImageGrid,
    navigationImageGrid,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,
    textSectionThreeColumns,
    threeColumn,
    twoColumn,
    video
  ])
})
