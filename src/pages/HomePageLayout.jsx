import { Outlet } from "react-router-dom";
import  Header  from "../components/Header";
import Navbar from "../components/Navbar";
const HomePageLayout = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <section className="align-element py-20">
      <Outlet />
      </section>
      
    </>
  );
};

export default HomePageLayout;
