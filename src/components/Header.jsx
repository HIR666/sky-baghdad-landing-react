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
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          {/* MOBILE: Hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* DESKTOP: Logo + Nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Link to="/">
              <Box
                component="img"
                src={mode === "dark" ? beigeLogo : navyLogo} // You can use a different logo for dark mode if you have one
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

          {/* MOBILE: Center title */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textAlign: "center",
              textDecoration: "none",
              fontWeight: 800,
              color: "inherit",
            }}
          >
            Sky Baghdad
          </Typography>

          {/* DESKTOP: Theme toggle */}
          <IconButton
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260 }}>
          {/* Theme toggle inside drawer */}
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
