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
    { url: "/pdfs/190831_koica_final_pt.pdf", date: "2019.08.31" },
    { url: "/pdfs/191204_koica_phlippine_life_info.pdf", date: "2019.12.04" },
    { url: "/pdfs/200205_koica_part_info.pdf", date: "2020.02.05" },
    { url: "/pdfs/210327_CED.pdf", date: "2021.03.27" },
    { url: "/pdfs/210502_CED.pdf", date: "2021.05.02" },
    { url: "/pdfs/210509_CED.pdf", date: "2021.05.09" },
    { url: "/pdfs/210606_CED.pdf", date: "2021.06.06" },
    // {url:"/pdfs/220529_NCS.pdf",
    // date:"2022.05.29"},
    { url: "/pdfs/220615_webProgramming.pdf", date: "2022.06.15" },
    { url: "/pdfs/221025_job.pdf", date: "2022.10.25" },
    { url: "/pdfs/221211_mobileProgramming.pdf", date: "2022.12.11" },
    { url: "/pdfs/221216_computerSecurity.pdf", date: "2022.12.16" },
    { url: "/pdfs/230131_safeProject.pdf", date: "2023.01.31" },
    { url: "/pdfs/230410_contagion.pdf", date: "2023.04.10" },
    { url: "/pdfs/230414_hangeul.pdf", date: "2023.04.14" },
    { url: "/pdfs/230414_word.pdf", date: "2023.04.14" },
    { url: "/pdfs/230414_ppt.pdf", date: "2023.04.14" },
    { url: "/pdfs/230414_sns.pdf", date: "2023.04.14" },
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
