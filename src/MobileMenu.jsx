/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import iconArrowDown from './assets/icon-arrow-down.svg';
import iconTodo from './assets/icon-todo.svg';
import iconCalendar from './assets/icon-calendar.svg';
import iconReminders from './assets/icon-reminders.svg';
import iconPlanning from './assets/icon-planning.svg';

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
.arrow-container {
display: flex;
align-items: center;
}
`;

const itemsListStyles = css`
.menu-items:not(:first-of-type) {
  margin-top: 1rem;
}
`;

const featuresItem = css`
margin-top: 5rem;
& img {
  margin-left: 1rem;
}
`;

const companyItem = css`
& ul {
  display: none;
}
& img {
  margin-left: 1rem;
}
`;

const actionsStyles = css`
.login-button {
  display: block;
  background: none;
  border: none;
  color: hsl(0, 0%, 41%);
  font-family: 'Epilogue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-top: 2rem;
  width: 195px;
  height: 42px;
}
.register-button {
  display: block;
  width: 195px;
  height: 42px;
  color: hsl(0, 0%, 41%);
  font-family: 'Epilogue', sans-serif;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  border: 1.5px solid hsl(0, 0%, 41%);
  border-radius: 14px;
  margin-top: .5rem;
}
`;

const dropDownMenuStyles = (open) => css`
display: ${open ? 'block' : 'none'};
margin-top: 1.5rem;

.dropdown-element {
display: flex;
align-items: start;
}

.dropdown-element:not(:first-of-type) {
margin-top: 1rem;
}

.dropdown-element span {
margin-left: 1rem;
line-height: 1.625;
}
`;

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <li css={featuresItem} onClick={() => setIsOpen(!isOpen)}>
      <div className="arrow-container">
        <span>Features</span>
        <img src={iconArrowDown} alt="down arrow icon" />
      </div>
      <ul css={dropDownMenuStyles(isOpen)}>
        <li className="dropdown-element">
          <img src={iconTodo} alt="dropdown icon"/>
          <span>
          Todo List
          </span>
        </li>
        <li className="dropdown-element">
          <img src={iconCalendar} alt="dropdown icon" />
          <span>
          Calendar
          </span>
        </li>
        <li className="dropdown-element">
          <img src={iconReminders} alt="dropdown icon"/>
          <span>
            Reminders
          </span>
        </li>
        <li className="dropdown-element">
          <img src={iconPlanning} alt="dropdown icon"/>
          <span>
            Planning
          </span>
        </li>
      </ul>
    </li>
  );
}

export default function MobileMenu() {
  return <div css={menuStyles}>
    <ul css={itemsListStyles}>
      <DropDownMenu />
      <li className="menu-items" css={companyItem}>
        <div className="arrow-container">
          <span>Company</span>
          <img src={iconArrowDown} alt="down arrow icon" />
        </div>
        <ul>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
      </li>
      <li className="menu-items">Careers</li>
      <li className="menu-items">About</li>
    </ul>

    <div css={actionsStyles} className="actions">
      <button className="login-button">Login</button>
      <button className="register-button">Register</button>
    </div>
  </div>;
}
