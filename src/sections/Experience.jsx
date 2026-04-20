function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-label"><b>02</b> — Experience</div>
      <h2 className="section-title">Where I've<br/>shipped.</h2>

      {/* EWA */}
      <div className="xp-block">
        <div className="xp-meta">
          <div className="co"><a href="https://appewa.com/?language=en" target="_blank" rel="noopener noreferrer" className="co-link">EWA</a></div>
          <div className="role">Product Manager</div>
          <div className="when">Dec 2025 — Present</div>
          <div className="context">AI-powered language learning · mobile subscription (iOS/Android)</div>
        </div>
        <div className="xp-body">
          <p>At EWA, I lead two product teams — <strong>Monetization</strong> and <strong>New User Retention</strong>. EWA is freemium, so I basically own the first experience users meet: how well it lands on their learning goal, and how we turn a free user into a paid one. It means living at the intersection of monetization and retention, holding the big picture at all times.</p>
          <p>Proud of one process win: cutting <strong>time-to-market</strong> for user stories by building a self-service analytics layer — ClickHouse via MCP, Cursor workflow, AI agents taking over parts of the analyst's work. Teams now query and build dashboards on their own.</p>
          <p>Shipped so far: library user flow redesign (<span className="highlight">+38% ARPPU</span>), EWA Max onboarding upgrade (<span className="highlight">+7.3% ARPU iOS, +9.3% ARPU Android</span>).</p>

          <h4>Selected outcomes</h4>
          <div className="xp-outcomes">
            <div className="outcome"><div className="v">+38%</div><div className="d">ARPPU · library user flow redesign</div></div>
            <div className="outcome"><div className="v">+9.3%</div><div className="d">ARPU Android · EWA Max onboarding</div></div>
            <div className="outcome"><div className="v">AI</div><div className="d">Self-service analytics for product teams · MCP + Cursor</div></div>
            <div className="outcome"><div className="v">E2E</div><div className="d">Revenue ownership across full product cycle</div></div>
          </div>
        </div>
      </div>

      {/* Kodland */}
      <div className="xp-block">
        <div className="xp-meta">
          <div className="co"><a href="https://www.kodland.org/" target="_blank" rel="noopener noreferrer" className="co-link">Kodland</a></div>
          <div className="role">Product Owner · Faculty Lead, Math</div>
          <div className="when">2023 — 2025</div>
          <div className="context">Online coding school for kids · 500K+ students globally</div>
        </div>
        <div className="xp-body">
          <p>Led the <strong>Math faculty</strong> at Kodland — a role that demanded both business fluency and academic/methodological depth. Over my time running the faculty, I launched courses <strong>0→1</strong>, took the product into <strong>new markets</strong>, fine-tuned the acquisition funnel, ran active marketing experiments, rebuilt the educational model, and designed a <strong>teacher training lab</strong>.</p>
          <p>The result: Math became the <strong>quickest-growing product</strong> in the portfolio. netLTV grew <span className="highlight">+78% YoY</span>, refund rate dropped 2.5 pp, and AOV lifted +28% through pricing experiments.</p>

          <h4>Selected outcomes</h4>
          <div className="xp-outcomes">
            <div className="outcome"><div className="v">5</div><div className="d">Markets launched · LATAM, MENA, Asia, Europe, CIS</div></div>
            <div className="outcome"><div className="v">+78%</div><div className="d">netLTV YoY · Math</div></div>
            <div className="outcome"><div className="v">−2.5pp</div><div className="d">Refund rate reduced</div></div>
            <div className="outcome"><div className="v">№1</div><div className="d">Quickest-growing product in Kodland portfolio</div></div>
          </div>
        </div>
      </div>

      {/* SimpleChem */}
      <div className="xp-block">
        <div className="xp-meta">
          <div className="co">Simple<br/>Chem</div>
          <div className="role">Founder</div>
          <div className="when">2021 — 2024</div>
          <div className="context">Self-founded B2C subscription EdTech · chemistry exam prep</div>
        </div>
        <div className="xp-body">
          <p>SimpleChem is the project I'm most personally proud of. I started it from a belief that chemistry — one of the most feared school subjects — could become something teenagers actually enjoy, if someone built the right product around it.</p>
          <p>I did everything solo: product vision, curriculum logic, UX, onboarding, monetisation, delivery operations, and tutor coordination. No team. No funding. No playbook. Just a clear idea of what the learner needed and the determination to build it right.</p>
          <p>It was profitable from day one. It grew to 150+ active students per year across 6+ learning formats. And it taught me something no job could: what it actually feels like to <strong>own every decision and live with every outcome</strong>.</p>
          <p>SimpleChem shaped how I think about product. It should be clear, honest, and built with genuine respect for the person using it.</p>

          <h4>Selected outcomes</h4>
          <div className="xp-outcomes">
            <div className="outcome"><div className="v">Day 1</div><div className="d">Profitable from first cohort</div></div>
            <div className="outcome"><div className="v">150+</div><div className="d">Active students annually</div></div>
            <div className="outcome"><div className="v">6+</div><div className="d">Learning formats built solo</div></div>
            <div className="outcome"><div className="v">0→1</div><div className="d">Full product cycle owned end-to-end</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Experience = Experience;
