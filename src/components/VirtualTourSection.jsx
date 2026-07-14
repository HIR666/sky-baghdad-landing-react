import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import twoRoomImage from "../assets/2-room.jpeg";
import threeRoomImage from "../assets/3-room.jpeg";

const TOUR_OPTIONS = [
  {
    type: "TYPE D",
    title: "شقة Type D",
    meta: "173.46 م² | غرفتين نوم",
    description: "مساحة متوازنة تمنح كل جزء من يومكم مكانه.",
    image: twoRoomImage,
    imageAlt: "شقة Type D بغرفتي نوم",
    features: [
      "غرفة نوم رئيسية 20.88 م² مع حمّام خاص",
      "صالة 26.60 م² ومطبخ بمساحة 12.92 م²",
      "3 حمّامات تخدم العائلة والضيوف",
      "شرفة 27.14 م² تمتد على واجهة الشقة",
    ],
    url: "https://Advantage.vr-360-tour.com/e/4ZMBnxTnQtI/e?accessibility=false&dimensions=false&hide_logo=true&hide_nadir=true&hidelive=true&intro_mouse_icon=false&t_3d_model_dimensions=false",
  },
  {
    type: "TYPE E",
    title: "شقة Type E",
    meta: "203.94 م² | 3 غرف نوم",
    description: "مساحة أوسع للعائلة، مع تفاصيل تمنح الجميع راحتهم وخصوصيتهم.",
    image: threeRoomImage,
    imageAlt: "شقة Type E بثلاث غرف نوم",
    features: [
      "جناح نوم رئيسي مع حمّام خاص وغرفة ملابس",
      "صالة 30.41 م² ومطبخ بمساحة 12.82 م²",
      "3 حمّامات موزعة لخدمة العائلة والضيوف",
      "شرفتان بمساحة إجمالية 23.45 م² مع مخزن مستقل",
    ],
    url: "https://Advantage.vr-360-tour.com/e/4ZMBn1_zomo/e?fadetransition=false&hide_logo=true&hide_nadir=true",
  },
];

export default function VirtualTourSection() {
  const [started, setStarted] = useState(false);
  const [tourUrl, setTourUrl] = useState("");
  const [tourTitle, setTourTitle] = useState("");

  const openTour = async (tour) => {
    setTourUrl(tour.url);
    setTourTitle(tour.title);
    setStarted(true);

    try {
      const fullscreenTarget = document.documentElement;

      if (!document.fullscreenElement && fullscreenTarget.requestFullscreen) {
        await fullscreenTarget.requestFullscreen();
      }
    } catch {
      // iOS Safari and Chrome use the full-screen Dialog fallback.
    }
  };

  const closeTour = async () => {
    setStarted(false);
    setTourUrl("");
    setTourTitle("");

    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore browser-specific fullscreen exit errors.
    }
  };

  return (
    <Box
      component="section"
      dir="rtl"
      sx={{
        py: { xs: 7, md: 11 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 850,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 900,
              lineHeight: 1.25,
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
            }}
          >
            خليك أول ضيف بالشقة …
            <br />
            زورها افتراضياً
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mx: "auto",
              maxWidth: 760,
              lineHeight: 2,
              fontSize: { xs: "1rem", md: "1.15rem" },
            }}
          >
            اختر الشقة وتجول افتراضيًا من المدخل إلى الشرفة، لتشاهد توزيع
            المساحات قبل زيارتك للمشروع.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 3.5 },
            alignItems: "stretch",
          }}
        >
          {TOUR_OPTIONS.map((tour) => (
            <Card
              key={tour.type}
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                overflow: "hidden",
                borderRadius: 1,
                bgcolor: "background.paper",
                transition:
                  "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 10,
                  borderColor: "primary.main",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 240, sm: 300 },
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  src={tour.image}
                  alt={tour.imageAlt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 500ms ease",
                    ".MuiCard-root:hover &": {
                      transform: "scale(1.035)",
                    },
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.75) 100%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    top: 18,
                    right: 18,
                    px: 1.5,
                    py: 0.7,
                    borderRadius: 999,
                    color: "common.white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.28)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tour.type}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    right: 22,
                    bottom: 20,
                    left: 22,
                    color: "common.white",
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h4"
                    sx={{
                      mb: 0.75,
                      fontWeight: 900,
                      fontSize: { xs: "1.6rem", sm: "1.9rem" },
                    }}
                  >
                    {tour.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "rgba(255,255,255,0.88)",
                      fontSize: { xs: "1rem", sm: "1.08rem" },
                    }}
                  >
                    {tour.meta}
                  </Typography>
                </Box>
              </Box>

              <CardContent
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  "&:last-child": {
                    pb: { xs: 2.5, sm: 3 },
                  },
                }}
              >
                <Typography
                  color="text.secondary"
                  sx={{
                    mb: 2.5,
                    minHeight: { md: 56 },
                    lineHeight: 1.9,
                    fontSize: "1rem",
                  }}
                >
                  {tour.description}
                </Typography>

                {/* <Stack spacing={1.4} sx={{ mb: 3 }}>
                  {tour.features.map((feature) => (
                    <Box
                      key={feature}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.25,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          mt: 0.1,
                          flexShrink: 0,
                          display: "grid",
                          placeItems: "center",
                          borderRadius: 1,
                          color: "primary.main",
                          bgcolor: "action.hover",
                        }}
                      >
                        <CheckRoundedIcon sx={{ fontSize: 17 }} />
                      </Box>

                      <Typography
                        sx={{
                          lineHeight: 1.8,
                          fontSize: "0.95rem",
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack> */}

                <Divider sx={{ mt: "auto", mb: 2.5 }} />

                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  startIcon={<PlayArrowRoundedIcon />}
                  onClick={() => openTour(tour)}
                  sx={{
                    py: 1.35,
                    borderRadius: 2,
                    fontWeight: 900,
                    fontSize: "1rem",
                    "& .MuiButton-startIcon": {
                      ml: 1,
                      mr: 0,
                    },
                  }}
                >
                  ابدأ الجولة
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      <Dialog
        fullScreen
        open={started}
        onClose={closeTour}
        disableEscapeKeyDown={false}
        PaperProps={{
          sx: {
            m: 0,
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            overflow: "hidden",
            bgcolor: "black",
          },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            minHeight: "100dvh",
            overflow: "hidden",
            bgcolor: "black",
          }}
        >
          {tourUrl && (
            <iframe
              title={`جولة افتراضية - ${tourTitle}`}
              src={tourUrl}
              allowFullScreen
              allow="fullscreen; clipboard-write; microphone; camera; gyroscope; accelerometer; vr; xr; magnetometer; web-share; webvr; webxr"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          )}

          <IconButton
            aria-label="إغلاق الجولة"
            onClick={closeTour}
            sx={{
              position: "fixed",
              top: {
                xs: "max(12px, env(safe-area-inset-top))",
                sm: 16,
              },
              right: {
                xs: "max(12px, env(safe-area-inset-right))",
                sm: 16,
              },
              zIndex: 9999,
              width: 46,
              height: 46,
              color: "common.white",
              bgcolor: "rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.9)",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
}
