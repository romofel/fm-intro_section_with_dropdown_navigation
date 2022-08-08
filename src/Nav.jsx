/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import iconArrowDown from "./assets/icon-arrow-down.svg";
import iconArrowUp from "./assets/icon-arrow-up.svg";
import iconTodo from "./assets/icon-todo.svg";
import iconCalendar from "./assets/icon-calendar.svg";
import iconReminders from "./assets/icon-reminders.svg";
import iconPlanning from "./assets/icon-planning.svg";

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
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    font-size: 14px;
    line-height: 1.14;
    color: hsl(0, 0%, 41%);
    font-weight: 500;
    margin-left: 4rem;

    .nav-menu-element:not(:first-of-type) {
      margin-left: 2.5rem;
    }
  }
`;

const ctaButtonsStyles = css`
  display: none;

  @media (min-width: 1024px) {
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
  }
`;

const hoverMenuStyles = css`
  position: absolute;
  left: -5rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  box-sizing: border-box;
  background-color: white;
  width: 153px;
  height: 160px;
  border-radius: 10px;
  box-shadow: 0 10px 40px 0 rgba(0 0 0 / 14.91%);
`;

function HoverMenu({ children, align, height = 160 }) {
  return (
    <ul
      css={[
        hoverMenuStyles,
        css`
          ${align === "right" ? "left: 0;" : ""}
          height: ${height}px;
        `,
      ]}
    >
      {children}
    </ul>
  );
}

function FeaturesMenuItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      css={css`
        position: relative;
      `}
      className="nav-menu-element"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="arrow-container">
        <span>Features</span>
        <img src={isOpen ? iconArrowUp : iconArrowDown} alt="down arrow icon" />
      </div>
      {isOpen && (
        <HoverMenu>
          <li>
            <img src={iconTodo} alt="nav element icon" />
            <span
              css={css`
                margin-left: 0.5rem;
              `}
            >
              Todo List
            </span>
          </li>
          <li>
            <img src={iconCalendar} alt="nav element icon" />
            <span
              css={css`
                margin-left: 0.5rem;
              `}
            >
              Calendar
            </span>
          </li>
          <li>
            <img src={iconReminders} alt="nav element icon" />
            <span
              css={css`
                margin-left: 0.5rem;
              `}
            >
              Reminders
            </span>
          </li>
          <li>
            <img src={iconPlanning} alt="nav element icon" />
            <span
              css={css`
                margin-left: 0.5rem;
              `}
            >
              Planning
            </span>
          </li>
        </HoverMenu>
      )}
    </li>
  );
}

function CompanyMenuItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      css={css`
        position: relative;
      `}
      className="nav-menu-element"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="arrow-container">
        <span>Company</span>
        <img src={isOpen ? iconArrowUp : iconArrowDown} alt="down arrow icon" />
      </div>
      {isOpen && (
        <HoverMenu align={"right"} height={128}>
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </HoverMenu>
      )}
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
