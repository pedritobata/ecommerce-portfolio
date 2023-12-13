import Layout from "@/components/layout";
import HomeOneAside from "@/components/sections/home-one-aside/home-one-aside";
import { ComponentNames } from "@/shared/types/components";
import { FC } from "react";

export function withLayout(Component: React.ReactElement) {
  function Wrapper() {
    //return <Layout>{Component}</Layout>;
  }

  //return <Wrapper />;
}

export function getComponentElement(componentName: ComponentNames): FC | null {
  switch (componentName) {
    case ComponentNames.HomeOneAside:
      return HomeOneAside;
    default:
      return null;
  }
}
