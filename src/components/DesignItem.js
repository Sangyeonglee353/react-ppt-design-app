import styled from "styled-components";
import PdfViewer from "./PdfViewer";

const DesignItemCSS = styled.li`
  width: 33%;
  /* height: 25%; */
  background-color: var(--color-main-grey);
  border-radius: 20px;
  margin: 1vw;
  &:hover {
    background-color: #b9b9b9;
  }
  @media (max-width: 1200px) {
    width: 35%;
  }
  @media (max-width: 760px) {
    width: 55%;
  }
  @media (max-width: 500px) {
    width: 90%;
    /* margin: 1.5vh auto; */
  }
`;

const DesignItem = (props) => {
  const showAndSetDesign = () => {
    props.onSetDesignData(props.pdfUrl);
    props.onShowDesignDetail();
  };
  return (
    <DesignItemCSS onClick={showAndSetDesign}>
      <div key={props.key}>
        <PdfViewer
          key={props.key}
          pdfUrl={props.pdfUrl}
          onPageController={false}
        />
      </div>
    </DesignItemCSS>
  );
};

export default DesignItem;
