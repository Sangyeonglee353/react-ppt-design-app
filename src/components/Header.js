import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderCSS = styled.div`
  width: 100vw;
  a {
    text-decoration: none;
    color: #000;
  }
  p {
    font-family: "Russo One", sans-serif;
    margin: 0 auto;
    border-bottom: 2px solid var(--color-main-grey);
    &.title {
      font-size: 100px;
      line-height: 100px;
      text-align: center;
      @media (max-width: 1200px) {
        font-size: 50px;
        line-height: 50px;
      }
      @media (max-width: 760px) {
        font-size: 40px;
        line-height: 40px;
      }
      @media (max-width: 500px) {
        font-size: 30px;
        line-height: 30px;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderCSS>
      <p className="title">
        <Link to="/">PPT DESIGN</Link>
      </p>
    </HeaderCSS>
  );
};

export default Header;
