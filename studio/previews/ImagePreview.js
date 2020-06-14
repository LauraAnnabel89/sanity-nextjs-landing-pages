import React from 'react'
import client from 'part:@sanity/base/client'
import urlBuilder from '@sanity/image-url'

const urlFor = source => urlBuilder(client).image(source)

const imagePreview = ({ value }) => {
  return (
    <div>
      <figure key={value._key}>
        <a href={value.internalLink}>
          <img
            src={urlFor(value.imageUrl)
              .width(400)
              .url()}
          />
          <figcaption>{value.title}</figcaption>
        </a>
      </figure>
    </div>
  )
}

export default imagePreview
