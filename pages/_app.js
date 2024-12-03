import { ContextProvider } from "@/context/ContextProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
