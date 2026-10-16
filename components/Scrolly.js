'use client';
import { useEffect, useRef, useState } from 'react';
import Bars from './Bars';
import Line from './Line';
import { loc, size, edu, variance } from '../lib/data';

const STEPS = [
  {
    h: 'Aynı Rol, Farklı Coğrafya: Zirvede ABD Var',
    p: "ABD'de ortalama gelir yaklaşık 181,7 bin birim iken, Hindistan'da 97,7 bine geriliyor. İncelenen 10 ülke gelir düzeyine göre dört belirgin kademe oluşturuyor.",
    t: 'Küresel Lokasyonlara Göre Yıllık Ortalama Maaş Dağılımı',
    a: "Ortalama yıllık maaş, lokasyona göre (bin birim, 0'dan başlar)",
    n: 'On lokasyon, dört belirgin maaş kademesi oluşturuyor.',
    d: loc,
    m: 200,
    hl: ['ABD', 'Kanada']
  },
  {
    h: 'Uçlar Arasında 84 Bin Birimlik Net Uçurum',
    p: "Zirve ile dip arasındaki fark, ABD ortalamasının neredeyse yarısına denk geliyor. Buna karşın Avustralya, İsveç, Hollanda, Singapur ve uzaktan çalışanlar 139 bin bandında birbirine çok yakın seyrediyor.",
    t: 'ABD ile Hindistan Arasında 84 Bin Birimlik Uçurum Var',
    a: "Ortalama yıllık maaş, lokasyona göre (bin birim, 0'dan başlar)",
    n: '181,7 − 97,7 = yaklaşık 84 bin birimlik net coğrafi fark.',
    d: loc,
    m: 200,
    hl: ['ABD', 'Hindistan']
  },
  {
    h: 'Şirket Büyüdükçe Maaş Bütçesi de Katlanıyor',
    p: 'Kurumsal devlerde ortalama maaş 169,6 bine ulaşırken, girişimlerde (startup) 127,3 binde kalıyor. Aradaki yaklaşık 42 binlik makas, ortalama gelir seviyesinin dörtte birini aşıyor.',
    t: 'Kurumsal Şirketler ile Girişimler Arasında 42 Bin Birim Fark Var',
    a: "Ortalama yıllık maaş, şirket ölçeğine göre (bin birim, 0'dan başlar)",
    n: 'Şirket ölçeği büyüdükçe maaş tabanı düzenli olarak yükseliyor.',
    d: size,
    m: 200,
    hl: ['Kurumsal', 'Startup']
  },
  {
    h: 'Her Deneyim Yılı Maaşa Yaklaşık 2,7 Bin Katkı Sağlıyor',
    p: 'Yıllar içindeki yükseliş neredeyse doğrusal: Deneyim istikrarlı ama sınırlı bir artış sunuyor. 20 yıllık kıdemli bir uzman, mesleğe yeni başlayan bir mezundan yaklaşık 54 bin birim fazla kazanıyor.',
    t: 'Deneyim Yılı Başına Ortalama 2,7 Bin Birim Artış',
    a: 'Ortalama yıllık maaş, deneyim yılına göre (bin birim)',
    n: '20 yıllık toplam kıdem artışı yaklaşık 54 bin birim seviyesinde kalıyor.',
    line: true
  },
  {
    h: 'Doktora Derecesi Geliri Artırıyor Ancak Sınırı Var',
    p: 'Eğitim basamakları maaşı kademeli olarak yukarı taşıyor; fakat lise ile doktora arasındaki 32 binlik toplam fark, ülkeler arası coğrafi uçurumun yarısına bile ulaşamıyor.',
    t: 'Doktora Mezunları Lise Mezunlarından 32 Bin Birim Fazla Kazanıyor',
    a: "Ortalama yıllık maaş, eğitim düzeyine göre (bin birim, 0'dan başlar)",
    n: 'Eğitim getirisi pozitif; ancak etkisi lokasyon farkından daha düşük.',
    d: edu,
    m: 200,
    hl: ['Doktora', 'Lise']
  },
  {
    h: 'Maaş Farkının Üçte Biri Yalnızca Lokasyondan Geliyor',
    p: 'Bir özelliğin maaş farkının yüzde kaçını açıkladığına varyans payı denir. Lokasyon %32,4 ile ilk sırada; deneyim (%19,2) ve şirket ölçeği (%16,5) onu izliyor.',
    t: 'Maaş Farkının %32’sini Tek Başına Lokasyon Açıklıyor',
    a: 'Maaş farkının açıklanan varyans payı, özniteliklere göre (%)',
    n: 'Lokasyonun payı, deneyimin payının yaklaşık 1,7 katı.',
    d: variance,
    m: 40,
    hl: ['Lokasyon']
  },
  {
    h: 'Finans ya da Sağlık: Sektörün Maaşa Etkisi Neredeyse Sıfır',
    p: 'İncelenen 10 farklı sektörün ortalamaları arasında yalnızca 600 birimlik sembolik bir fark var. Hangi sektörde çalışıldığı tek başına geliri neredeyse hiç değiştirmiyor.',
    t: 'Sektör Değişkeni Maaş Farkının %0’ını Açıklıyor',
    a: 'Maaş farkının açıklanan varyans payı, özniteliklere göre (%)',
    n: 'Sektör ve uzaktan çalışma faktörleri neredeyse hiçbir varyans yaratmıyor.',
    d: variance,
    m: 40,
    hl: ['Sektör', 'Uzaktan çalışma']
  }
];

export default function Scrolly() {
  const [step, setStep] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setStep(Number(e.target.dataset.step))),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const s = STEPS[step];
  return (
    <section className="scrolly" aria-label="Bulgu adımları">
      <figure className="chart" aria-label={s.t}>
        <figcaption className="chartTitle">{s.t}</figcaption>
        <p className="muted16">{s.a}</p>
        {s.line ? <Line /> : <Bars data={s.d} max={s.m} hl={s.hl} />}
        <p className="note">{s.n}</p>
        <p className="source">Kaynak: Kaggle, Employee Salary Prediction Dataset; kendi hesaplamam. Birim: yıllık maaş, bin birim.</p>
      </figure>
      <div className="steps">
        {STEPS.map((x, i) => (
          <div key={i} id={['lokasyon', undefined, 'sirket', 'deneyim', undefined, 'etki'][i]} data-step={i} ref={(el) => (refs.current[i] = el)} className="step">
            <h3>{x.h}</h3><p>{x.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
