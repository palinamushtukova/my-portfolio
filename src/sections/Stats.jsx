function Stats() {
  const items = [
    { n: '+7.7%',  l: 'D14 retention · early experience · EWA' },
    { n: '+78%',   l: 'netLTV YoY · retention-led · Kodland' },
    { n: '81%',    l: 'Course completion · SimpleChem' },
    { n: '+9.3%',  l: 'ARPU · EWA Max onboarding' },
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
