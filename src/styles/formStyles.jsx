import styled from "styled-components";

export const Input = styled.input`
  height: 35px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 25px;
  overflow-y: auto;
  margin-bottom: 10px;
  text-align: start;
`;

export const Label = styled.label`
  color: ${(props) =>
    props.color === "white" ? "white" : "var(--color-text)"};
  font-size: 18px;
  font-weight: 600;

  &.white-space {
    margin-top: 40px;
  }
`;

export const FormButton = styled.input`
  width: 100%;
  background-color: var(--color-secondary);
  border: none;
  height: 35px;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  color: ${(props) =>
    props.color === "white" ? "white" : "var(--color-text)"};

  &:hover {
    cursor: pointer;
    background-color: #f06a6a;
  }
`;
