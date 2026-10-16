import Scrolly from '../components/Scrolly';
import Explorer from '../components/Explorer';

export default function Page() {
  return (
    <main className="wrap">
      <header className="hero" id="top">
        <p className="eyebrow">VERİ HİKÂYESİ · 250.000 ÇALIŞANIN MAAŞ ANALİZİ</p>
        <h1>Doğru Ülkede Yaşamak, Mesleki Tecrübenin Önüne Geçiyor mu?</h1>
        <p className="sub">
          Teknoloji ve veri sektöründe gelirleri en çok hangi faktörler etkiliyor? Küresel lokasyon ve şirket ölçeği, tecrübe ve akademik unvanların önüne mi geçiyor? 250.000 çalışanın verisiyle keşfedin.
        </p>
        <p className="muted16">
          Gamze Susam · Ekim 2026 · <a href="#kesif">Aşağı kaydırın ↓</a>
        </p>
      </header>

      <section className="prose">
        <h2>Adaletli Bir Maaş Politikası Mümkün mü?</h2>
        <p>
          Bir çalışanın emeğinin karşılığı nasıl belirlenir? İnsan kaynakları süreçlerinde çoğu zaman piyasa standartlarına ve kişisel sezgilere dayanan maaş politikaları, adalet duygusunu zedeleyebiliyor. Bu veri hikâyesi; Kaggle&apos;daki Employee Salary Prediction veri setinde yer alan 250.000 profesyonelin kariyer verilerini (unvan, deneyim, eğitim düzeyi, teknik yetenek sayısı, sektör, ölçek ve lokasyon) inceleyerek maaş uçurumunun ardındaki temel dinamikleri ortaya koyuyor.
        </p>
        <p>
          Grafiklerde yer alan tüm değerler ilgili çalışma gruplarının yıllık ortalama maaşlarını yansıtmaktadır.
        </p>
      </section>

      <Scrolly />
      <Explorer />

      <section className="prose" id="sonuc">
        <h2>Peki Ne Çıktı? (Sonuç ve Değerlendirme)</h2>
        <p>
          Çalışma sorumuzun cevabı çok net: Evet, teknoloji dünyasında nereden çalıştığınız, kaç yıllık tecrübeye sahip olduğunuzdan çok daha belirleyici.
        </p>
        <p>
          Gruplar arası fark analizine göre; maaş farkının üçte birini tek başına Lokasyon (%32,4) açıklarken, onu Deneyim (%19,2) ve Şirket Ölçeği (%16,5) takip ediyor. Eğitim düzeyi (%9,6) sınırlı bir paya sahipken, faaliyet gösterilen sektör (%0) neredeyse hiçbir fark yaratmıyor. Ayrıca verideki karmaşık ve doğrusal olmayan ilişkileri yakalayan Random Forest modelimiz %80,09 R² başarıya ulaşırken, Çoklu Doğrusal Regresyon&apos;un %45,48&apos;de kalması, ücret dinamiklerinin sabit katsayılarla açıklanamayacak kadar çok katmanlı olduğunu gösteriyor.
        </p>
        <p>
          <strong>Analizin Sınırlılıkları:</strong> Bu çalışmada elde edilen bulgular korelasyonel ilişkileri yansıtmaktadır; mutlak bir nedensellik olarak yorumlanmamalıdır. Özellikle sektörler arasındaki farkın 1.000 birimin altında kalması ve alt kategorilerin oldukça homojen dağılması, veri setinin sentetik (yapay olarak üretilmiş) olabileceğine işaret etmektedir. Dolayısıyla bulgular gerçek piyasa koşulları değerlendirilirken bu kısıt göz önünde bulundurularak okunmalıdır. Ayrıca veri kümesinde orijinal para birimi belirtilmediği için değerler &quot;birim&quot; üzerinden standardize edilmiştir.
        </p>
      </section>

      <section className="prose ruled">
        <h2 className="h2s">Yöntem ve Veri İşleme</h2>
        <p className="small">
          <strong>Veri Kaynağı:</strong> Kaggle, Employee Salary Prediction Dataset (Kaggle'dan Ekim 2026'da indirilmiştir; veri seti sonradan Kaggle'dan kaldırıldığı için lisans bilgisine ulaşılamamıştır.).
        </p>
        <p>
          <strong>Veri Hazırlığı ve ETL:</strong> Kaggle&apos;dan alınan 250.000 satırlık ham veri kümesi öncelikle Microsoft Excel üzerinde taranmış; metinsel kategorik nitelikler referans tabloları ve DÜŞEYARA (VLOOKUP) fonksiyonu ile kodlanmıştır. Lokasyonu &quot;Remote&quot; olan kayıtların çalışma modeli tutarlılığı sağlanmış, eksik ve hatalı gözlemler temizlenmiştir.
        </p>
        <p>
          <strong>Analiz ve Modelleme:</strong> Keşifsel veri analizi ve makine öğrenmesi modelleme süreci Python (pandas, numpy, scikit-learn, matplotlib) ortamında yürütülmüştür. Sitedeki scrollytelling grafikleri için ham veri yerine Python&apos;da hesaplanan özet (aggregate) veri dosyaları kullanılmıştır.
        </p>
        <p>
          <strong>Kaynak Kod &amp; Notebook:</strong> Analizin tüm aşamalarına ve temizleme adımlarına{' '}
          <a href="https://github.com/gamzesusam" target="_blank" rel="noopener noreferrer">
            GitHub Deposu üzerinden erişebilirsiniz
          </a>.
        </p>
        <p>
          <strong>Yapay Zekâ Kullanım Beyanı:</strong> Kodlama, hata ayıklama ve metin düzenleme süreçlerinde yapay zekâ araçlarından (Gemini, Claude) yardımcı olarak yararlanılmış, tüm sonuçlar yazar tarafından kontrol edilmiştir.
        </p>
      </section>

      <footer className="foot">
        <h2 className="h2">Gamze Susam</h2>
        <p>
          Manisa Celal Bayar Üniversitesi · Büyük Veri Analistliği ·{' '}
          <a href="https://gamze-portfolyo.vercel.app/" target="_blank" rel="noopener noreferrer">
            Portfolyoma dön
          </a>{' '}
          ·{' '}
          <a href="https://www.linkedin.com/in/gamze-susam-2897a1403/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          ·{' '}
          <a href="https://github.com/gamzesusam" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          ·{' '}
          <a href="mailto:gamzeeesusam@gmail.com">gamzeeesusam@gmail.com</a>
        </p>
      </footer>
    </main>
  );
}