import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'Sort It! — VR Düzenleme Oyunu',
  description: 'Ses, parıltı ve titreşim ipuçlarını kullan. Nesneleri doğru kutulara ayır ve vardiyayı kazan.',
  icons: { icon: '/sortit-character.png' },
  openGraph: {
    title: 'Sort It! — Düzeni Hisset.',
    description: 'Ses, parıltı ve titreşim ipuçlarını çöz. VR vardiyasını herkesten hızlı tamamla.',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'Sort It! — Düzeni Hisset.' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sort It! — Düzeni Hisset.',
    description: 'Ses, parıltı ve titreşim ipuçlarını çöz. VR vardiyasını herkesten hızlı tamamla.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
