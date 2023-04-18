import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import styled from "styled-components";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

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
    text-align: center;
    .prev {
      cursor: pointer;
    }
    .next {
      cursor: pointer;
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
        <p className="pageNavi">
          <span
            className="prev"
            onClick={() =>
              pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
            }
          >
            &lt;&nbsp;&nbsp;
          </span>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <span
            className="next"
            onClick={() =>
              pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            }
          >
            &nbsp;&nbsp;&gt;
          </span>
        </p>
      )}
    </PdfViewerCSS>
  );
};

export default PdfViewer;
