import ResponsiveAppBar from "./ResponsiveAppBar";
import Articles from "./Articles";
import TeamStack from "./TeamStack";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Cabin, sans-serif",
      'Play, sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <ResponsiveAppBar />
        <Articles />
        <TeamStack /></ThemeProvider>
    </>

  );
}

export default App
