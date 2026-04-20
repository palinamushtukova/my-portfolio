function Operate() {
  const principles = [
    { tag: '01 — Meaning first', h: 'I build for outcomes that actually matter.', p: "I care deeply about working on products that improve people's lives — not ones that fill screens or chase short-term wins. Education sits at the top of that list for me: it changes what kind of adults kids grow into, and I want to spend my career making that better." },
    { tag: '02 — Systems lens', h: 'I zoom out past my own team.', p: "The product I own is one piece of a larger system — acquisition, monetization, retention, content, learning experience. I reason about all of them, because that's where real leverage lives. Optimising one metric at the expense of the system is easy. Seeing the whole picture is the job." },
    { tag: '03 — Experience re-invention', h: "I rebuild when a patch won't do.", p: "Sometimes a learning product doesn't need a feature — it needs a new model. I've redesigned full curricula, learning architectures, and teacher training systems when the surface-level fixes would have been cheap and wrong." },
    { tag: '04 — Leading without title', h: 'I grow teams around me, even before it\'s my job.', p: "I've grown from LXD to Product Owner to PM inside the same companies — not by asking, but by taking on more until the scope caught up with the title. That's what leadership looks like before a manager title shows up on LinkedIn." },
    { tag: '05 — Long-term mindset', h: 'I hold pace through the quiet stretches.', p: "Great products get built through consistency, not heroic sprints. I'm a marathon runner, literally and at work. When others get tired of the distance, I keep building." },
    { tag: '06 — Metric hygiene', h: "I'll fight for the numbers — and fight the numbers when the experience is wrong.", p: "I'm a data nerd by default. But I won't ship a lift that breaks the user experience, or sacrifices the learning outcome for the revenue one. Especially for kids — fun and meaning come before numbers, every time." },
    { tag: '07 — Disagreement as a feature', h: "I can't stay quiet when I disagree.", p: "Not for drama — because the best product decisions come from naming the hard thing early, not later. I'll push back on strategy, pricing, scope, framing, research. I'll change my mind when I'm wrong." },
  ];

  return (
    <section className="section" id="operate">
      <div className="section-label"><b>03</b> — The way I work</div>
      <h2 className="section-title">How I<br/>actually behave.</h2>
      <p style={{maxWidth:'none', fontSize: 17}}>These are the patterns that show up across every product I've built — not a list of pretty values on a slide, but <strong>how I actually behave</strong> when the team's around a whiteboard, when the metrics are telling two different stories, or when something is quietly broken and someone has to be the one to say it out loud. This is the part of me that doesn't change between projects.</p>

      <div className="principles">
        {principles.map((p, i) => (
          <div className="principle" key={i}>
            <div className="num">0{i+1}</div>
            <div className="tag">{p.tag}</div>
            <h3>{p.h}</h3>
            <p>{p.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Operate = Operate;
