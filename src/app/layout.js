import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/sheared/navbar/Navbar";
import UserProvider from "./context/UserContext";
import Provider from "./lib/Provider";
import Footer from "./components/sheared/footer/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper || Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${geistSans.className}`}>
      <body className="bg-[#F8FAFC] ">
        <Provider>
          <NavBar></NavBar>
          {children}
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
