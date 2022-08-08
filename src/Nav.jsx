/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import iconArrowDown from "./assets/icon-arrow-down.svg";
import iconArrowUp from "./assets/icon-arrow-up.svg";

const navStyles = css`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Epilogue", sans-serif;
  font-weight: 700;
  font-size: 35px;
  padding: 1rem;

  @media (min-width: 1024px) {
    justify-content: start;
    padding-top: 2rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    .mobile-menu {
      display: none;
    }
  }
`;

const mobileMenuStyles = css`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const navMenuStyles = css`
  display: flex;
  font-size: 14px;
  line-height: 1.14;
  color: hsl(0, 0%, 41%);
  font-weight: 500;
  margin-left: 4rem;

  .nav-menu-element:not(:first-of-type) {
    margin-left: 2.5rem;
  }
`;

const ctaButtonsStyles = css`
  display: flex;
  margin-left: auto;

  .login-button {
    display: block;
    background: none;
    border: none;
    color: hsl(0, 0%, 41%);
    font-family: "Epilogue", sans-serif;
    font-size: 14px;
    font-weight: 500;
    width: 104px;
    height: 42px;
  }

  .register-button {
    display: block;
    width: 104px;
    height: 42px;
    color: hsl(0, 0%, 41%);
    font-family: "Epilogue", sans-serif;
    font-size: 14px;
    font-weight: 500;
    background-color: transparent;
    border: 1.5px solid hsl(0, 0%, 41%);
    border-radius: 14px;
  }
`;

const hoverMenuStyles = css`
`;

function HoverMenu({ children }) {
  return <ul css={hoverMenuStyles}>{children}</ul>;
}

function FeaturesMenuItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="nav-menu-element">
      <div className="arrow-container">
        <span>Features</span>
        <img src={isOpen ? iconArrowUp : iconArrowDown} alt="down arrow icon" />
      </div>
      <HoverMenu>
        <li>Todo List</li>
        <li>Calendar</li>
        <li>Reminders</li>
        <li>Planning</li>
      </HoverMenu>
    </li>
  );
}

function CompanyMenuItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="nav-menu-element">
      <div className="arrow-container">
        <span>Company</span>
        <img src={isOpen ? iconArrowUp : iconArrowDown} alt="down arrow icon" />
      </div>
    </li>
  );
}

function NavMenu() {
  return (
    <ul css={navMenuStyles}>
      <FeaturesMenuItem />
      <CompanyMenuItem />
      <li className="nav-menu-element">Careers</li>
      <li className="nav-menu-element">About</li>
    </ul>
  );
}

function CTAButtons() {
  return (
    <div css={ctaButtonsStyles}>
      <button className="login-button">Login</button>
      <button className="register-button">Register</button>
    </div>
  );
}

export default function Nav({ onToggle }) {
  return (
    <nav css={navStyles}>
      <h2>snap</h2>
      <NavMenu />
      <CTAButtons />
      <div css={mobileMenuStyles}>
        <Hamburger onToggle={(toggled) => onToggle(toggled)} />
      </div>
    </nav>
  );
}
