"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/fragments/header/Header";
import Footer from "@/components/fragments/Footer";
import Layouts from "@/components/layouts/BodyLayouts/page";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store/store";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const disableNavbar = [
  "/login",
  "/register",
  "/admin",
  "/admin/users",
  "/admin/products",
  "/admin/orders",
];

export default function RootLayout({ children, pageTitle }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          <Layouts>
            {!disableNavbar.includes(pathname) && <Header />}
            {children}
            {!disableNavbar.includes(pathname) && <Footer />}
          </Layouts>
        </Provider>
      </body>
    </html>
  );
}
