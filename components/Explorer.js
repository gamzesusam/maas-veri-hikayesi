'use client';
import { useState } from 'react';
import { loc, size, edu, job, ind, fmt } from '../lib/data';

const F = {
  loc: ['Lokasyon', loc],
  size: ['Şirket Ölçeği', size],
  edu: ['Eğitim Düzeyi', edu],
  job: ['Unvan ve Pozisyon', job],
  ind: ['Sektör', ind]
};

export default function Explorer() {
  const [k, setK] = useState('loc');
  const [name, list] = F[k];
  const vs = list.map((x) => x[1]);
  const mn = Math.min(...vs);
  const mx = Math.max(...vs);

  return (
    <section id="kesif" className="explore">
      <h2>Siz İnceleyin: Maaş Uçurumunu Hangi Faktör Derinleştiriyor?</h2>
      <p className="lead">
        Aşağıdaki butonları kullanarak değişkenler arasında geçiş yapabilirsiniz. Her nokta ilgili grubun yıllık ortalama maaşını temsil eder; noktalar arasındaki mesafe açıldıkça o faktörün maaş skalasını ayırma gücü artar.
      </p>

      <div className="pills" role="group" aria-label="Faktör seçimi">
        {Object.entries(F).map(([key, [n]]) => (
          <button
            key={key}
            aria-pressed={k === key}
            className={k === key ? 'pill on' : 'pill'}
            onClick={() => setK(key)}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="card">
        <p className="summary" aria-live="polite">
          <strong>{name}:</strong> En yüksek ve en düşük grup arasında <strong>{fmt(mx - mn)} bin birimlik</strong> net fark bulunuyor.
        </p>

        {list.map(([l, v]) => (
          <div className="dotRow" key={l}>
            <span className="barLabel">{l}</span>
            <div className="dotTrack">
              <div
                className="dot"
                style={{
                  left: ((v - 90) / 100) * 100 + '%',
                  background: v === mx || v === mn ? 'var(--accent)' : 'var(--muted)'
                }}
              />
            </div>
            <strong className="barVal">{fmt(v)}</strong>
          </div>
        ))}

        <p className="source" style={{ marginLeft: 130 }}>
          Eksen aralığı: Yıllık ortalama maaş (90 – 190 bin birim). Kaynak: Kaggle (Employee Salary Prediction Dataset); kendi hesaplamamdır.
        </p>
      </div>
    </section>
  );
}