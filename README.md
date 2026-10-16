# Maaşını En Çok Hangi Faktör Etkiliyor? (Veri Hikâyesi)

Çalışma sorusu: Teknoloji ve veri sektöründe lokasyon ve şirket ölçeği, deneyim ve eğitimden daha mı belirleyici?
Canlı site: https://maasini-en-cok-hangi-faktor-etkiliy.vercel.app · Portfolyo: https://gamze-portfolyo.vercel.app/

## Veri
Kaggle, Employee Salary Prediction Dataset (https://www.kaggle.com/datasets/algozee/employee-salary-prediction-dataset), 250.000 satır. Lisans: Doğrulanamadı (veri seti Kaggle'dan kaldırılmıştır).. Siteye yalnızca özet veri girer: `data/processed/summary.json`.
`python notebooks/export_summary.py maaş_tahminleme.xlsx` komutu bu dosyayı yeniden üretir (pandas, openpyxl).

## Yerelde çalıştırma
```
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Kullanılan kütüphaneler ve kodlar
Next.js, React; grafikler ve kaydırma (Intersection Observer) kodla yazıldı, hazır şablon kullanılmadı.

## Yapay zekâ kullanım beyanı
Kodlama, hata ayıklama ve metin düzenleme süreçlerinde yapay zekâ araçlarından (Gemini, Claude) yardımcı olarak yararlanılmış, tüm sonuçlar yazar tarafından kontrol edilmiştir.
