import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  const goToProfile = () => {
    router.push("/dashboard/profile");
  };

  return (
    <>
      <Button variant="contained" onClick={goToProfile}>
        Ir al Perfil
      </Button>
    </>
  );
}
