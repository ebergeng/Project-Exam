import styled from "styled-components";

// Styled component for the toggle switch container
const ToggleSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
`;

// Styled component for the slider
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-foreground);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 1px;
    bottom: 2px;
    background-color: #a8a8a8;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  &:hover {
    background-color: #7c7c7c;
    &:before {
      background-color: white;
    }
  }
`;

// Styled component for the input checkbox
const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
    background-color: var(--color-secondary);
  }
`;

// ToggleSwitch component
const ToggleSwitch2 = ({ checked, onChange, name, id }) => {
  return (
    <ToggleSwitchContainer>
      <InputCheckbox
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch2;
