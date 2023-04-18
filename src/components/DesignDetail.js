import styled from "styled-components";
import Modal from "../UI/Modal";
import { useEffect, useState } from "react";
import PdfViewer from "./PdfViewer";

const ContentBlock = styled.div`
  margin: ${(props) => (props.height < 700 ? "10" : "30")}px;

  * {
    font-family: "Quicksand", sans-serif;
  }
`;

const DesignDetail = (props) => {
  const [modalHeight, setModalHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setModalHeight(window.innerHeight);
    });
  }, []);

  return (
    <Modal onClick={props.onHideDesignDetail}>
      <ContentBlock height={modalHeight}>
        <PdfViewer pdfUrl={props.designData} onPageController={true} />
      </ContentBlock>
    </Modal>
  );
};

export default DesignDetail;
