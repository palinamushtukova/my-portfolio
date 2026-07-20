function AI() {
  return (
    <section className="section" id="ai">
      <div className="section-label"><b>04</b> — What changed when AI joined my toolkit</div>
      <h2 className="section-title">AI as<br/>leverage.</h2>
      <p style={{maxWidth:'60ch', fontSize: 17}}>AI is a real part of how I work — not a trend I'm catching up to. I use it daily across discovery, analytics, prototyping, and delivery. The real value isn't speed. It's <strong>depth</strong>: AI gives me space to go further into the problem, not just get to an answer faster.</p>

      <div className="ai-grid">
        <div className="ai-card">
          <div className="kicker">Cursor</div>
          <h4>My daily analytics hands</h4>
          <p>I use Cursor to instrument analytical events, run research queries, slice data, and spin up dashboards for my own questions in real time — no analyst bottleneck. At EWA, I built this into a self-service workflow the whole product org uses.</p>
        </div>
        <div className="ai-card">
          <div className="kicker">Claude</div>
          <h4>Prototyping & structured thinking</h4>
          <p>I prototype features for my New User Retention team — spinning up working demos to pressure-test ideas before they hit eng. Also solution exploration, structured problem framing, doc drafting. This portfolio was built with Claude too.</p>
        </div>
        <div className="ai-card">
          <div className="kicker">Flywheels</div>
          <h4>Personalization that compounds</h4>
          <p>My favorite frontier: systems that get smarter as the product grows. I authored a knowledge-graph-based learner modeling concept — mapping what a user actually knows to build individual learning trajectories — which the company adopted for implementation. That's the real promise of AI in education: personalization as a compounding retention advantage, not a feature.</p>
        </div>
        <div className="ai-card">
          <div className="kicker">Result</div>
          <h4>More depth, not just more speed</h4>
          <p>I move faster on the analytical and delivery side so I can invest more in the strategic and qualitative side. That's the actual leverage.</p>
        </div>
      </div>
    </section>
  );
}
window.AI = AI;
