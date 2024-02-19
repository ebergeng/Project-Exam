import styled from "styled-components";
import useManagerStateStore from "../../../storage/modalstate/useManagerState";

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleWrapper = styled.div`
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 150px;

  :hover {
    cursor: pointer;
  }
`;

const ToggleLabel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;
const CustomerText = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
`;

const ManagerText = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
`;

const ToggleInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const ToggleSlider = styled.span`
  background-color: white;
  border-radius: 34px;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-top: 5px;
  &::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    background-color: var(--color-secondary);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.2s;
  }
`;

const Toggle = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  ${ToggleInput}:checked + ${ToggleSlider}::before {
    transform: translateX(26px);
  }
`;

const ToggleSwitch = () => {
  const { managerState, setManagerState } = useManagerStateStore();

  const toggleClick = () => {
    setManagerState(!managerState);
  };

  return (
    <ToggleContainer>
      <ToggleWrapper onClick={toggleClick}>
        <ToggleLabel>
          <CustomerText color={managerState ? "#C8C8C8" : "white"}>
            Customer
          </CustomerText>
          <ManagerText color={managerState ? "white" : "#C8C8C8"}>
            Manager
          </ManagerText>
        </ToggleLabel>

        <Toggle>
          <ToggleInput
            id="toggle"
            type="checkbox"
            checked={managerState}
            onChange={() => setManagerState(!managerState)}
          />
          <ToggleSlider />
        </Toggle>
      </ToggleWrapper>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
