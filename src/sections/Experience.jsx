function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-label"><b>02</b> — Experience</div>
      <h2 className="section-title">Where I've<br/>shipped.</h2>

      {/* EWA */}
      <div className="xp-block">
        <div className="xp-meta">
          <div className="co"><a href="https://appewa.com/?language=en" target="_blank" rel="noopener noreferrer" className="co-link">EWA</a></div>
          <div className="role">Senior Product Manager</div>
          <div className="when">Jan 2026 — Present</div>
          <div className="context">AI-powered language learning · mobile subscription (iOS/Android)</div>
        </div>
        <div className="xp-body">
          <p>At EWA, I lead the <strong>New User Retention</strong> and <strong>Monetization</strong> squads — a cross-functional team of 7 across product, engineering and analytics, on a $40M ARR app. I own the first experience users meet: how well it lands on their learning goal, whether they come back, and how that early habit turns into long-term value. Retention and revenue live in one system — my job is to hold the whole picture.</p>
          <p>The work I care most about: reworking the <strong>early user experience</strong> and building post-onboarding engagement loops — lifting <span className="highlight">D14 retention by 7.7%</span> and new-user retention by 5% — so that the first days form a real learning habit, not just a first payment.</p>
          <p>Beyond the squad's roadmap, I authored a <strong>knowledge-graph-based learner modeling</strong> concept — mapping what a user actually knows to build individual learning trajectories — now adopted for implementation. Personalization as a compounding retention advantage, not a feature.</p>
          <p>Proud of one process win: cutting <strong>time-to-market</strong> for user stories by building a self-service analytics layer — ClickHouse via MCP, Cursor workflow, AI agents taking over parts of the analyst's work. Teams now query and build dashboards on their own.</p>
          <p>Also shipped on the revenue side: EWA Max onboarding upgrade (<span className="highlight">+9.3% ARPU</span>), in-app upsell flow redesign (+22.5% upsell ARPU).</p>

          <h4>Selected outcomes</h4>
          <div className="xp-outcomes">
            <div className="outcome"><div className="v">+7.7%</div><div className="d">D14 retention · early experience rework</div></div>
            <div className="outcome"><div className="v">+5%</div><div className="d">New-user retention · post-onboarding recommendations</div></div>
            <div className="outcome"><div className="v">AI</div><div className="d">Self-service analytics for product teams · MCP + Cursor</div></div>
            <div className="outcome"><div className="v">+9.3%</div><div className="d">ARPU · EWA Max onboarding upgrade</div></div>
          </div>
        </div>
      </div>

      {/* Kodland */}
      <div className="xp-block">
        <div className="xp-meta">
          <div className="co"><a href="https://www.kodland.org/" target="_blank" rel="noopener noreferrer" className="co-link">Kodland</a></div>
          <div className="role">Product Manager · Faculty Lead, Math</div>
          <div className="when">Jul 2023 — Dec 2025</div>
          <div className="context">Online coding school for kids · 500K+ students globally</div>
        </div>
        <div className="xp-body">
          <p>Led the <strong>Math product line</strong> at Kodland (7 products, grades 1–7) — a role that demanded both business fluency and academic/methodological depth. I launched courses <strong>0→1</strong>, took the product into <strong>new markets</strong>, rebuilt the educational model around user JTBD, and designed a <strong>teacher training lab</strong>.</p>
          <p>The result: Math became the <strong>quickest-growing product</strong> in the portfolio — and it was largely a <strong>retention story</strong>. netLTV grew <span className="highlight">+78% YoY</span>, driven by reworking the learning model, reducing early churn (refund rate −2.5 pp) and improving renewals. On top of that, AOV lifted +28% through pricing and packaging experiments.</p>

          <h4>Selected outcomes</h4>
          <div className="xp-outcomes">
            <div className="outcome"><div className="v">+78%</div><div className="d">netLTV YoY · retention-led · Math</div></div>
            <div className="outcome"><div className="v">−2.5pp</div><div className="d">Early churn · refund rate reduced</div></div>
            <div className="outcome"><div className="v">5</div><div className="d">Markets launched · LATAM, MENA, Asia, Europe, CIS</div></div>
            <div className="outcome"><div className="v">№1</div><div className="d">Quickest-growing product in Kodland portfolio</div></div>
          </div>
        </div>
      </div>

      {/* SimpleChem */}
      <div className="xp-block">
        <div className="xp-meta">
          <div className="co">Simple<br/>Chem</div>
          <div className="role">Founder &amp; Product Manager</div>
          <div className="when">Apr 2021 — Jul 2023</div>
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
            <div className="outcome"><div className="v">81%</div><div className="d">Course completion rate · avg exam score 84/100</div></div>
            <div className="outcome"><div className="v">150+</div><div className="d">Active students annually · 6 course products</div></div>
            <div className="outcome"><div className="v">0→1</div><div className="d">Full product cycle owned end-to-end</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Experience = Experience;
