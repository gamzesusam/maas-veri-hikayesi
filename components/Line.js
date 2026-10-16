import { exp } from '../lib/data';
const y = (v) => 200 - ((v - 110) / 70) * 180;
export default function Line() {
  const pts = exp.map((v, i) => `${40 + i * 18.5},${y(v)}`).join(' ');
  return (
    <svg viewBox="0 0 420 240" role="img" aria-label="Deneyim yılına göre ortalama maaş çizgi grafiği" style={{ width: '100%', height: 'auto' }}>
      <g stroke="#C5CDD4">{[120, 140, 160, 180].map((t) => <line key={t} x1="40" x2="410" y1={y(t)} y2={y(t)} />)}</g>
      <g fontSize="12" fill="#33495B">
        {[120, 140, 160, 180].map((t) => <text key={t} x="4" y={y(t) + 4}>{t}</text>)}
        {[0, 5, 10, 15, 20].map((t) => <text key={t} x={40 + t * 18.5 - (t === 20 ? 8 : 0)} y="200">{t}</text>)}
        <text x="170" y="222">Deneyim (yıl)</text>
      </g>
      <polyline points={pts} fill="none" stroke="#1B3C53" strokeWidth="3" />
      <circle cx="40" cy={y(118.9)} r="5" fill="#1B3C53" /><circle cx="410" cy={y(173.2)} r="5" fill="#1B3C53" />
      <text x="48" y="160" fontSize="13" fontWeight="600" fill="#1B3C53">0 yıl: 118,9</text>
      <text x="300" y="14" fontSize="13" fontWeight="600" fill="#1B3C53">20 yıl: 173,2</text>
    </svg>
  );
}
