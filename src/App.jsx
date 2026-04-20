function App() {
  const tw = window.__TWEAKS__ || {};
  const [navOpen, setNavOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-palette', tw.palette || 'cyan');
    document.documentElement.setAttribute('data-display', tw.displayFont || 'caveat');
    document.documentElement.setAttribute('data-body', tw.bodyFont || 'inter');
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <>
      <header className="topnav">
        <div className="topnav-inner">
          <a href="#top" className="brand" onClick={closeNav}>Palina M.</a>
          <nav className={navOpen ? 'open' : ''}>
            <a href="#about" onClick={closeNav}>About</a>
            <a href="#experience" onClick={closeNav}>Experience</a>
            <a href="#operate" onClick={closeNav}>How I work</a>
            <a href="#ai" onClick={closeNav}>AI</a>
            <a href="#skills" onClick={closeNav}>Skills</a>
            <a href="#cases" onClick={closeNav}>LX Cases</a>
          </nav>
          <a href="#contact" className="cta" onClick={closeNav}>Let's talk →</a>
          <button
            className="burger"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={navOpen}
            onClick={() => setNavOpen(v => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {navOpen ? (
                <>
                  <path d="M6 6 L18 18" />
                  <path d="M18 6 L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7 L20 7" />
                  <path d="M4 12 L20 12" />
                  <path d="M4 17 L20 17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <main className="page">
        <Hero />
        <About />
        <Experience />
        <Operate />
        <AI />
        <Skills />
        <Cases />
        <Testimonial />
        <Contact />
      </main>

      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
