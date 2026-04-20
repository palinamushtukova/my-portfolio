function Skills() {
  const cols = [
    { idx: '01', title: 'Product', items: ['Product Strategy','Discovery (Qual & Quant)','A/B Testing & Experimentation','Funnel Optimisation','Monetisation & Unit Economics','International Scaling','0→1 Launches'] },
    { idx: '02', title: 'Analytics', items: ['SQL','ClickHouse','Amplitude','Metabase','Tableau','Google Analytics','Metrics Tree Design','Cohort Analysis'] },
    { idx: '03', title: 'AI Tools', items: ['Cursor','Claude Code','Lovable','MCP Integrations'] },
    { idx: '04', title: 'Collab', items: ['Figma','Miro','Notion','Jira','Loom'] },
  ];
  const courses = [
    { n: 'Learning Experience Design', w: 'Universal University' },
    { n: 'Product Management', w: 'Wanna Be Like' },
    { n: 'Data-driven Decision Making', w: 'Go Practice Simulator' },
    { n: 'Analyze Data with SQL', w: 'Codecademy' },
    { n: 'Registered Scrum Basics', w: 'Scrum Alliance' },
    { n: 'Gamification', w: 'CG Education' },
  ];
  return (
    <section className="section" id="skills">
      <div className="section-label"><b>05</b> — Knowledge & Tools</div>
      <h2 className="section-title">Knowledge<br/>& tools.</h2>

      <div className="skills-grid">
        {cols.map(c => (
          <div className="skills-col" key={c.idx}>
            <div className="idx">{c.idx}</div>
            <div className="group">{c.title}</div>
            <ul>{c.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>

      <div className="learning">
        <div>
          <div className="section-label"><b>Continuous learning</b></div>
          <h3>Forever<br/>a student.</h3>
        </div>
        <div className="courses">
          {courses.map((c, i) => (
            <div className="course" key={i}>
              <div className="c-name">{c.n}</div>
              <div className="c-where">{c.w}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="award">
        <div className="award-text">
          <div className="a-tag">Recognition</div>
          <h3>Belarus Future Leadership Award</h3>
          <p>This award means a lot to me — it says something about what I care about. It went to <strong>EdSpire</strong>, my project: an interactive online textbook for Belarusian teenagers, built around one goal — giving every student an inspiring educational experience, with no borders in the way.</p>
        </div>
        <svg className="award-medal" viewBox="0 0 160 180" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          {/* ribbon left */}
          <path d="M46 8 L 62 88" strokeWidth="2.6"/>
          <path d="M54 8 L 70 86" strokeWidth="2.6"/>
          {/* ribbon right */}
          <path d="M114 8 L 98 88" strokeWidth="2.6"/>
          <path d="M106 8 L 90 86" strokeWidth="2.6"/>
          {/* ribbon ends (notched) */}
          <path d="M44 6 L 58 6 L 54 16 Z" fill="currentColor" fillOpacity="0.18"/>
          <path d="M102 6 L 116 6 L 110 16 Z" fill="currentColor" fillOpacity="0.18"/>

          {/* outer medal circle (scalloped) */}
          <g transform="translate(80 118)">
            {/* scalloped ring */}
            {Array.from({length: 16}).map((_, i) => {
              const a = (i * 360) / 16;
              const rad = (a * Math.PI) / 180;
              const x = Math.cos(rad) * 48;
              const y = Math.sin(rad) * 48;
              return <circle key={i} cx={x} cy={y} r="5" fill="currentColor" fillOpacity="0.12" strokeWidth="1.6"/>;
            })}
            {/* main coin */}
            <circle r="44" fill="currentColor" fillOpacity="0.14"/>
            <circle r="44"/>
            <circle r="36" strokeWidth="1.6" strokeDasharray="2 3" opacity="0.7"/>
            {/* star at center */}
            <path d="M 0 -22 L 6 -6 L 22 -6 L 9 3 L 14 19 L 0 10 L -14 19 L -9 3 L -22 -6 L -6 -6 Z" fill="currentColor"/>
            {/* tiny sparkles */}
            <circle cx="-32" cy="-20" r="1.6" fill="currentColor"/>
            <circle cx="30" cy="22" r="1.6" fill="currentColor"/>
            <circle cx="26" cy="-28" r="1.2" fill="currentColor"/>
          </g>

          {/* hanging loop at top */}
          <circle cx="80" cy="10" r="5" strokeWidth="2.2"/>
        </svg>
      </div>
    </section>
  );
}
window.Skills = Skills;
