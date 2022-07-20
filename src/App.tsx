import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import shadows, { Shadows } from '@mui/material/styles/shadows';
import Home from './pages/Home';
import HomeLayout from './pages/HomeLayout';

const theme = createTheme();
const appTheme = createTheme({
  shadows: shadows.map(() => 'none') as Shadows,
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [theme.breakpoints.up('lg')]: {
            maxWidth: 1024,
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Routes>
        <Route
          path="/"
          element={<HomeLayout />}
        >
          <Route
            path="/"
            element={<Home />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
