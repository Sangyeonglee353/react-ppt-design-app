import styled from "styled-components";
import Header from "./Header";
import DesignItem from "./DesignItem";

const DesignListCSS = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100vh;
  margin: 2vh auto;
  list-style: none;
`;

const DesignList = () => {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
  ];
  console.log("test");
  return (
    <>
      <Header />
      <DesignListCSS>
        {items.map((item) => (
          <DesignItem data={item} />
        ))}
      </DesignListCSS>
    </>
  );
};

export default DesignList;
