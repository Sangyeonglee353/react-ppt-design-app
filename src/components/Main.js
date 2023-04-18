import { Link } from "react-router-dom";
import styled from "styled-components";
import bgDandelion from "../images/mandelion.jpg";
import bgSimple from "../images/simple_bg.png";

const MainCSS = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgSimple});
  /* background-image: url(${bgDandelion}); */
  background-repeat: no-repeat;
  background-size: cover;

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
      text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
        1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
        4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
        4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
        7px 6px 1px #cccccc;
      &.title {
        font-size: 125px;
        animation: fadeInUp 1s;
      }
      &.creator {
        font-size: 40px;
        color: var(--color-main-deep-grey);
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
