import React from "react";
import NavBar from "./Navbar";

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
