import styled from "styled-components";

const Container = styled.div`
  ${(props) => {
    switch (props.$state) {
      case "alert":
        return "red";
      case "danger":
        return "yellow";
      case "info":
        return "green";
      default:
        return "gray";
    }
  }};
  color: ${(props) => {
    switch (props.$state) {
      case "alert":
        return "#ff8989dd";
      case "danger":
        return "#fff781dd";
      case "info":
        return "#8aff92dd";
      default:
        return "gray";
    }
  }};
`;

// eslint-disable-next-line react/prop-types
const DisplayMessage = ({ children, type }) => {
  if (children) {
    return <Container $state={type}>{children}</Container>;
  }
};

export default DisplayMessage;
