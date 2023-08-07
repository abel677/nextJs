import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface AppLogoProps {
  color?: string;
}

const AppLogo: React.FC<AppLogoProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
      }}
    >
      <Image src="/icons/logoApp.png" alt="logo" width={200} height={65} />
    </Box>
  );
};

export default AppLogo;
