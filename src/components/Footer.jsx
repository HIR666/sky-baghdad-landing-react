// components/Footer.jsx
import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import navyLogo from "../assets/navy-logo.png";
import beigeLogo from "../assets/beige-logo.png";

export default function Footer({ mode }) {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        // py: 1,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={mode === "dark" ? beigeLogo : navyLogo}
        alt="Sky Baghdad"
        sx={{
          height: 64,
          // mb: 1,
        }}
      />

      {/* Social Icons */}
      <Box sx={{ mb: 2 }}>
        <IconButton
          component="a"
          href="https://www.instagram.com/skybaghdad.iq"
          target="_blank"
          color="primary"
          sx={{
            border: "1px solid",
            borderColor: "divider",
            mx: 0.5,
            transition: "all .3s ease",
            "&:hover": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
            },
          }}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.facebook.com/p/%D9%85%D8%AC%D9%85%D8%B9-%D8%B3%D9%83%D8%A7%D9%8A-%D8%A8%D8%BA%D8%AF%D8%A7%D8%AF-%D8%A7%D9%84%D8%B3%D9%83%D9%86%D9%8A-61560073637024/"
          target="_blank"
          color="primary"
          sx={{
            border: "1px solid",
            borderColor: "divider",
            mx: 0.5,
            transition: "all .3s ease",
            "&:hover": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
            },
          }}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://wa.me/9647833338090"
          target="_blank"
          color="primary"
          sx={{
            border: "1px solid",
            borderColor: "divider",
            mx: 0.5,
            transition: "all .3s ease",
            "&:hover": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
            },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        © {new Date().getFullYear()} Sky Baghdad
      </Typography>
    </Box>
  );
}
