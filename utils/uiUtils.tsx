import Layout from "@/components/layout/layout";

export function withLayout(Component: React.ReactElement) {
  function Wrapper() {
    return <Layout>{Component}</Layout>;
  }

  return <Wrapper />;
}
