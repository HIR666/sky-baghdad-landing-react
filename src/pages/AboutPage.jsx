import * as React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import about1 from "../assets/about-1.jpg";
import about4 from "../assets/about-4.jpg";
import about5 from "../assets/about-5.jpg";

export function AboutPage({ content }) {
  const sections = content.about.sections;
  const images = [about1, about1, about1, about4, about5];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Page header */}
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            عن المشروع
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>
            مرافق متكاملة وخدمات يومية داخل المجمع.
          </Typography>
        </Stack>

        {/* Alternating rows */}
        <Stack spacing={{ xs: 8, md: 12 }}>
          {sections.map((s, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid
                container
                spacing={6}
                alignItems="stretch" // ✅ FIXED ALIGNMENT
                key={s.title}
                direction={{
                  xs: "column",
                  md: isEven ? "row-reverse" : "row",
                }}
              >
                {/* Image */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box
                      component="img"
                      src={images[index]}
                      alt={s.title}
                      sx={{
                        width: "100%",
                        height: "auto", // ✅ no forced height
                        display: "block",
                        borderRadius: 0.5, // very subtle
                        transition: "transform .5s ease",
                        "&:hover": {
                          transform: "scale(1.02)",
                        },
                      }}
                    />
                  </Box>
                </Grid>

                {/* Text */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ height: "100%" }}>
                    <Stack spacing={2}>
                      <Typography variant="h4" sx={{ fontWeight: 900 }}>
                        {s.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 18,
                          lineHeight: 1.9,
                          opacity: 0.9,
                        }}
                      >
                        {s.body}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
