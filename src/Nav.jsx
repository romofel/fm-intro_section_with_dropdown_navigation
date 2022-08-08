/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Hamburger from "hamburger-react";

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
`;

const ctaButtonsStyles = css`
  margin-left: auto;
`;

function NavMenu() {
  return (
    <ul css={navMenuStyles}>
      <li>Features</li>
      <li>Company</li>
      <li>Careers</li>
      <li>About</li>
    </ul>
  );
}

function CTAButtons() {
  return (
    <div css={ctaButtonsStyles}>
      <button>Login</button>
      <button>Register</button>
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
