import { PropsWithChildren } from "react";
import DiscountTopBanner from "@/components/discount-top-banner";
import TopGenericSection from "@/components/sections/top-generic";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { WideLayoutProps } from "@/shared/types/layout";

export default function WideLayout({
  children,
}: Omit<WideLayoutProps, "type"> & PropsWithChildren) {
  return (
    <div className="layout">
      <div className="layout__top">
        <DiscountTopBanner />
        <TopGenericSection />
        <Header />
        <Navigation />
      </div>
      <div className="layout__body">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
