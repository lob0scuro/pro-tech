import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Pro Tech Activity Manager",
  description: "Solutions App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="container">
          <AppProvider>{children}</AppProvider>
        </div>
        {/* <Footer /> */}
        <Toaster position="bottom-right" reverseOrder={true} />
      </body>
    </html>
  );
}
