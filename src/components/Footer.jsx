// components/Footer.jsx
import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 4,
        py: 3,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} PARTIFY AUTO SPARE PARTS L.L.C
      </Typography>

      <Box>
        <IconButton color="primary">
          <InstagramIcon />
        </IconButton>
        <IconButton color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary">
          <WhatsAppIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
