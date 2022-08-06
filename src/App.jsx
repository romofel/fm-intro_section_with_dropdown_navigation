/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function LandingPage() {
  return (
    <>
      <Nav />
      <div>Hero Image</div>
      <h1>Make remote work</h1>
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

function Nav() {
  return <nav>
    <h2>snap</h2>
    <div className="hamburger-menu"></div>
  </nav>
}

function App() {
  return (
    <LandingPage />
  );
}

export default App;
