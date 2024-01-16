import type { Metadata } from 'next';
import './globals.css';

//Components
import StickyHeader from '@/components/header';

export const metadata: Metadata = {
  title: 'enBloc',
  description: 'enBloc agency website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <StickyHeader img='/enbloc-logo-teal-nobg.png' alt='Logo for enbloc' />
        {children}
      </body>
    </html>
  );
}
