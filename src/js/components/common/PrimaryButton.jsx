import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 42px;
  background-color: ${(props) => {
    switch (props.type) {
      case "primary":
        return "#52A49A";
      case "secondary":
        return "#003366";
      case "accent":
        return "#E87B7B";
      default:
        return "gray";
    }
  }};
  border-radius: 10px;
  border: none;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`;

const PrimeryButton = ({ type, children, onClick }) => {
  console.log(type);
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimeryButton;
