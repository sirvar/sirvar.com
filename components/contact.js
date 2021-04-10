import React from "react";
import styled from "styled-components";

const me = "/me.jpg";
const github = "/github.svg";
const linkedin = "/linkedin.svg";
const telegram = "/telegram.svg";
const email = "/email.svg";
const resume = "/resume.svg";
const camera = "/camera.svg";
const sponsor = "/sponsor.svg";

const icons = [
  {
    asset: github,
    link: "https://github.com/sirvar",
    alt: "GitHub",
  },
  {
    asset: linkedin,
    link: "https://linkedin.com/in/sirvar",
    alt: "LinkedIn",
  },
  {
    asset: telegram,
    link: "http://t.me/sirvar",
    alt: "Telegram",
  },
  {
    asset: email,
    link: "mailto:me@sirvar.com",
    alt: "Email",
  },
  {
    asset: resume,
    link: "/resume.pdf",
    alt: "Resume",
  },
  {
    asset: camera,
    link: "https://unsplash.com/@sirvar",
    alt: "Unsplash",
  },
  {
    asset: sponsor,
    link: "https://github.com/sponsors/sirvar",
    alt: "Buy me a coffee",
  },
];

const Contact = styled.div`
  position: fixed;
  bottom: 5em;
  width: 35%;
  @media (max-width: 980px) {
    position: relative;
    width: 100%;
    bottom: 0;
  }
`;

Contact.Profile = styled.img`
  border-radius: 50%;
  width: 4em;
  height: 4em;
`;

Contact.Icons = styled.div`
  float: right;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 4em;
`;

const ContactView = () => (
  <Contact>
    <Contact.Profile src={me} />
    <Contact.Icons>
      {icons.map((icon) => {
        const IconAsset = styled.img`
          color: white;
          width: 1.5em;
          transition: all 0.3s cubic-bezier(0.75, 0, 0.25, 1);
          &:hover {
            transform: scale(1.25);
          }
        `;
        return (
          <a href={icon.link} target="_blank" key={icon.asset} title={icon.alt}>
            <IconAsset src={icon.asset} />
          </a>
        );
      })}
    </Contact.Icons>
  </Contact>
);
export default ContactView;
