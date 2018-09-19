import Head from '../head'
import Scramble from 'react-scramble'
import QRCode from 'qrcode.react'
import copy from 'copy-to-clipboard';

export default (props) => {
  return (
    <div className="container">
      <style jsx global>{`
        body {
          font-family: "IBM Plex Sans", "Helvetica", "Arial";
          margin: 0;
          color: #3f3f3f;
        }
        img {
          margin: 40px 0;
          width: 320px;
        }
        span {
          font-weight: 700;
          font-size: 3.8vw;
          margin: 50px 0;
          cursor: pointer;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <Head title={props.currency + " | Rikin Katyal"} />
      <img src={ "/static/img/" + props.image } />
      <Scramble
        autoStart
        text={ props.address }
        steps={[
          {
            roll: 10,
            action: '+',
            type: 'all',
          },
          {
            action: '-',
            type: 'forward',
          },
        ]}
        onClick={() => copy(props.address)}
      />
      <QRCode 
        value={ props.url }
        size="256"
        renderAs="svg"
        fgColor={ props.color }
      />
    </div>
  )
}