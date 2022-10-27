import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const Main = () => {
  return (
    <div className="bg-dark">
      {/* Creating Single Page Application Using Outlet as Children Property */}
      <Header className=""></Header>
      <Outlet></Outlet>
      <Footer className="mt-5"></Footer>
    </div>
  );
};

export default Main;
