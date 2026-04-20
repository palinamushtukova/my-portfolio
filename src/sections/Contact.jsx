function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-label"><b>08</b> — Get in touch</div>
      <h2 className="section-title contact-title">Let's build something<br/>great together.</h2>
      <p style={{maxWidth:'60ch', fontSize: 17}}>Whether you're scaling an EdTech product, launching from scratch, or need a PM who brings data depth, ownership, and real meaning to the work — I'd love to connect.</p>

      <div className="contact-links">
        <a className="link-card" href="https://www.linkedin.com/in/palina-mushtukova/" target="_blank" rel="noopener">
          <div>
            <div className="l-name">LinkedIn</div>
            <div className="l-handle">Palina Mushtukova</div>
          </div>
          <div className="l-arrow">↗</div>
        </a>
        <a className="link-card" href="https://t.me/palina_mushtukova" target="_blank" rel="noopener">
          <div>
            <div className="l-name">Telegram</div>
            <div className="l-handle">Write directly</div>
          </div>
          <div className="l-arrow">↗</div>
        </a>
      </div>

      <div className="footer">
        <div><b>Palina Mushtukova</b> · Product Manager · EdTech · AI</div>
        <div>Building meaningful products.</div>
      </div>
    </section>
  );
}
window.Contact = Contact;
