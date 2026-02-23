// src/pages/HomePage.tsx
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import asset3 from "../assets/Asset-3.png";
import HeroCarousel from "../components/HeroCarousel";

export function HomePage({ content }) {
  const { home } = content;

  return (
    <Box>
      {/* Hero */}
      <HeroCarousel />

      {/* Intro */}
      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Card variant="outlined">
            <CardMedia src={home.intro.image} component="img" height={300} />
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>
                {home.intro.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 1, fontWeight: 700, opacity: 0.85 }}
              >
                {home.intro.subtitle}
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* About company */}
      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={asset3}
                sx={{ width: "100%", borderRadius: 0.5 }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ fontWeight: 900 }}>
                {home.aboutCompany.title}
              </Typography>
              <Stack spacing={2}>
                {home.aboutCompany.paragraphs.map((p, idx) => (
                  <Typography key={idx} sx={{ fontSize: 18, lineHeight: 1.9 }}>
                    {p}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Lifestyle */}
      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 900 }}>
                  {home.lifestyle.title}
                </Typography>
                <Typography sx={{ fontSize: 18, lineHeight: 1.9 }}>
                  {home.lifestyle.body}
                </Typography>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to={home.lifestyle.primaryCta.to}
                  sx={{ width: "fit-content", fontWeight: 800 }}
                >
                  {home.lifestyle.primaryCta.label}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* CTA cards */}
      <Box sx={{ py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {home.ctas.map((c, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardMedia src={c.image} component="img" />
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 900 }}>
                      {c.title}
                    </Typography>
                    <Typography sx={{ mt: 1, opacity: 0.85, fontWeight: 700 }}>
                      {c.subtitle}
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                      {"to" in c.action ? (
                        <Button
                          variant="contained"
                          component={RouterLink}
                          to={c.action.to}
                          sx={{ fontWeight: 800 }}
                        >
                          {c.action.label}
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          component="a"
                          href={c.action.href}
                          sx={{ fontWeight: 800 }}
                        >
                          {c.action.label}
                        </Button>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Landscape */}
      <Box sx={{ py: { xs: 5, md: 10 } }}>
        <Container maxWidth="lg">
          <Card variant="outlined">
            <CardMedia src={home.landscape.image} component="img" />
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h4" sx={{ fontWeight: 900 }}>
                  {home.landscape.title}
                </Typography>
                <Typography sx={{ fontSize: 18, lineHeight: 1.9 }}>
                  {home.landscape.body}
                </Typography>
                <Button
                  variant="outlined"
                  component="a"
                  href={home.landscape.secondaryCta.href}
                  sx={{ width: "fit-content", fontWeight: 800 }}
                >
                  {home.landscape.secondaryCta.label}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}
