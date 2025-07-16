import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { DBProvider } from "@/context/DBContext";

export const metadata = {
  title: "Pro Tech Activity Manager",
  description: "Solutions App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <DBProvider>
            <Navbar />
            <div className="container">{children}</div>
          </DBProvider>
        </AppProvider>
        {/* <Footer /> */}
        <Toaster position="bottom-right" reverseOrder={true} />
      </body>
    </html>
  );
}
