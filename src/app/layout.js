"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/fragments/Header/Header";
import Footer from "@/components/fragments/Footer/Footer";
import Layouts from "@/components/layouts/BodyLayouts/page";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store, persistor } from "@/lib/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layouts>
              {!disableNavbar.includes(pathname) && <Header />}
              {children}
              {!disableNavbar.includes(pathname) && <Footer />}
            </Layouts>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
