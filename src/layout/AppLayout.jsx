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

export function AppLayout({ content, children }) {
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

      <Divider />

      <Box component="footer" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              {content.footer.title}
            </Typography>
            <Typography>{content.footer.email}</Typography>
            <Typography>{content.footer.phones}</Typography>
            <Typography sx={{ fontWeight: 800, mt: 2 }}>
              {content.footer.socialTitle}
            </Typography>
            <Stack direction="row" spacing={2}>
              {content.footer.socials.map((s) => (
                <Link key={s.label} href={s.href} target="_blank">
                  {s.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
