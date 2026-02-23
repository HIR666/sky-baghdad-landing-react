// src/theme/lightTheme.js
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  direction: "rtl",

  palette: {
    mode: "light",

    primary: {
      main: "#0F3249", // brand deep blue
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#BCE5F7", // sky accent
      contrastText: "#0F3249",
    },

    background: {
      default: "#EFECE5", // off-white brand background
      paper: "transparent",
    },

    text: {
      primary: "#0F3249",
      secondary: "#4A6575",
    },

    divider: "rgba(15, 50, 73, 0.12)",
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
    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
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
          backgroundColor: "rgba(239, 236, 229, 0.85)",
          color: "#0F3249",
          backdropFilter: "blur(10px)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: "1px solid rgba(15, 50, 73, 0.08)",
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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(247,245,240,0.92)",
          backdropFilter: "blur(12px)",
        },
      },
    },
  },
});

export default lightTheme;
