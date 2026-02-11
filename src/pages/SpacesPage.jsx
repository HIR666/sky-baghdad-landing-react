// src/pages/SpacesPage.tsx
import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

export function SpacesPage({ content }) {
  const { title, subtitle, gallery } = content.spaces;

  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            {title}
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>{subtitle}</Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {gallery.map((img) => (
            <Grid item xs={12} sm={6} md={3} key={img.id}>
              <Card variant="outlined" sx={{ overflow: "hidden" }}>
                {img.src ? (
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.alt}
                    sx={{ width: "100%", height: 220, objectFit: "cover" }}
                  />
                ) : (
                  <Skeleton variant="rectangular" height={220} />
                )}
                <CardContent>
                  <Typography sx={{ fontWeight: 800 }}>#{img.id}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
