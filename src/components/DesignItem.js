import styled from "styled-components";

const DesignItemCSS = styled.li`
  width: 33%;
  height: 33%;
  background-color: var(--color-main-grey);
  border-radius: 20px;
  &:hover {
    background-color: #b9b9b9;
  }
`;

const DesignItem = (props) => {
  return (
    <DesignItemCSS>
      <div key={props.id}>
        <p>{props.name}</p>
      </div>
    </DesignItemCSS>
  );
};

export default DesignItem;
