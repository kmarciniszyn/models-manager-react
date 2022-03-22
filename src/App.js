import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyle";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
