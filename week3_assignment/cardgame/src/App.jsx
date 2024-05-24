import GlobalStyle from "../styles/GlobalStyle";
import Home from "./pages/Home";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;