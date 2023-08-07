"use client";

import asyncComponent from "@/app/utils/asyncComponent";

const Profile = asyncComponent(
  () => import("../../components/profile/Profile")
);

export default function ProfilePage() {
  return <Profile />;
}
