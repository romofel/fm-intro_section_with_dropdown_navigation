/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Nav from './Nav';
import mobileHero from './assets/image-hero-mobile.png'


const heroStyles = css`
width: 100%;
`;

const headingStyles = css`
color: black;
font-family: 'Epilogue', sans-serif;
font-weight: bold;
font-size: 2.25rem;
text-align: center;
margin-top: 3rem;
`;

export default function LandingPage() {
  return (
    <>
      <Nav />
      <div>
        <img css={heroStyles} src={mobileHero} alt="Hero for mobile" />
      </div>
      <h1 css={headingStyles}>Make remote work</h1>
      <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      <button>Learn more</button>
      <ul className="affiliates">
        <li>databiz</li>
        <li>audiophile</li>
        <li>meet</li>
        <li>maker</li>
      </ul>
    </>
  );
}