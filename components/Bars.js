import { fmt } from '../lib/data';
export default function Bars({ data, max, hl = [] }) {
  return (
    <div className="bars">
      {data.map(([l, v]) => (
        <div className="barRow" key={l}>
          <span className="barLabel">{l}</span>
          <div className="barTrack"><div className="bar" style={{ width: Math.max((v / max) * 100, 0.5) + '%', background: hl.includes(l) ? 'var(--accent)' : 'var(--muted)' }} /></div>
          <strong className="barVal">{fmt(v)}</strong>
        </div>
      ))}
    </div>
  );
}
