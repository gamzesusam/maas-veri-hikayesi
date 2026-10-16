'use client';
import { useEffect, useState } from 'react';

const ITEMS = [['top', 'Ana Sayfa'], ['lokasyon', 'Lokasyon'], ['sirket', 'Şirket Ölçeği'], ['deneyim', 'Deneyim ve Eğitim'], ['etki', 'Etki Payları'], ['kesif', 'Keşfet'], ['sonuc', 'Sonuç']];

export default function Nav() {
  const [active, setActive] = useState('top');
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    );
    ITEMS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="nav" aria-label="Ana menü">
      <div className="navIn">
        <a className="brand" href="https://gamze-portfolyo.vercel.app/">Gamze Susam</a>
        <ul className="navList">
          {ITEMS.map(([id, label]) => (
            <li key={id}><a href={'#' + id} className={active === id ? 'navLink on' : 'navLink'} aria-current={active === id ? 'true' : undefined}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
