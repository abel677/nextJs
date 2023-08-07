"use client";

import { ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ContainerAuthFormsStyles } from "./styles";

interface IDashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <ContainerAuthFormsStyles>{children}</ContainerAuthFormsStyles>
      <ToastContainer />
    </>
  );
};

export default DashboardLayout;
