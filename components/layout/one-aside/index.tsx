import { FC, PropsWithChildren } from "react";
import DiscountTopBanner from "@/components/discount-top-banner";
import TopGenericSection from "@/components/sections/top-generic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { OneAsideLayoutProps } from "@/shared/types/layout";
import Footer from "@/components/footer";
import { getComponentElement } from "@/utils/uiUtils";

export default function OneAsideLayout({
  side,
  children,
  asideComponent,
  asideFr = 1,
  mainFr = 1,
}: Omit<OneAsideLayoutProps, "type"> & PropsWithChildren) {
  const AsideComponent = getComponentElement(asideComponent);
  return (
    <div className="layout">
      <div className="layout__top">
        <DiscountTopBanner />
        <TopGenericSection />
        <Header />
      </div>
      <div className="layout__body">
        <aside className="layout__body-aside">
          {AsideComponent && <AsideComponent />}
        </aside>
        <div className="layout__body-main">
          <Navigation />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
