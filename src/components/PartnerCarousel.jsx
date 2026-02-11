// components/PartnerCarousel.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partnerLogos = [
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo11.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo12.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo2.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo3.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/cd_logo.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo4.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo5.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo6.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo7.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo8.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo9.png",
  "https://ratback.tdelta.net/public/uzf/1/mud2qfghez/logo10.png",
];

export default function PartnerCarousel() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 10,
        textAlign: "center",
        width: "100%",
        px: 2,
        overflow: "hidden", // 🔥 MAIN FIX
        maxWidth: "100vw", // 🔥 Prevents Swiper exceeding viewport
      }}
    >
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
        Our Partners
      </Typography>

      {/* STRICT CLIP CONTAINER */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden", // 🔥 Clipping boundary
          maxWidth: "100%", // 🔥 No overflow past parent
        }}
      >
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          style={{
            width: "100%", // Full width but clipped properly
          }}
        >
          {partnerLogos.map((logo, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  width: 110,
                  height: 110,
                  mx: "auto",
                  p: 1,
                  borderRadius: 2,
                  backgroundColor: theme.palette.background.paper,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={logo}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
