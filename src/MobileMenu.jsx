/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const menuStyles = css`
position: absolute;
right: 0;
background-color: white;
height: 100vh;
width: 65%;
`;

export default function MobileMenu() {
  return <div css={menuStyles}>MobileMenu Component</div>;
}