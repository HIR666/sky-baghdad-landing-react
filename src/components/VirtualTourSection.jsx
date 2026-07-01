import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function VirtualTourSection({ home }) {
  const [started, setStarted] = useState(false);

  const tourUrl =
    "https://Advantage.vr-360-tour.com/e/4ZMBnxTnQtI/e?accessibility=false&dimensions=false&hide_logo=true&hide_nadir=true&hidelive=true&intro_mouse_icon=false&t_3d_model_dimensions=false";

  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Card
          variant="outlined"
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 1,
            minHeight: { xs: 420, md: 520 },
          }}
        >
          {!started ? (
            <>
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
                  minHeight: { xs: 420, md: 520 },
                  p: { xs: 3, md: 6 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxWidth: 620,
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

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setStarted(true)}
                  sx={{
                    width: "fit-content",
                    px: 4,
                    py: 1.4,
                    borderRadius: 999,
                    fontWeight: 800,
                  }}
                >
                  ابدأ الجولة
                </Button>
              </CardContent>
            </>
          ) : (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                minHeight: { xs: 360, md: 520 },
              }}
            >
              <IconButton
                onClick={() => setStarted(false)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  zIndex: 10,
                  bgcolor: "rgba(0,0,0,0.65)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.85)",
                  },
                }}
              >
                <CloseRoundedIcon />
              </IconButton>

              <iframe
                title="Virtual Apartment Tour"
                src={tourUrl}
                allowFullScreen
                loading="lazy"
                allow="clipboard-write; microphone; camera; gyroscope; accelerometer; vr; xr; magnetometer; web-share; webvr; webxr"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </Box>
          )}
        </Card>
      </Container>
    </Box>
  );
}
