import { Fraunces, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';

const display = Fraunces({ subsets: ['latin', 'latin-ext'], weight: ['600', '800'], variable: '--font-display' });
const body = Source_Sans_3({ subsets: ['latin', 'latin-ext'], weight: ['400', '600'], variable: '--font-body' });

const SITE = 'https://maasini-en-cok-hangi-faktor-etkiliy.vercel.app';
const TITLE = 'Maaşını En Çok Hangi Faktör Etkiliyor? | Veri Hikâyesi';
const DESC = '250.000 çalışanlık veri setinde maaşı en çok hangi faktörler belirliyor? Gamze Susam’ın interaktif veri hikâyesi.';

export const metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE, description: DESC, url: SITE, type: 'website', locale: 'tr_TR',
    images: [{ url: '/og.png', width: 1200, height: 627, alt: 'Lokasyona göre ortalama maaş grafiği' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/og.png'] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body><Nav />{children}</body>
    </html>
  );
}
