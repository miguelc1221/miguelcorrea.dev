import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en" className="text-lg font-light">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Josefin+Sans:ital,wght@0,300;0,400;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-neutral-100 dark:bg-secondary transition ease-in-out duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
