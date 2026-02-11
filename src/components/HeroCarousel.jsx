import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { skyBaghdadContent } from "../content/skyBaghdadContent";

import hero1 from "../assets/Asset-4.png";
import hero2 from "../assets/Asset-10.png";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
const HeroCarousel = () => {
  const images = [hero1, hero2];
  const [index, setIndex] = React.useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Box sx={{ position: "relative", height: { xs: 520, md: 650 } }}>
      {/* Background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${images[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,50,73,0.55), rgba(15,50,73,0.75))",
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} sx={{ color: "#fff", maxWidth: 640 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
            {skyBaghdadContent.home.hero.title}
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 700, opacity: 0.9 }}>
            {skyBaghdadContent.home.hero.subtitle}
          </Typography>

          <Stack direction="row" spacing={2} sx={{ pt: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{ fontWeight: 800 }}
            >
              قم بالتواصل
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/about"
              sx={{
                fontWeight: 800,
                color: "#fff",
                borderColor: "rgba(255,255,255,0.6)",
                "&:hover": {
                  borderColor: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              المزيد عن سكاي بغداد
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Navigation arrows */}
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.35)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.55)" },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.35)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.55)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HeroCarousel;
