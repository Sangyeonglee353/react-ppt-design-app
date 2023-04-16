import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderCSS = styled.div`
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
      text-align: center;
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
