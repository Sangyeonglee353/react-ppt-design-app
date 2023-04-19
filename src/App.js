import styled from "styled-components";
import Main from "./components/Main";
import DesignList from "./components/DesignList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// pdf.js 활성화
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* icon 활성화 */

library.add(faAngleLeft, faAngleRight);

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
