import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "./styles/Theme";
import './styles/App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
