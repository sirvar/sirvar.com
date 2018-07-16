import Head from 'next/head'

export default (props) =>
  <div>
    <Head>
      <title>{ props.title }</title>
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700"rel="stylesheet"media="none"onload="this.media='all';" />
      <link rel="stylesheet"href="/static/main.css"media="none"onload="this.media='all';" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#25B394" />
    </Head>
  </div>