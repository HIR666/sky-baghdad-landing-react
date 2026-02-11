// src/pages/ContactPage.tsx
import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export function ContactPage({ content }) {
  const c = content.contact;

  return (
    <Box sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1.25}>
              <Typography variant="h3" sx={{ fontWeight: 900 }}>
                {c.title}
              </Typography>
              {c.heroLines.map((line, i) => (
                <Typography
                  key={i}
                  variant="h5"
                  sx={{ fontWeight: 700, opacity: 0.85 }}
                >
                  {line}
                </Typography>
              ))}

              <Card variant="outlined" sx={{ mt: 2 }}>
                <CardContent>
                  <Stack spacing={1}>
                    <Typography sx={{ fontWeight: 900 }}>العنوان</Typography>
                    <Typography sx={{ opacity: 0.9 }}>{c.address}</Typography>
                    <Typography sx={{ opacity: 0.9 }}>{c.phones}</Typography>
                    <Typography sx={{ opacity: 0.9 }}>{c.email}</Typography>
                    <Typography sx={{ fontWeight: 900, mt: 1 }}>
                      {c.mapLabel}
                    </Typography>
                    <Box
                      sx={{
                        mt: 1,
                        height: 220,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Typography sx={{ opacity: 0.7 }}>
                        Map placeholder
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
                  {c.formTitle}
                </Typography>

                <Stack spacing={2}>
                  <TextField fullWidth label="الاسم" />
                  <TextField fullWidth label="رقم الهاتف" />
                  <TextField fullWidth label="البريد الإلكتروني" />
                  <TextField fullWidth label="الرسالة" multiline minRows={5} />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ fontWeight: 900, width: "fit-content" }}
                  >
                    إرسال
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
