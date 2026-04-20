function Tweaks() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(window.__TWEAKS__ || {});

  // listen for host toggle
  React.useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type: '__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // apply on change
  React.useEffect(() => {
    document.documentElement.setAttribute('data-palette', state.palette || 'cyan');
    document.documentElement.setAttribute('data-display', state.displayFont || 'caveat');
    document.documentElement.setAttribute('data-body', state.bodyFont || 'inter');
  }, [state]);

  const set = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    window.parent.postMessage({type: '__edit_mode_set_keys', edits: { [k]: v }}, '*');
  };

  const palettes = [
    { id: 'cyan',       c: '#1B8FB3', t: 'Cyan' },
    { id: 'terracotta', c: '#C75A3B', t: 'Terracotta' },
    { id: 'ink',        c: '#1A1F2E', t: 'Ink' },
    { id: 'olive',      c: '#6B7A3A', t: 'Olive' },
    { id: 'cream',      c: '#F0E7D5', t: 'Cream' },
  ];
  const displayFonts = [
    { id:'caveat', t:'Caveat' },
    { id:'kalam', t:'Kalam' },
    { id:'architects', t:'Architects' },
    { id:'patrick', t:'Patrick Hand' },
    { id:'shadows', t:'Shadows' },
    { id:'fraunces', t:'Fraunces' },
  ];
  const bodyFonts = [
    { id:'inter', t:'Inter' },
    { id:'space', t:'Space Grotesk' },
    { id:'fraunces', t:'Fraunces' },
  ];

  return (
    <div className={'tweaks' + (open ? ' on' : '')}>
      <h5>Tweaks</h5>

      <div className="row">
        <label>Palette</label>
        <div className="swatches">
          {palettes.map(p => (
            <div
              key={p.id}
              className={'sw' + (state.palette === p.id ? ' active' : '')}
              style={{background: p.c}}
              title={p.t}
              onClick={() => set('palette', p.id)}
            />
          ))}
        </div>
      </div>

      <div className="row">
        <label>Display font</label>
        <div className="chips">
          {displayFonts.map(f => (
            <div key={f.id}
              className={'chip' + (state.displayFont === f.id ? ' active' : '')}
              style={{fontFamily: `'${f.t}', cursive`}}
              onClick={() => set('displayFont', f.id)}>
              {f.t}
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <label>Body font</label>
        <div className="chips">
          {bodyFonts.map(f => (
            <div key={f.id}
              className={'chip' + (state.bodyFont === f.id ? ' active' : '')}
              onClick={() => set('bodyFont', f.id)}>
              {f.t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.Tweaks = Tweaks;
