import { Paper } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Articles from "./Articles";
import TeamStack from "./TeamStack";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Divider } from "@mui/material";

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
        <Paper elevation={-1} sx={{ backgroundColor: '#ffffffdd' }}>
          <ResponsiveAppBar />
          <Articles />
          <Divider variant="middle" />
          <TeamStack />
        </Paper>
      </ThemeProvider>
    </>

  );
}

export default App
