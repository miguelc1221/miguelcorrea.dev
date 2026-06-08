import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): React.JSX.Element {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ color: '#CCD6F6' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
