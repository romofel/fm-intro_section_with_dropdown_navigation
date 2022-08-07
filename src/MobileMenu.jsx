/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import iconArrowDown from './assets/icon-arrow-down.svg';

const menuStyles = css`
position: absolute;
right: 0;
background-color: white;
height: 100vh;
width: 65%;
padding-left: 1.5rem;
box-sizing: border-box;
font-family: 'Epilogue', sans-serif;
font-weight: 500;
color: hsl(0, 0%, 41%);
`;

const itemsListStyles = css`
& li:not(:first-of-type) {
  margin-top: 1rem;
}
`;

const featuresItem = css`
margin-top: 5rem;
& ul {
  display: none;
}
`;

const companyItem = css`
& ul {
  display: none;
}
`;

export default function MobileMenu() {
  return <div css={menuStyles}>
    <ul css={itemsListStyles}>
      <li css={featuresItem}>
        <div>
          <span>Features</span>
          <img src={iconArrowDown} alt="down arrow icon" />
        </div>
        <ul>
          <li>Todo List</li>
          <li>Calendar</li>
          <li>Reminders</li>
          <li>Planning</li>
        </ul>
      </li>
      <li css={companyItem}>
        <div>
          <span>Company</span>
          <img src={iconArrowDown} alt="down arrow icon" />
        </div>
        <ul>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
      </li>
      <li>Careers</li>
      <li>About</li>
    </ul>

    <div className="actions">
      <button>Login</button>
      <button>Register</button>
    </div>
  </div>;
}