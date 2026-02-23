import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function AppLayout({ content, mode, children }) {
  const location = useLocation();

  return (
    <Box
      dir="rtl"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        mt: 2,
      }}
    >
      {/* <Header /> */}

      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      {/* <Divider /> */}

      <Footer content={content} mode={mode} />
    </Box>
  );
}
