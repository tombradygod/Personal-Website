"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className={open ? "site is-open" : "site"}>
      <div className="grain" aria-hidden="true" />
      <header className="masthead" aria-label="Site header">
        <span>R. SHAH</span>
        <span>UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL</span>
      </header>

      <section className="stage" aria-label="An introduction from Rushil Shah">
        <button
          className="envelope"
          type="button"
          aria-label={open ? "Close Rushil Shah's letter" : "Open Rushil Shah's letter"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="letter-preview">
            <span className="preview-mark">RS</span>
            <span className="preview-line">Finance · Biology · Enterprise</span>
          </span>
          <span className="envelope-back" />
          <span className="envelope-paper" />
          <span className="flap" />
          <span className="envelope-front" />
          <span className="seal" aria-hidden="true">R</span>
        </button>
        <p className="hint">{open ? "select the envelope to close" : "select to open"}</p>
      </section>

      <section className="letter" aria-hidden={!open}>
        <div className="letter-topline">
          <span>SELECTED NOTES</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close letter">
            CLOSE ×
          </button>
        </div>

        <div className="letter-body">
          <aside className="folio">
            <span>Rushil Shah</span>
            <span>UNC ’28</span>
            <span>Chapel Hill</span>
          </aside>

          <article>
            <p className="eyebrow">Rushil Shah</p>
            <h1>Finance, biology,<br /><em>and things worth building.</em></h1>
            <p className="intro">
              My name is Rushil, and I’m a Carolina Scholar at UNC Chapel Hill
              working across finance, biology, and entrepreneurship. I’m currently
              building <strong>Quelzo</strong>,
              an evidence-intelligence layer designed to turn fragmented clinical
              literature into structured, decision-ready insight for epidemiology,
              neurology, and family medicine.
            </p>

            <div className="rule"><span>RESEARCH</span></div>
            <div className="chapters research-grid">
              <section className="chapter">
                <span className="chapter-number">01 / ENVIRONMENTAL</span>
                <h2>From soil, through matter</h2>
                <p>
                  A connected body of work on heavy-metal remediation: first
                  examining phytoextraction through living systems, then developing
                  humic acid-based methodologies to improve removal from contaminated
                  environments.
                </p>
              </section>
              <a
                className="chapter chapter-link"
                href="/celebrity-crypto-research.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span className="chapter-number">02 / MARKETS ↗</span>
                <h2>Into markets</h2>
                <p>
                  A 796-participant, multidisciplinary study combining multilevel
                  latent class analysis with a quantitative model for identifying
                  susceptibility and artificial growth around celebrity-endorsed
                  cryptocurrencies.
                </p>
              </a>
            </div>

            <p className="isef">
              3× Regeneron International Science &amp; Engineering Fair Finalist
              <span>Atlanta · Dallas · Los Angeles</span>
            </p>

            <div className="rule"><span>FINANCE</span></div>
            <div className="career">
              <div className="career-row">
                <span className="career-status">Next</span>
                <h3>J.P. Morgan</h3>
                <p>Incoming 2027 Investment Banking Summer Analyst · New York</p>
              </div>
              <div className="career-row">
                <span className="career-status">Now</span>
                <h3>MiddleGround Capital</h3>
                <p>Private Equity Summer Analyst · Lexington</p>
              </div>
              <div className="career-row">
                <span className="career-status">Before</span>
                <h3>Edgewater Strategy Group</h3>
                <p>Investment Banking Summer Analyst · Bogotá, Colombia · Hogan Fellowship</p>
              </div>
            </div>

            <div className="rule"><span>INVESTING</span></div>
            <a
              className="feature-link"
              href="https://substack.com/@rushilshah217"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <span className="feature-kicker">NOTES ON MARKETS</span>
                <h3>The Signal Layer</h3>
              </div>
              <p>
                Occasional writing on companies, sectors, and the information
                underneath a market’s first impression.
              </p>
              <span className="arrow">↗</span>
            </a>

            <div className="rule"><span>FINANCIAL ACCESS</span></div>
            <div className="impact">
              <div>
                <p className="feature-kicker">FOUNDED 2020</p>
                <h3>Brevard Finance for Youth</h3>
              </div>
              <p>
                Built to make financial literacy more available in Florida’s
                Title I schools: 1,500+ students reached, four food drives
                supporting 800+ students, and statewide advocacy through two
                TEDx talks and testimony before the Florida House of Representatives.
              </p>
            </div>

            <footer className="letter-footer">
              <p>rushil_shah2[at]kenan-flagler.unc.edu</p>
              <nav aria-label="Contact and profiles">
                <a href="mailto:rushil_shah2@kenan-flagler.unc.edu">Email</a>
                <a href="https://linkedin.com/in/rushilshah217" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://substack.com/@rushilshah217" target="_blank" rel="noreferrer">Substack</a>
              </nav>
            </footer>
          </article>
        </div>
      </section>

      <footer className="page-footer">
        <span>FINANCE / MEDICAL TECHNOLOGY / VENTURE</span>
        <a href="mailto:rushil_shah2@kenan-flagler.unc.edu">EMAIL</a>
      </footer>
    </main>
  );
}
