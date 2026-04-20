function About() {
  return (
    <section className="section" id="about">
      <div className="section-label"><b>01</b> — About me</div>
      <h2 className="section-title">Where I<br/>come from.</h2>

      <div className="about-grid">
        <div className="about-copy">
          <p>My path into product wasn't linear — and I think that's a feature, not a bug. I started as a <strong>chemistry teacher</strong>, built my own EdTech startup from scratch, designed learning experiences at Yandex Practicum and Kodland, and gradually moved into full product ownership. Each step added a layer: domain depth, user empathy, learning science, business mechanics.</p>
          <p>Today I work at the intersection of <span className="highlight">education, technology, and data</span>. I love the analytical side — pressure-testing assumptions, building metrics trees, figuring out why something works or doesn't. But I never lose the thread back to the person using the product.</p>
          <p>I'm most drawn to products where <strong>student outcomes and business results move together</strong> — because that's where the best product decisions live.</p>
        </div>

        <div>
          <div className="portrait-card">
            <div className="portrait-frame" style={{
              backgroundImage: `url(${window.__resources && window.__resources.portraitImg ? window.__resources.portraitImg : 'assets/portrait.jpg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              filter: 'saturate(0.85) contrast(1.02)',
            }}></div>
            <div className="portrait-caption">
              Palina Mushtukova
              <small>Product Manager · EdTech · AI</small>
            </div>
          </div>
          <div style={{position:'relative', marginTop: 18, fontFamily: 'var(--display)', fontSize: 24, textAlign:'right', paddingRight: 40, color:'var(--accent)'}}>
            <ArrowCurly style={{position:'absolute', right: -10, top: -34, width: 80, height: 40, transform: 'scaleX(-1) rotate(-10deg)'}} color="var(--accent)"/>
            that's me, hi
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
window.About = About;
