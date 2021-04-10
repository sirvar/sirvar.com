import React from "react";
import styled from "styled-components";

import Contact from "./contact";

const Biography = styled.div`
  position: fixed;
  width: 35%;
  padding: 5em;
  @media (max-width: 980px) {
    position: relative;
    padding: 3em;
    width: calc(100% - 6em);
  }
`;

Biography.Heading = styled.h1`
  color: white;
  font-family: "Poppins", "Helvetica", "Arial", "Sans Serif";
  font-size: 4rem;
  margin: 0;
  line-height: 1.1;
  @media (max-width: 980px) {
    font-size: 3em;
  }
`;

Biography.Description = styled.p`
  color: #9c9da1;
  font-size: 0.9rem;
  line-height: 2;
  margin: 2em 0;
  width: 90%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

Biography.Highlight = styled.span`
  color: white;
  text-decoration: underline;
`;

Biography.Link = styled.a`
  color: white;
  text-decoration: underline;
`;

const BiographyView = () => (
  <Biography>
    <Biography.Heading>
      Hi, I'm <br></br>Rikin Katyal.
    </Biography.Heading>
    <Biography.Description>
      Let me tell you a little bit about myself. I'm currently working as a {" "}
      <Biography.Highlight>Software Developer</Biography.Highlight> @ Makeship{" "}
      and University of Windsor Honours Computer Science graduate. 
      I've been writing code for 7+ years working with various
      different languages and technologies, most notably;{" "}
      <Biography.Highlight>JavaScript</Biography.Highlight>,{" "}
      <Biography.Highlight>Java</Biography.Highlight>, and{" "}
      <Biography.Highlight>Python</Biography.Highlight>. In my free time, I
      enjoy travelling, photography, video games, and music.
    </Biography.Description>
    <Contact />
  </Biography>
);

export default BiographyView;
