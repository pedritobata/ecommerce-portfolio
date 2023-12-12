import { FC, PropsWithChildren } from "react";
import DiscountTopBanner from "@/components/discount-top-banner";
import TopGenericSection from "@/components/sections/top-generic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { OneAsideLayoutProps } from "@/shared/types/layout";

export default function OneAsideLayout({
  side,
  children,
  AsideComponent,
  asideFr = 1,
  mainFr = 1,
}: OneAsideLayoutProps & PropsWithChildren) {
  return (
    <div className="layout">
      <div className="layout__top">
        <DiscountTopBanner />
        <TopGenericSection />
        <Header />
      </div>
      <div className="layout__body">
        <aside className="layout__body-aside">
          <AsideComponent />
        </aside>
        <div className="layout__body-main">
          <Navigation />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
