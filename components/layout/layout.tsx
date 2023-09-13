import "./layout.module.css";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";

interface Props extends React.PropsWithChildren {}

function Layout({ children }: Props) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
