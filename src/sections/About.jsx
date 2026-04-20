function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-label"><b>01</b> — About me</div>
      <h2 className="section-title">Where I<br/>come from.</h2>

      <div className="about-portrait-float">
        <div className="portrait-card">
          <div className="portrait-frame" style={{
            backgroundImage: 'url(assets/portrait.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            filter: 'saturate(0.85) contrast(1.02)',
          }}></div>
          <div className="portrait-caption">
            Palina Mushtukova
            <small>Product Manager · EdTech · AI</small>
          </div>
        </div>
        <div className="portrait-tag" style={{position:'relative', marginTop: 18, fontFamily: 'var(--display)', fontSize: 24, textAlign:'right', paddingRight: 40, color:'var(--accent)'}}>
          <ArrowCurly style={{position:'absolute', right: 30, top: -48, width: 70, height: 50, transform: 'rotate(-75deg)'}} color="var(--accent)"/>
          that's me, hi
        </div>
      </div>

      <div className="about-copy about-copy-wide">
        <p>My path into product wasn't linear — and I think that's a feature, not a bug. I started as a <strong>chemistry teacher</strong>, built my own EdTech startup from scratch, designed learning experiences at Yandex Practicum and Kodland, and gradually moved into full product ownership. Each step added a layer: domain depth, user empathy, learning science, business mechanics.</p>
        <p>Today I work at the intersection of <span className="highlight">education, technology, and data</span>. I love the analytical side — pressure-testing assumptions, building metrics trees, figuring out why something works or doesn't. But I never lose the thread back to the person using the product.</p>
        <p>I'm most drawn to products where <strong>student outcomes and business results move together</strong> — because that's where the best product decisions live.</p>
      </div>

      <Stats />
    </section>
  );
}
window.About = About;
