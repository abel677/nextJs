"use client";

import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { ContainerDashboardStyles } from "./styles";

interface IDashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <ContainerDashboardStyles>{children}</ContainerDashboardStyles>
      <ToastContainer />
    </>
  );
};

export default DashboardLayout;
