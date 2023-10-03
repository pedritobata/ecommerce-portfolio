import "./layout.module.css";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import TopGenericSection from "../sections/top-generic";
import DiscountTopBanner from "../discount-top-banner";
import GlobalSection from "../sections/global";

interface Props extends React.PropsWithChildren {}

function Layout({ children }: Props) {
  return (
    <div>
      <DiscountTopBanner />
      <TopGenericSection />
      <GlobalSection />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
