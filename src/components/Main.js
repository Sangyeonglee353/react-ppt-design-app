import { Link } from "react-router-dom";
import styled from "styled-components";

const MainCSS = styled.div`
  width: 100vw;
  height: 100vh;
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    a {
      // Link 기본 색상 변경
      text-decoration: none;
      color: #000;
    }
    p {
      font-family: "Russo One", sans-serif;
      margin: 0 auto;
      &.title {
        font-size: 125px;
        animation: fadeInUp 1s;
      }
      &.creator {
        font-size: 40px;
        color: var(--color-main-grey);
        animation: fadeInUp 2s;
      }
    }
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }
      to {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;

const Main = () => {
  return (
    <MainCSS>
      <div className="contents">
        <p className="title">
          <Link to="/DesignList">PPT DESIGN</Link>
        </p>
        <p className="creator">by leesy</p>
      </div>
    </MainCSS>
  );
};

export default Main;
