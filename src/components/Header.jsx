import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { Link } from "react-router-dom";
import navyLogo from "../assets/navy-logo.png";
import beigeLogo from "../assets/beige-logo.png";

export default function Header({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (value) => () => setOpen(value);

  const navLinks = [
    { label: "الرئيسية", to: "/" },
    { label: "عن المشروع", to: "/about" },
    { label: "المساحات", to: "/spaces" },
    { label: "التواصل", to: "/contact" },
  ];

  return (
    <>
      <AppBar position="fixed" elevation={2}>
        <Toolbar sx={{ position: "relative" }}>
          {/* MOBILE: Hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* MOBILE: Centered Title (ABSOLUTE CENTER) */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textDecoration: "none",
              fontWeight: 800,
              color: "inherit",
            }}
          >
            سكاي بغداد
          </Typography>

          {/* MOBILE: Logo (Right) */}
          <Box
            component="img"
            src={mode === "dark" ? beigeLogo : navyLogo}
            alt="Sky Baghdad"
            sx={{
              height: 48,
              display: { xs: "flex", md: "none" },
              marginLeft: "auto",
            }}
          />

          {/* DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
            }}
          >
            <Link to="/">
              <Box
                component="img"
                src={mode === "dark" ? beigeLogo : navyLogo}
                alt="Sky Baghdad"
                sx={{ height: 64 }}
              />
            </Link>

            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.to}
                color="inherit"
                sx={{ fontWeight: 700 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* DESKTOP Theme Toggle */}
          <IconButton
            sx={{ display: { xs: "none", md: "flex" } }}
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260 }}>
          <Box sx={{ p: 2, textAlign: "center" }}>
            <IconButton
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>

          <List>
            {navLinks.map((item) => (
              <ListItemButton
                key={item.label}
                component={Link}
                to={item.to}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
