function Cases() {
  const cases = [
    {
      n: '01', tag: 'LX Design · Yandex Practicum',
      h: 'Metacognitive Course for React Developers',
      problem: 'High student support load was killing margins on the React Developer program — without changing the completion rate.',
      solution: 'Built an async "wrapper" course using the 4C/ID model — 3 cycles of self-regulated learning that gradually shifted students from external to internal control of their learning process.',
      insight: "The real problem wasn't content quality — it was that students had no metacognitive tools to handle stuck moments alone.",
      q: '"Your team resisted the temptation to focus on solutions proposed in the brief. You highlighted both UX impact and non-obvious risks — significantly increasing credibility."',
      who: '— Madin Tlishev, PM, Yandex Practicum'
    },
    {
      n: '02', tag: 'LX Design · Toloka AI',
      h: 'ML Onboarding with Full Business Game',
      problem: "New Toloka employees couldn't communicate effectively across technical and non-technical ML contexts — slowing down cross-functional work from day one.",
      solution: 'Designed a 4C/ID-based onboarding course with three-level scaffolding, a full business simulation game, and mock-interview assessment.',
      insight: 'Onboarding fails when it teaches concepts in isolation. Simulating real communication scenarios — under pressure — is what actually builds confidence.',
      q: '"Palina managed to do the impossible. The subject area of ML is very complex — yet employees enthusiastically joined, gained the necessary knowledge, and are satisfied with the outcomes."',
      who: '— Anastasia Zhdanovskaya, LX Designer, Toloka AI'
    },
    {
      n: '03', tag: 'LX Design · Letovo IB School',
      h: 'STEM Intensive for Regional Students & Teachers',
      problem: 'Design a 7–10 day STEM intensive that serves two very different audiences simultaneously — students and teachers — while reducing investor costs and building school brand.',
      solution: 'Built a modular program-constructor with hybrid format: online onboarding + offline intensive + interdisciplinary workshops that worked for both audiences in parallel.',
      insight: "The hardest constraint wasn't content — it was aligning the goals of students who want to learn and teachers who want to grow professionally, inside the same program.",
      q: '"Palina was one of the leaders of the LXD team — she tracked timing, initiated each stage, and managed communication with the client. We are planning to implement the project."',
      who: '— Olga Kalimulina, Community Lead, IB Letovo School'
    },
  ];
  return (
    <section className="section" id="cases">
      <div className="section-label"><b>06</b> — Learning Experience Cases</div>
      <h2 className="section-title">The thinking<br/>behind the work.</h2>
      <div className="case-lead">
        <p>Before and alongside product management, I built deep expertise in learning experience design. These cases show the thinking that still shapes how I approach product today — I don't see products as funnels or feature sets, but as <strong>systems people move through, learn through, and experience emotionally.</strong></p>
      </div>

      <div className="case-list">
        {cases.map(c => (
          <div className="case" key={c.n}>
            <div className="c-num">{c.n}</div>
            <div className="c-title">
              <div className="c-head">{c.tag}</div>
              <h3>{c.h}</h3>
            </div>
            <div className="c-body">
              <p><span className="lbl">Problem </span>{c.problem}</p>
              <p><span className="lbl">Solution </span>{c.solution}</p>
              <p><span className="lbl">Insight </span>{c.insight}</p>
              <blockquote>{c.q}<cite>{c.who}</cite></blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Cases = Cases;
