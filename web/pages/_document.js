import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import client from '../client'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then((lang) => {
      return {...initialProps, lang}
    })
  }

  render () {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/static/favicons/safari-pinned-tab.svg' color='#aaaaaa' />
          <link rel='shortcut icon' href='/static/favicons/favicon.ico' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-config' content='/static/favicons/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
