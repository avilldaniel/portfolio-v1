import { ReactNode } from "react";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
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
