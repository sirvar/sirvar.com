import Head from 'next/head'

export default (props) =>
  <div>
    <Head>
      <title>{ props.title }</title>
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700"rel="stylesheet"media="none"onload="this.media='all';" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#25B394" />
      <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />
      <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"></link>
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-55807810-5"></script> */}
      {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-55807810-5');
      </script> */}
    </Head>
  </div>