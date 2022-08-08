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

export default function Nav({ onToggle }) {
  return (
    <nav css={navStyles}>
      <h2>snap</h2>
      <div className="nav-menu"></div>
    <div css={mobileMenuStyles}>
        <Hamburger onToggle={(toggled) => onToggle(toggled)} />
      </div>
    </nav>
  );
}
