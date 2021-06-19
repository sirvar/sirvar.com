// /pages/_app.js
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            background-color: #151515;
            font-family: "Space Mono", "monospace";
            margin: 0;
            padding: 0;
          }

          p {
            color: #9c9da1;
            font-size: 0.8rem;
            font-weight: 400;
          }
        `}</style>
      </div>
    );
  }
}

export default MyApp;
