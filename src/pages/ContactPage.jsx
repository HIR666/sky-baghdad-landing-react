// src/pages/ContactPage.jsx
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
    <Box sx={{ py: { xs: 6, md: 10 }, mt: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="stretch">
          {/* LEFT — INFO CARD */}
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
              }}
            >
              <CardContent>
                <Stack spacing={3}>
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

                  <Box>
                    <Typography sx={{ fontWeight: 900 }}>العنوان</Typography>
                    <Typography sx={{ opacity: 0.9 }}>{c.address}</Typography>
                    <Typography sx={{ opacity: 0.9 }}>{c.phones}</Typography>
                    <Typography sx={{ opacity: 0.9 }}>{c.email}</Typography>
                  </Box>

                  <Typography sx={{ fontWeight: 900 }}>{c.mapLabel}</Typography>

                  <Box
                    sx={{
                      height: 260,
                      borderRadius: 2,
                      overflow: "hidden",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Box
                      component="iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.120930269543!2d44.34977067871169!3d33.31565380829642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f000eb3afaf%3A0x282f34baeee926e7!2z2KjZiNin2KjYqSDYp9iz2YrYpyDZhdio2YrYudin2Kog2YXYrNmF2Lkg2LPZg9in2Yog2KjYutiv2KfYrw!5e0!3m2!1sen!2siq!4v1771630468811!5m2!1sen!2siq"
                      sx={{
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT — FORM CARD */}
          <Grid item xs={12} md={6}>
            <Card
              variant="outlined"
              sx={{
                height: "100%",
              }}
            >
              <CardContent>
                <Stack spacing={3}>
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    {c.formTitle}
                  </Typography>

                  <TextField fullWidth label="الاسم" />
                  <TextField fullWidth label="رقم الهاتف" />
                  <TextField fullWidth label="البريد الإلكتروني" />
                  <TextField fullWidth label="الرسالة" multiline minRows={5} />

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      fontWeight: 900,
                      alignSelf: "center",
                      width: "80%",
                      maxWidth: 300,
                    }}
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
