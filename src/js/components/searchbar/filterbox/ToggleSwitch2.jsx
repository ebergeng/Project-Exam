import styled from "styled-components";

const ToggleSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 14px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #7c7c7c;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 5px;
    bottom: 1px;
    background-color: #dbdbdb;
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

const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(18px);
    //background-color: var(--color-primary);
  }

  &:checked + ${Slider} {
    background-color: var(--color-primary);
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
