import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sort It! — VR Düzenleme Oyunu',
  description: 'Ses, parıltı ve titreşim ipuçlarını kullan. Nesneleri doğru kutulara ayır ve vardiyayı kazan.',
  icons: { icon: new URL('sortit-character.png', `${siteUrl.replace(/\/$/, '')}/`).toString() },
  openGraph: {
    title: 'Sort It! — Düzeni Hisset.',
    description: 'Ses, parıltı ve titreşim ipuçlarını çöz. VR vardiyasını herkesten hızlı tamamla.',
    images: [{ url: new URL('og.png', `${siteUrl.replace(/\/$/, '')}/`).toString(), width: 1729, height: 910, alt: 'Sort It! — Düzeni Hisset.' }],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sort It! — Düzeni Hisset.',
    description: 'Ses, parıltı ve titreşim ipuçlarını çöz. VR vardiyasını herkesten hızlı tamamla.',
    images: [new URL('og.png', `${siteUrl.replace(/\/$/, '')}/`).toString()],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
