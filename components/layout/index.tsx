import "./layout.module.css";
import Navigation from "../navigation";
import Footer from "../footer";
import TopGenericSection from "../sections/top-generic";
import DiscountTopBanner from "../discount-top-banner";
import Header from "../header";

interface Props extends React.PropsWithChildren {}

function Layout({ children }: Props) {
  return (
    <div>
      <DiscountTopBanner />
      <TopGenericSection />
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
