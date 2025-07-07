import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
