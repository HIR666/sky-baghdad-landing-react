// src/theme/darkTheme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  direction: "rtl",

  palette: {
    mode: "dark",

    primary: {
      main: "#BCE5F7", // sky blue becomes primary in dark mode
      contrastText: "#0F3249",
    },

    secondary: {
      main: "#0F3249",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#0B2436", // darker shade of brand blue
      paper: "#0F3249",
    },

    text: {
      primary: "#EFECE5",
      secondary: "#BCE5F7",
    },

    divider: "rgba(188, 229, 247, 0.12)",
  },

  typography: {
    fontFamily: [
      "Almarai",
      "Montserrat",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: { fontWeight: 900 },
    h2: { fontWeight: 900 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    button: {
      fontWeight: 800,
      letterSpacing: 0.4,
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15, 50, 73, 0.85)",
          backdropFilter: "blur(10px)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 10,
          textTransform: "none",
        },
      },
    },
  },
});

export default darkTheme;
