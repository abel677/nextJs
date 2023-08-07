"use client";

import asyncComponent from "@/app/utils/asyncComponent";
import { Box } from "@mui/material";

const HomePage = asyncComponent(
  () => import("../../components/dashboard/Home")
);

export default function LoginPage() {
  return (
    <HomePage />
  )
}
