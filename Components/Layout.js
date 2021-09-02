import Head from "next/Head";
import Navbar from "./Navigation/Navbar";
const Layout = ({ title, children }) => {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
