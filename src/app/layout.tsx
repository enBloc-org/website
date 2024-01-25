import type { Metadata } from 'next';
import './globals.css';

//Components

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
        {children}
      </body>
    </html>
  );
}
