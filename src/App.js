import styled from "styled-components";
import Main from "./components/Main";
import DesignList from "./components/DesignList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppCSS = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <AppCSS>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/designlist" element={<DesignList />} />
        </Routes>
      </BrowserRouter>
    </AppCSS>
  );
};

export default App;
