function Stats() {
  const items = [
    { n: '+9.3%',  l: 'ARPU Android · EWA Max onboarding' },
    { n: '+78%',   l: 'netLTV YoY · Math · Kodland' },
    { n: '5.6%',   l: 'E2E conversion · 0→1 MVP launch' },
    { n: '+28%',   l: 'AOV via pricing experiments' },
  ];
  return (
    <div className="stats">
      {items.map((x, i) => (
        <div className="stat" key={i}>
          <div className="num">{x.n}</div>
          <div className="lbl">{x.l}</div>
        </div>
      ))}
    </div>
  );
}
window.Stats = Stats;
