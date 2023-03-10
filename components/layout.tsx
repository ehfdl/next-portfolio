import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
