import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import styled from "styled-components";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PdfViewerCSS = styled.div`
  canvas {
    width: 100% !important;
    height: 33% !important;
    border-radius: 20px;
  }
  .pageNavi {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }
  .pageBtn {
    color: var(--color-main-grey);
    opacity: 0.35;
    .prev {
      position: absolute;
      top: 50%;
      left: 1%;
      transform: translateY(-50%);
      font-size: 100px;
      cursor: pointer;
      &:hover {
        opacity: 1;
        color: black;
      }
    }
    .next {
      position: absolute;
      top: 50%;
      right: 1%;
      transform: translateY(-50%);
      font-size: 100px;
      cursor: pointer;
      &:hover {
        opacity: 1;
        color: black;
      }
    }
  }
  .annotationLayer {
    display: none;
  }
`;
const PdfViewer = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <PdfViewerCSS>
      <Document
        file={process.env.PUBLIC_URL + props.pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {props.onPageController && (
        <>
          <div className="pageBtn">
            <span
              className="prev"
              onClick={() =>
                pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
              }
            >
              {/* &lt;&nbsp;&nbsp; */}
              <FontAwesomeIcon icon="fa-solid fa-angle-left" />
            </span>
            <span
              className="next"
              onClick={() =>
                pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
              }
            >
              {/* &nbsp;&nbsp;&gt; */}
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </span>
          </div>
          <p className="pageNavi">
            <span>
              Slides {pageNumber} of {numPages}
            </span>
          </p>
        </>
      )}
    </PdfViewerCSS>
  );
};

export default PdfViewer;
