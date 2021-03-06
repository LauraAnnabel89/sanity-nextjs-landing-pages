// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page'
import still from './documents/still'
import route from './documents/route'
import siteConfig from './documents/siteConfig'

// Object types
import contactsSection from './objects/contactsSection'
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import figureGallery from './objects/figureGallery'
import fourColumn from './objects/fourColumn'
import hero from './objects/hero'
import heroSingle from './objects/heroSingle'
import imageGrid from './objects/imageGrid'
import imageSection from './objects/imageSection'
import imageSlider from './objects/imageSlider'
import internalLink from './objects/internalLink'
import link from './objects/link'
import locationsImageGallery from './objects/locationsImageGallery'
import mailchimp from './objects/mailchimp'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import stillsImageGallery from './objects/stillsImageGallery'
import stillsImageGrid from './objects/stillsImageGrid'
import textSection from './objects/textSection'
import legalSection from './objects/legalSection'
import textSectionThreeColumns from './objects/textSectionThreeColumns'
import threeColumn from './objects/threeColumn'
import twoColumn from './objects/twoColumn'
import twoColumnWithText from './objects/twoColumnWithText'
import video from './objects/video'
import videoGrid from './objects/videoGrid'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    contactsSection,
    cta,
    embedHTML,
    figure,
    figureGallery,
    fourColumn,
    hero,
    heroSingle,
    imageGrid,
    imageSection,
    imageSlider,
    internalLink,
    link,
    locationsImageGallery,
    mailchimp,
    page,
    still,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    stillsImageGallery,
    stillsImageGrid,
    textSection,
    legalSection,
    textSectionThreeColumns,
    threeColumn,
    twoColumn,
    twoColumnWithText,
    video,
    videoGrid
  ])
})
