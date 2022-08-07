/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const menuStyles = css`
position: absolute;
right: 0;
background-color: white;
height: 100vh;
width: 65%;
padding-left: 1.5rem;
box-sizing: border-box;
`;

const itemsListStyles = css`
`;

const featuresItem = css`
margin-top: 5rem;
`;

export default function MobileMenu() {
  return <div css={menuStyles}>
    <ul css={itemsListStyles}>
      <li css={featuresItem}>
        <span>Features</span>
        <ul>
          <li>Todo List</li>
          <li>Calendar</li>
          <li>Reminders</li>
          <li>Planning</li>
        </ul>
      </li>
      <li>
        <span>Company</span>
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