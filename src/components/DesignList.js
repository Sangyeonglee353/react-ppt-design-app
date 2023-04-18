import styled from "styled-components";
import Header from "./Header";
import DesignItem from "./DesignItem";
import bgSimple from "../images/simple_bg.png";
import { useState } from "react";
import DesignDetail from "./DesignDetail";

const DesignListCSS = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88vh;
  margin: auto;
  list-style: none;
  overflow-y: scroll;

  background-image: url(${bgSimple});
  background-repeat: no-repeat;
  background-size: cover;
`;

const DesignList = () => {
  const [designDetailShow, setDesignDetailShow] = useState(false);
  const [designData, setDesignData] = useState("");
  const pdfUrls = [
    "/pdfs/CED_210327.pdf",
    "/pdfs/CED_210502.pdf",
    "/pdfs/CED_210509.pdf",
    "/pdfs/CED_210606.pdf",
    // "/pdfs/NCS_220529.pdf",
    "/pdfs/webProgramming_220615.pdf",
    "/pdfs/job_221025.pdf",
    "/pdfs/mobileProgramming_221211.pdf",
    "/pdfs/computerSecurity_221216.pdf",
    "/pdfs/safeProject_230131.pdf",
    "/pdfs/contagion_230410.pdf",
    "/pdfs/hangeul_230414.pdf",
    "/pdfs/word_230414.pdf",
    "/pdfs/ppt_230414.pdf",
    "/pdfs/sns_230414.pdf",
  ];

  const showDesignDetailHandler = () => {
    setDesignDetailShow(true);
  };

  const hideDesignDetailHandler = () => {
    setDesignDetailShow(false);
  };

  return (
    <>
      <Header />
      {designDetailShow && (
        <DesignDetail
          designData={designData}
          onHideDesignDetail={hideDesignDetailHandler}
        />
      )}
      <DesignListCSS>
        {pdfUrls.map((pdfUrl, index) => (
          <DesignItem
            key={index}
            pdfUrl={pdfUrl}
            onShowDesignDetail={showDesignDetailHandler}
            onSetDesignData={setDesignData}
          />
        ))}
      </DesignListCSS>
    </>
  );
};

export default DesignList;
