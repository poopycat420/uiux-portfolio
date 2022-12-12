import "./App.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";

const theme = {
  color1: "#F9F7F7",
  color2: "#DBE2EF",
  color3: "#3F72AF",
  color4: "#112D4E",
};

const Themed = ({element}) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Themed element={<Homepage />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
