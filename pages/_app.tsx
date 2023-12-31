import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48  font-montserrat">
      {/* // do this div style later (after putting the content) */}
      <div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl  shadow-custom-light">
        {/* //!sidebar */}
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl  lg:col-span-9 shadow-custom-light">
        {/* //!navbar */}
        <Navbar />
        {/* //!about */}
        <AnimatePresence >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MyApp;
