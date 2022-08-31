import { ReactNode, useEffect } from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useMyStore } from "../utils/zustand-store";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const theme = useMyStore((state) => state.theme);
  const burger = useMyStore((state) => state.burger);

  useEffect(() => {
    // Set theme based on zustand state variable
    if (theme === "dark") {
      document.body.style.backgroundColor = "#2F3E46";
      document.body.style.color = "#edf3ee";
    } else {
      // document.body.style.backgroundColor = "#CAD2C5";
      document.body.style.backgroundColor = "#fff7f0";
      document.body.style.color = "#000300";
    }
    document.body.style.colorScheme = theme;

    // If nav menu is opened, set dom overflow to hidden
    document.body.style.overflow = !burger ? "hidden" : "visible";
  }, [burger, theme]);

  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
