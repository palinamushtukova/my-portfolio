function HeroMark({ style = {} }) {
  // stack of books with flowers growing — standalone
  const c = 'currentColor';
  return (
    <svg viewBox="0 0 220 260" fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={style} xmlns="http://www.w3.org/2000/svg">

      {/* ----- STACK OF BOOKS (3) — shifted up ~30px ----- */}
      <rect x="40" y="150" width="140" height="26" rx="2"/>
      <path d="M50 156 L 50 170" strokeWidth="1.8"/>
      <path d="M56 156 L 56 170" strokeWidth="1.8"/>
      <path d="M62 156 L 62 170" strokeWidth="1.8"/>

      <rect x="52" y="176" width="120" height="26" rx="2"/>
      <path d="M158 182 L 158 196" strokeWidth="1.8"/>
      <path d="M152 182 L 152 196" strokeWidth="1.8"/>

      <rect x="36" y="202" width="148" height="26" rx="2"/>
      <path d="M46 208 L 46 222" strokeWidth="1.8"/>
      <path d="M52 208 L 52 222" strokeWidth="1.8"/>
      <path d="M58 208 L 58 222" strokeWidth="1.8"/>
      <path d="M64 208 L 64 222" strokeWidth="1.8"/>

      {/* ===== FLOWERS — more detailed ===== */}

      {/* --- stem A (left) with two leaves --- */}
      <path d="M72 150 C 66 120, 72 88, 86 58" strokeWidth="2.4"/>
      {/* leaf lower */}
      <path d="M72 112 Q 58 104, 54 118 Q 66 124, 72 112 Z" strokeWidth="2" fill={c} fillOpacity="0.12"/>
      <path d="M60 114 Q 66 116, 70 118" strokeWidth="1.4"/>
      {/* leaf upper */}
      <path d="M78 88 Q 90 82, 92 94 Q 84 98, 78 88 Z" strokeWidth="2" fill={c} fillOpacity="0.12"/>
      <path d="M82 90 Q 86 92, 88 94" strokeWidth="1.4"/>
      {/* DAISY A — 8 petals with split tips */}
      <g transform="translate(86 52)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
          <g key={a} transform={`rotate(${a})`}>
            <path d="M 0 -4 Q -4 -10, -2 -14 Q 0 -16, 2 -14 Q 4 -10, 0 -4 Z" strokeWidth="1.8"/>
          </g>
        ))}
        <circle cx="0" cy="0" r="4" fill={c}/>
        {/* center stippling */}
        <circle cx="-1.2" cy="-1" r="0.6" fill="white"/>
        <circle cx="1" cy="1.2" r="0.6" fill="white"/>
      </g>

      {/* --- stem B (center tall) with leaf --- */}
      <path d="M108 150 C 110 120, 114 86, 116 50" strokeWidth="2.4"/>
      <path d="M112 104 Q 124 98, 126 110 Q 118 116, 112 104 Z" strokeWidth="2" fill={c} fillOpacity="0.12"/>
      <path d="M116 106 Q 120 108, 122 110" strokeWidth="1.4"/>
      {/* POPPY / ROSE B — layered petals */}
      <g transform="translate(116 42)">
        {/* outer petal ring */}
        {[0, 60, 120, 180, 240, 300].map(a => (
          <g key={a} transform={`rotate(${a})`}>
            <path d="M 0 -6 Q -8 -10, -6 -16 Q 0 -20, 6 -16 Q 8 -10, 0 -6 Z" strokeWidth="1.8"/>
          </g>
        ))}
        {/* inner petal ring, offset */}
        {[30, 90, 150, 210, 270, 330].map(a => (
          <g key={a} transform={`rotate(${a})`}>
            <path d="M 0 -3 Q -4 -7, -3 -11 Q 0 -13, 3 -11 Q 4 -7, 0 -3 Z" strokeWidth="1.4"/>
          </g>
        ))}
        <circle cx="0" cy="0" r="3" fill={c}/>
        {/* stamens */}
        <path d="M -2 -1 L -3 -4" strokeWidth="1"/>
        <path d="M 2 -1 L 3 -4" strokeWidth="1"/>
        <path d="M 0 -2 L 0 -5" strokeWidth="1"/>
      </g>

      {/* --- stem C (right) with leaf --- */}
      <path d="M140 150 C 146 126, 154 102, 160 74" strokeWidth="2.4"/>
      <path d="M148 118 Q 158 112, 160 124 Q 152 128, 148 118 Z" strokeWidth="2" fill={c} fillOpacity="0.12"/>
      <path d="M152 120 Q 156 122, 158 124" strokeWidth="1.4"/>
      {/* DAISY-CLUSTER C — 5 round petals with tiny lines */}
      <g transform="translate(160 66)">
        {[0, 72, 144, 216, 288].map(a => (
          <g key={a} transform={`rotate(${a})`}>
            <circle cx="0" cy="-8" r="4.2" strokeWidth="1.8"/>
            <path d="M 0 -11 L 0 -6" strokeWidth="0.8"/>
          </g>
        ))}
        <circle cx="0" cy="0" r="2.6" fill={c}/>
      </g>

      {/* --- small tulip on far right --- */}
      <path d="M176 150 C 180 130, 184 108, 184 90" strokeWidth="2.2"/>
      {/* tulip body with petal lines */}
      <path d="M178 86 C 178 76, 190 76, 190 86 C 190 96, 184 100, 184 100 C 184 100, 178 96, 178 86 Z" strokeWidth="2"/>
      <path d="M184 82 L 184 98" strokeWidth="1.3"/>
      <path d="M180 84 Q 181 92, 184 98" strokeWidth="1.3"/>
      <path d="M188 84 Q 187 92, 184 98" strokeWidth="1.3"/>
      {/* tulip leaf */}
      <path d="M180 118 Q 170 116, 170 124 Q 176 126, 180 118 Z" strokeWidth="1.6" fill={c} fillOpacity="0.12"/>

      {/* ===== SPARKLES (4-point stars) — replacing X crosses ===== */}
      {[
        {x: 24, y: 36, s: 7},
        {x: 200, y: 52, s: 8},
        {x: 18, y: 112, s: 5},
        {x: 204, y: 112, s: 6},
        {x: 100, y: 20, s: 5},
      ].map((sp, i) => (
        <g key={i} transform={`translate(${sp.x} ${sp.y})`}>
          <path d={`M 0 -${sp.s} Q 1 -1, ${sp.s} 0 Q 1 1, 0 ${sp.s} Q -1 1, -${sp.s} 0 Q -1 -1, 0 -${sp.s} Z`} fill={c} strokeWidth="0"/>
        </g>
      ))}
    </svg>
  );
}
window.HeroMark = HeroMark;

function Hero() {
  return (
    <section className="hero section" id="top" style={{borderTop: 0}}>
      <div className="hero-eyebrow">Product Manager</div>

      <h1 className="hero-title">
        Building<br/>
        <span className="u">meaningful</span><br/>
        products.
      </h1>

      <p className="hero-sub hero-sub-wide" style={{marginTop: 56}}>
        <strong>Hi! I'm Palina</strong> — and I genuinely believe <strong>this world can be made better through education</strong>. I'm also convinced education is the most formative experience we go through, so I choose to walk that path alongside thousands of students, building products for them: as a founder, as a Learning Experience Designer, and now as a PM. I believe in student-centricity, always dig deep into the numbers, and come up with the most unconventional ideas along the way.
      </p>

      <div className="hero-scroll">
        <ArrowDown className="arrow" color="var(--accent)" />
        <span>scroll, there's a lot</span>
      </div>

      {/* thematic mark callout */}
      <div className="callout callout-sketch" style={{color: 'var(--accent)'}}>
        <HeroMark style={{width: 220, height: 260, color: 'var(--accent)'}}/>
        <div style={{marginTop: 4, textAlign: 'center', lineHeight: 1.1, color: 'var(--fg)'}}>
          helping education<br/>bloom
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
