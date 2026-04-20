/* Hand-drawn SVG primitives rendered as React components */

function ArrowCurly({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 60" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10 Q 20 40, 50 35 T 108 40" />
      <path d="M98 32 L 110 40 L 100 50" />
    </svg>
  );
}

function ArrowStraight({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 20" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <path d="M4 10 Q 40 6, 80 10 T 114 10" />
      <path d="M104 4 L 116 10 L 104 16" />
    </svg>
  );
}

function ArrowDown({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 30 60" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <path d="M15 4 Q 12 20, 15 40 T 15 54" />
      <path d="M8 46 L 15 58 L 22 46" />
    </svg>
  );
}

function Squiggle({ className = '', style = {}, color = 'currentColor', w = 200 }) {
  return (
    <svg className={className} style={style} viewBox={`0 0 ${w} 18`} preserveAspectRatio="none" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <path d={`M2 10 Q ${w*0.2} 2, ${w*0.4} 9 T ${w*0.8} 8 T ${w-2} 10`} />
    </svg>
  );
}

function Scribble({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 300 20" preserveAspectRatio="none" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <path d="M2 10 C 30 2, 60 18, 90 10 S 150 2, 180 10 S 240 18, 298 10" />
    </svg>
  );
}

function Star({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill={color}>
      <path d="M20 3 L 24 15 L 37 16 L 27 24 L 30 37 L 20 29 L 10 37 L 13 24 L 3 16 L 16 15 Z"/>
    </svg>
  );
}

function CircleAround({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 80" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <path d="M100 8 C 40 8, 10 25, 10 40 C 10 62, 60 74, 100 74 C 160 74, 192 58, 192 42 C 192 22, 140 8, 100 8" />
    </svg>
  );
}

function Bracket({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 200" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <path d="M32 4 C 14 4, 8 30, 8 100 C 8 170, 14 196, 32 196" />
    </svg>
  );
}

function Checkmark({ className = '', style = {}, color = 'currentColor' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 30 30" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 16 L 12 23 L 26 7" />
    </svg>
  );
}

function Dots({ className = '', style = {}, color = 'currentColor', n = 5 }) {
  return (
    <svg className={className} style={style} viewBox={`0 0 ${n * 14} 14`} fill={color}>
      {Array.from({length: n}).map((_, i) => (
        <circle key={i} cx={7 + i * 14} cy={7} r={2.5 + (i%2)*0.5} />
      ))}
    </svg>
  );
}

Object.assign(window, {
  ArrowCurly, ArrowStraight, ArrowDown, Squiggle, Scribble,
  Star, CircleAround, Bracket, Checkmark, Dots
});
