import Gnb from './gnb';
import './globals.scss';

export const metadata = {
  title: 'UI React | daeun',
  description: 'Vanila / React UI요소 만들기',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
}
