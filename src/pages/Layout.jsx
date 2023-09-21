import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex bg-[white] shadow-lg px-[150px] py-5 justify-between">
        <div className="">
            <h1 className="text-3xl font-bold text-[gray]">Breaches Checker</h1>
        </div>
        <div className="flex gap-[30px]">
            <div className="text-[20px] font-semibold border-b-2 border-b-[transparent] transition duration-300 hover:border-b-[black]"><Link to={'/'}>Home</Link></div>
            <div className="text-[20px] font-semibold border-b-2 border-b-[transparent] transition duration-300 hover:border-b-[black]"><Link to={'/check-breaches'}>Check Breaches</Link></div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
