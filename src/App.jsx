import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

import { skyBaghdadContent } from "./content/skyBaghdadContent";
import { AppLayout } from "./layout/AppLayout";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SpacesPage } from "./pages/SpacesPage";
import { ContactPage } from "./pages/ContactPage";
import Header from "./components/Header";

const getInitialMode = () => {
  const savedMode = localStorage.getItem("themeMode");

  if (savedMode === "light" || savedMode === "dark") {
    return savedMode;
  }

  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
};

export default function App() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");

    if (!mediaQuery) return;

    const handleSystemThemeChange = (event) => {
      const savedMode = localStorage.getItem("themeMode");

      if (savedMode !== "light" && savedMode !== "dark") {
        setMode(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header mode={mode} setMode={setMode} />

        <AppLayout content={skyBaghdadContent} mode={mode}>
          <Routes>
            <Route
              path="/"
              element={<HomePage content={skyBaghdadContent} />}
            />
            <Route
              path="/about"
              element={<AboutPage content={skyBaghdadContent} />}
            />
            <Route
              path="/spaces"
              element={<SpacesPage content={skyBaghdadContent} />}
            />
            <Route
              path="/contact"
              element={<ContactPage content={skyBaghdadContent} />}
            />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
