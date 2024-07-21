import localFont from 'next/font/local'
import "./globals.css";

export const metadata = {
  title: "bharosa",
  description: "Consumer Products Trust",
};
const gsans=localFont({src:'./GeneralSans-Variable.ttf'})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gsans.className}>{children}</body>
    </html>
  );
}
