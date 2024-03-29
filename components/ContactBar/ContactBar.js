import Image from "next/image";
import React from "react";
import { copyToClipboard } from "./ContactEmail";
import styled from "styled-components";

const ContactsWrapper = styled.div`
  margin: 100px 0;
  position: relative;
  height: 100px;
  bottom: 35px;
  display: flex;
  gap: 3%;
  width: 100%;
  justify-content: center;
  @media (max-width: 350px) {
    flex-wrap: wrap;
  }
`;
export default function ContactBar() {
  return (
    <ContactsWrapper>
      <a href="https://github.com/AdaCra" target="_blank" rel="noreferrer">
        <Image
          src="/gitcat.png"
          alt="GitHub Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a
        href="https://www.linkedin.com/in/adam-hannath/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/linkedin.png"
          alt="LinkedIn Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a
        href="https://www.xing.com/profile/Adam_Hannath/cv"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/xing.png"
          alt="Xing Profile"
          width={50}
          height={50}
          priority
        />
      </a>
      <a
        href="mailto:ahannath.portfoliosite@gmail.com?subject=Portfolio%20Website%20Contact%20Email&body=(Enter%20your%20message%20here)"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          copyToClipboard();
        }}
      >
        <Image src="/email.png" alt="Email" width={50} height={50} priority />
      </a>
      <a href="/AH-CV_web-23.pdf" target="_blank" rel="noreferrer">
        <Image
          src="/resume.png"
          alt="Download Resume"
          width={50}
          height={50}
          priority
        />
      </a>
    </ContactsWrapper>
  );
}
