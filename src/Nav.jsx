/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Hamburger from 'hamburger-react';

const navStyles = css`
color: black;
font-family: 'Epilogue', sans-serif;
font-weight: 700;
font-size: 35px;
padding: 1rem;
`;

export default function Nav() {
  return (
  <nav css={navStyles}>
    <h2>snap</h2>
    <Hamburger />
  </nav>
  );

}