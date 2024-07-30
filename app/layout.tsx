import { montserrat } from "./ui/fonts";
import "./ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Este es el Título</h1>

        <div className={`${montserrat.className} antialiased`}>
          {children}
        </div>

        <footer>xavier basurto</footer>
      </body>
    </html>
  );
}
