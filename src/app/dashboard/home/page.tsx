"use client";

import asyncComponent from "@/app/utils/asyncComponent";

const Home = asyncComponent(() => import("../../components/dashboard/Home"));

export default function HomePage() {
  return <Home />;
}
