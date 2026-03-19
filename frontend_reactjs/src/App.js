import React from "react";
import "./App.css";

// PUBLIC_INTERFACE
function App() {
  /** Main single-page welcome experience for the application. */
  return (
    <div className="App">
      <div className="appBackground" aria-hidden="true" />

      <header className="topBar">
        <div className="brand" aria-label="Application branding">
          <span className="brandMark" aria-hidden="true">
            <span className="brandDot brandDotPrimary" />
            <span className="brandDot brandDotAccent" />
          </span>
          <span className="brandName">Welcome Page</span>
          <span className="brandTag">Ocean Professional</span>
        </div>

        <a className="topBarLink" href="#get-started">
          Get started
        </a>
      </header>

      <main className="main" role="main">
        <section className="hero" aria-labelledby="welcome-title">
          <div className="heroCard">
            <p className="eyebrow">A clean, modern starting point</p>

            <h1 id="welcome-title" className="title">
              Welcome to your new React app
            </h1>

            <p className="subtitle">
              A centered, single-page welcome layout built with a minimalist,
              professional aesthetic—subtle gradients, soft shadows, rounded
              corners, and smooth transitions.
            </p>

            <div className="ctaRow" id="get-started">
              <a className="btn btnPrimary" href="https://react.dev" target="_blank" rel="noreferrer">
                React docs
              </a>
              <a
                className="btn btnGhost"
                href="https://testing-library.com/"
                target="_blank"
                rel="noreferrer"
              >
                Testing Library
              </a>
            </div>

            <div className="metaRow" aria-label="Environment information">
              <span className="metaPill">
                <span className="metaLabel">Environment</span>
                <span className="metaValue">
                  {process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || "development"}
                </span>
              </span>
              <span className="metaPill">
                <span className="metaLabel">Frontend URL</span>
                <span className="metaValue mono">
                  {process.env.REACT_APP_FRONTEND_URL || "—"}
                </span>
              </span>
            </div>
          </div>

          <aside className="sidePanel" aria-label="Highlights">
            <div className="panelHeader">
              <h2 className="panelTitle">What’s included</h2>
              <p className="panelSubtitle">A fast, friendly foundation</p>
            </div>

            <ul className="featureList">
              <li className="featureItem">
                <span className="featureIcon" aria-hidden="true">
                  ⚡
                </span>
                <div>
                  <p className="featureTitle">Lightweight</p>
                  <p className="featureBody">Vanilla CSS + React—no heavy UI frameworks.</p>
                </div>
              </li>

              <li className="featureItem">
                <span className="featureIcon" aria-hidden="true">
                  🎯
                </span>
                <div>
                  <p className="featureTitle">Ocean Professional theme</p>
                  <p className="featureBody">
                    Primary blue, amber accents, subtle depth, and polished motion.
                  </p>
                </div>
              </li>

              <li className="featureItem">
                <span className="featureIcon" aria-hidden="true">
                  ✅
                </span>
                <div>
                  <p className="featureTitle">Test-ready</p>
                  <p className="featureBody">Updated tests validate the new welcome content.</p>
                </div>
              </li>
            </ul>
          </aside>
        </section>

        <section className="infoGrid" aria-label="Next steps">
          <div className="infoCard">
            <h3 className="infoTitle">Customize branding</h3>
            <p className="infoBody">
              Update the title, logo marks, and links in <span className="mono">src/App.js</span>.
            </p>
          </div>

          <div className="infoCard">
            <h3 className="infoTitle">Add routes later</h3>
            <p className="infoBody">
              Keep this as a landing page, or add navigation when the app grows.
            </p>
          </div>

          <div className="infoCard">
            <h3 className="infoTitle">Wire to APIs</h3>
            <p className="infoBody">
              Environment variables are available for future integrations (API, backend, WS).
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footerText">
          Built with{" "}
          <span className="footerAccent" aria-label="Ocean Professional primary and accent colors">
            Ocean Professional
          </span>{" "}
          styling.
        </p>
      </footer>
    </div>
  );
}

export default App;
