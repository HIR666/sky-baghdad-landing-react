import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const TOUR_OPTIONS = [
  {
    label: "جولة شقة غرفتين",
    url: "https://Advantage.vr-360-tour.com/e/4ZMBnxTnQtI/e?accessibility=false&dimensions=false&hide_logo=true&hide_nadir=true&hidelive=true&intro_mouse_icon=false&t_3d_model_dimensions=false",
  },
  {
    label: "جولة شقة 3 غرف",
    url: "https://Advantage.vr-360-tour.com/e/4ZMBn1_zomo/e?fadetransition=false&hide_logo=true&hide_nadir=true",
  },
];

export default function VirtualTourSection({ home }) {
  const [started, setStarted] = useState(false);
  const [tourUrl, setTourUrl] = useState("");

  const openTour = async (url) => {
    setTourUrl(url);
    setStarted(true);

    try {
      const fullscreenTarget = document.documentElement;

      if (!document.fullscreenElement && fullscreenTarget.requestFullscreen) {
        await fullscreenTarget.requestFullscreen();
      }
    } catch {
      // iOS Safari and Chrome fall back to the full-screen MUI Dialog.
    }
  };

  const closeTour = async () => {
    setStarted(false);
    setTourUrl("");

    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore browser-specific fullscreen exit errors.
    }
  };

  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Card
          variant="outlined"
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 1,
            minHeight: { xs: 460, md: 520 },
          }}
        >
          <CardMedia
            src={home.intro.image}
            component="img"
            alt={home.intro.title}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.78), rgba(0,0,0,0.42), rgba(0,0,0,0.12))",
            }}
          />

          <CardContent
            sx={{
              position: "relative",
              zIndex: 1,
              minHeight: { xs: 460, md: 520 },
              p: { xs: 3, md: 6 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: 680,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: 34, md: 52 },
              }}
            >
              {home.intro.title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontWeight: 700,
                mb: 3,
              }}
            >
              {home.intro.subtitle}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.92)",
                fontSize: { xs: 18, md: 22 },
                fontWeight: 600,
                mb: 4,
                direction: "rtl",
              }}
            >
              تجوّل داخل الشقة افتراضياً، واستكشف كل زاوية وأنت في مكانك.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "stretch", sm: "center" },
                gap: 1,
                width: { xs: "100%", sm: "fit-content" },
              }}
            >
              {TOUR_OPTIONS.map((tour, index) => (
                <Button
                  key={tour.label}
                  variant={index === 0 ? "contained" : "outlined"}
                  size="large"
                  onClick={() => openTour(tour.url)}
                  sx={{
                    minWidth: { xs: "100%", sm: 190 },
                    px: 3,
                    py: 1.4,
                    borderRadius: 999,
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                    flexShrink: 0,

                    ...(index === 1 && {
                      color: "white",
                      borderColor: "rgba(255,255,255,0.75)",
                      bgcolor: "rgba(0,0,0,0.12)",
                      backdropFilter: "blur(4px)",
                      WebkitBackdropFilter: "blur(4px)",

                      "&:hover": {
                        color: "white",
                        borderColor: "white",
                        bgcolor: "rgba(255,255,255,0.12)",
                      },
                    }),
                  }}
                >
                  {tour.label}
                </Button>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Dialog
        fullScreen
        open={started}
        onClose={closeTour}
        disableEscapeKeyDown={false}
        PaperProps={{
          sx: {
            bgcolor: "black",
            overflow: "hidden",
            m: 0,
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            minHeight: "100dvh",
            bgcolor: "black",
            overflow: "hidden",
          }}
        >
          {tourUrl && (
            <iframe
              title="Virtual Apartment Tour"
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
              width: 44,
              height: 44,
              bgcolor: "rgba(0,0,0,0.68)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",

              "&:hover": {
                bgcolor: "rgba(0,0,0,0.88)",
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
