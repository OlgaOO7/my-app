import React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';

import { AppBar, CssBaseline, Toolbar, Link, ThemeProvider, createTheme, Typography } from "@mui/material";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { teal } from "@mui/material/colors";

import ErrorBoundary from "./features/ErrorBoundary";

function HeaderLink({children, to}: {to: string, children: React.ReactNode}) {
  return (
    <Link component={RouterLink} to={to} variant="button" color="inherit" sx={{my: 1, mx: 1.5}}>{children}</Link>
  )
}

const defaultTheme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#96000f",
    }
  }
})

function App() {
  return (
    <ErrorBoundary>
  <ThemeProvider theme={defaultTheme}>
      <CssBaseline  />
      <AppBar>
        <Toolbar >
          <LiveTvOutlinedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>The Movies DB</Typography>
        <nav>
          <HeaderLink to="/my-app">Home</HeaderLink>
          <HeaderLink to="/my-app/movies">Movies</HeaderLink>
          <HeaderLink to="/my-app/about">About</HeaderLink>
          </nav>
          </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
