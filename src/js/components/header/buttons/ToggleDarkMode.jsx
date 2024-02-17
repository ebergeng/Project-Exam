import styled from "styled-components";
import { useEffect } from "react";
import useDarkModeStore from "../../../storage/darkmodeStor";

const ToggleContainer = styled.div`
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 10px;
  z-index: 999;
  transform: translate(-50%);
  @media (max-width: 650px) {
    top: 65px;
  }
`;

const ToggleWrapper = styled.div`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  :hover {
    cursor: pointer;
  }
`;

const ToggleLabel = styled.div`
  color: #c4c4c4;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    color: #ffffff;
  }
`;

const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const ToggleSlider = styled.span`
  background-color: var(--color-searchbar);
  border-radius: 34px;
  position: relative;
  display: inline-block;
  width: 35px;
  height: 16px;
  margin-top: 5px;
  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    background-color: var(--color-text);
    height: 12px;
    width: 12px;
    border-radius: 50%;
    transition: 0.2s;
  }
`;

const Toggle = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  ${ToggleInput}:checked + ${ToggleSlider}::before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(18px);
  }
`;

const ToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useDarkModeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--color-background",
      darkMode ? "#333333" : "#F4F4F4",
    );
    root.style.setProperty(
      "--color-searchbar",
      darkMode ? "#393939" : "#FFFFFF",
    );
    root.style.setProperty(
      "--color-searchbar-hover",
      darkMode ? "#888888" : "#cecece",
    );
    root.style.setProperty(
      "--color-searchbar-result-bg",
      darkMode ? "#232323d3" : "#e8e8e8d3",
    );
    root.style.setProperty("--color-text", darkMode ? "#F4F4F4" : "#333333 ");
    root.style.setProperty(
      "--color-text-toned",
      darkMode ? "#F4F4F4" : "#333333 ",
    );
    root.style.setProperty(
      "--color-filterbox",
      darkMode ? "#444444a9" : "#ffffffb9 ",
    );
    root.style.setProperty(
      "--color-background-body",
      darkMode ? "#333333" : "#cfcfcf",
    );
    root.style.setProperty(
      "--color-secondary-background",
      darkMode ? "#464646" : "#F4F4F4",
    );
    root.style.setProperty(
      "--color-secondary-background-hover",
      darkMode ? "#3d3d3d" : "#e0dddd",
    );
  });

  const toggleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ToggleContainer>
      <ToggleWrapper onClick={toggleClick}>
        <ToggleLabel>Dark mode</ToggleLabel>

        <Toggle>
          <ToggleInput
            id="toggle"
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <ToggleSlider />
        </Toggle>
      </ToggleWrapper>
    </ToggleContainer>
  );
};

export default ToggleDarkMode;
