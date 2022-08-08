/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

import Nav from "./Nav";
import mobileHero from "./assets/image-hero-mobile.png";
import Affiliates from "./Affiliates";
import MobileMenu from "./MobileMenu";

const heroStyles = css`
  width: 100%;
  margin-top: 1.5rem;
`;

const headingStyles = css`
  color: black;
  font-family: "Epilogue", sans-serif;
  font-weight: bold;
  font-size: 2.25rem;
  text-align: center;
  margin-top: 3rem;
`;

const contentStyles = css`
  color: hsl(0, 0%, 41%);
  font-family: "Epilogue", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  width: 343px;
  line-height: 1.625;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`;

const ctaStyles = css`
  display: block;
  width: 136px;
  height: 48px;
  color: hsl(0, 0%, 98%);
  font-family: "Epilogue", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  background-color: black;
  border: none;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
`;

const containerStyles = css`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const heroContainerStyles = css``;
const contentContainerStyles = css`
  @media (min-width: 1024px) {
    order: -1;
  }
`;

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <MobileMenu />}
      <Nav onToggle={setIsOpen} />
      <div css={containerStyles}>
        <div>
          <img css={heroStyles} src={mobileHero} alt="Hero for mobile" />
        </div>
        <div css={contentContainerStyles}>
          <h1 css={headingStyles}>Make remote work</h1>
          <p css={contentStyles}>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button css={ctaStyles}>Learn more</button>
          <Affiliates />
        </div>
      </div>
    </>
  );
}
