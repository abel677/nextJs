"use client";

import { MouseEvent, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { doLogout } from "@/redux/slices/auth";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const { userLogged } = useAppSelector((state) => state.authState);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const iconName = userLogged?.name?.substring(0, 1).toUpperCase();

  const onLogout = () => {
    dispatch(doLogout());
  };

  return (
    <Box
      sx={{
        width: { xs: "95%", sm: "80%", lg: "60%" },
      }}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {iconName}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={(event) => handleMenuClick(event)}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={userLogged?.name}
          subheader={userLogged?.email}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={onLogout}>Cerrar Sesiòn</MenuItem>
        </Menu>
        
        <CardContent>{`Bienvenido ${userLogged?.name}`}</CardContent>
      </Card>
    </Box>
  );
}
