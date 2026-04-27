
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { ToastContainer} from 'react-toastify';
import { useEffect } from "react";


const RootLayout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>

      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>

       <ToastContainer />


    </div>
  );
};

export default RootLayout;
