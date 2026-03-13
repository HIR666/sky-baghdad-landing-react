// src/pages/SpacesPage.jsx
import * as React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import space1 from "../assets/spaces-1.webp";
import space2 from "../assets/spaces-2.webp";
import space3 from "../assets/spaces-3.webp";
import space4 from "../assets/spaces-4.webp";
import space5 from "../assets/spaces-5.webp";
import space6 from "../assets/spaces-6.webp";

export function SpacesPage() {
  const images = [space1, space2, space3, space4, space5, space6];
  const [imageSizes, setImageSizes] = React.useState({});

  React.useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#spaces-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  React.useEffect(() => {
    Promise.all(
      images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () =>
            resolve({
              src,
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          img.src = src;
        });
      }),
    ).then((results) => {
      const map = {};
      results.forEach((r) => {
        map[r.src] = { width: r.width, height: r.height };
      });
      setImageSizes(map);
    });
  }, []);

  const spaces = [
    {
      title: "TYPE A — 222.22 م²",
      image: space1,
      content: [
        "الممرات — 14.87 م²",
        "المطبخ — 15.81 م²",
        "حمام الضيوف — 2.40 م²",
        "الحمام الرئيسي — 3.99 م²",
        "الصالة — 30 م²",
        "غرفة الطعام — 15 م²",
        "غرفة النوم (1) — 20.24 م²",
        "غرفة النوم (2) — 13.68 م²",
        "غرفة النوم (3) — 12.74 م²",
        "غرفة نوم ماستر — 20.90 م²",
        "حمام غرفة نوم ماستر — 4.54 م²",
        "المخزن — 1.79 م²",
        "غرفة الملابس — 4.28 م²",
      ],
    },
    {
      title: "TYPE B — 183.17 م²",
      image: space2,
      content: [
        "الممرات — 22.54 م²",
        "المطبخ — 13.67 م²",
        "حمام الضيوف — 2.27 م²",
        "الحمام الرئيسي — 6.27 م²",
        "الصالة — 16.91 م²",
        "اللوبي — 16.91 م²",
        "غرفة النوم (1) — 15.20 م²",
        "غرفة النوم (2) — 15.34 م²",
        "غرفة نوم ماستر — 15.34 م²",
        "حمام غرفة نوم ماستر — 4.60 م²",
        "غرفة الملابس — 2.64 م²",
      ],
    },
    {
      title: "TYPE C — 201.2 م²",
      image: space3,
      content: [
        "الممرات — 19.60 م²",
        "المطبخ — 12.82 م²",
        "حمام الضيوف — 2.80 م²",
        "الحمام الرئيسي — 3.99 م²",
        "الصالة — 30.38 م²",
        "غرفة النوم (1) — 12.74 م²",
        "غرفة النوم (2) — 14.99 م²",
        "غرفة نوم ماستر — 16.15 م²",
        "حمام غرفة نوم ماستر — 5.26 م²",
        "الشرفة (1) — 22.21 م²",
        "الشرفة (2) — 2.70 م²",
        "المخزن — 1.80 م²",
      ],
    },
    {
      title: "TYPE D — 169.54 م²",
      image: space4,
      content: [
        "الممرات — 9.98 م²",
        "المطبخ — 1.74 م²",
        "حمام الضيوف — 2.80 م²",
        "الحمام الرئيسي — 4.37 م²",
        "الصالة — 26.60 م²",
        "غرفة النوم (1) — 16.45 م²",
        "غرفة نوم ماستر — 22.88 م²",
        "حمام غرفة نوم ماستر — 4.53 م²",
        "الشرفة — 27.14 م²",
      ],
    },
    {
      title: "TYPE E — 199.17 م²",
      image: space5,
      content: [
        "الممرات — 19.59 م²",
        "المطبخ — 12.82 م²",
        "حمام الضيوف — 2.80 م²",
        "الحمام الرئيسي — 3.99 م²",
        "الصالة — 30.41 م²",
        "غرفة النوم (1) — 12.74 م²",
        "غرفة النوم (2) — 14.96 م²",
        "غرفة نوم ماستر — 16.15 م²",
        "حمام غرفة نوم ماستر — 5.26 م²",
        "الشرفة (1) — 20.90 م²",
        "الشرفة (2) — 2.55 م²",
        "غرفة الملابس — 3.18 م²",
        "المخزن — 1.80 م²",
      ],
    },
    {
      title: "TYPE F — 169.54 م²",
      image: space6,
      content: [
        "الممرات — 19.59 م²",
        "المطبخ — 12.92 م²",
        "حمام الضيوف — 2.41 م²",
        "الحمام الرئيسي — 4.37 م²",
        "الصالة — 35.72 م²",
        "غرفة النوم (1) — 12.74 م²",
        "غرفة النوم (2) — 14.98 م²",
        "غرفة نوم ماستر — 16.15 م²",
        "حمام غرفة نوم ماستر — 4.53 م²",
        "الشرفة (1) — 15.23 م²",
        "الشرفة (2) — 2.55 م²",
        "المخزن — 1.80 م²",
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }} id="spaces-gallery">
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 4, md: 6 }}>
          {spaces.map((space) => {
            const [typePart, sizePart] = space.title.split("—");
            const size = imageSizes[space.image];

            return (
              <Grid
                container
                spacing={6}
                alignItems="center"
                key={space.title}
                direction={{ xs: "column", md: "row-reverse" }}
              >
                {/* Image */}
                <Grid item xs={12} md={6}>
                  <a
                    href={space.image}
                    data-pswp-width={size?.width || 1600}
                    data-pswp-height={size?.height || 900}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      component="img"
                      src={space.image}
                      alt={space.title}
                      sx={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: 0,
                        cursor: "zoom-in",
                      }}
                    />
                  </a>
                </Grid>

                {/* Text */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <Typography variant="h4" sx={{ fontWeight: 500 }}>
                      {typePart} — <span dir="rtl">{sizePart.trim()}</span>
                    </Typography>

                    {space.content.map((line, i) => (
                      <Typography key={i} sx={{ fontSize: 17, opacity: 0.9 }}>
                        {line}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>

                <Divider sx={{ width: "100%", my: 2 }} />
              </Grid>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
