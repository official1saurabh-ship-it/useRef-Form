import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex">
      <Navbar />

      <div className="flex-1 bg-red-200 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
