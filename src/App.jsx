import React, { useMemo, useState } from "react";
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

export default function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Header with theme toggle */}
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
