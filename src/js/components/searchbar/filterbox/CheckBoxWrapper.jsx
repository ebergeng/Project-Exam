import styled from "styled-components";
import ToggleSwitch2 from "./ToggleSwitch2";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";
import WifiIcon from "../../../ui/icons/wifi/WifiIcon";
import ParkingIcon from "../../../ui/icons/parking/ParkingIcon";
import BreakfastIcon from "../../../ui/icons/breakfast/BreakfastIcon";
import PetsIcon from "../../../ui/icons/pets/PetsIcon";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  gap: 5px;
  img {
    height: 16px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--color-forground);
  cursor: pointer;
`;

const CheckBoxWrapper = () => {
  const setChecked = useSearchFilterStore((state) => state.toggleFilterOption);
  const filter = useSearchFilterStore((state) => state.filter);
  return (
    <Wrapper>
      <ToggleSwitch2
        name={"wifi"}
        id={"wifi"}
        checked={filter.wifi}
        onChange={() => setChecked("wifi")}
      />
      <Label htmlFor="wifi">
        <WifiIcon
          color={filter.wifi ? "#003366" : "#8d8d8d"}
          width={"20"}
          height={"20"}
        />
      </Label>
      <Label ison={filter.wifi} htmlFor="wifi">
        Wifi
      </Label>

      <ToggleSwitch2
        name={"parking"}
        id={"parking"}
        checked={filter.parking}
        onChange={() => setChecked("parking")}
      />
      <Label htmlFor="parking">
        <ParkingIcon
          color={filter.parking ? "#003366" : "#8d8d8d"}
          width={"20"}
          height={"20"}
        />
      </Label>
      <Label ison={filter.parking} htmlFor="parking">
        Parking
      </Label>

      <ToggleSwitch2
        name={"breakfast"}
        id={"breakfast"}
        checked={filter.breakfast}
        onChange={() => setChecked("breakfast")}
      />
      <Label htmlFor="breakfast">
        <BreakfastIcon
          color={filter.breakfast ? "#003366" : "#8d8d8d"}
          width={"20"}
          height={"20"}
        />
      </Label>
      <Label ison={filter.breakfast} htmlFor="breakfast">
        Breakfast
      </Label>

      <ToggleSwitch2
        name={"pets"}
        id={"pets"}
        checked={filter.pets}
        onChange={() => setChecked("pets")}
      />
      <Label htmlFor="pets">
        <PetsIcon
          color={filter.pets ? "#003366" : "#8d8d8d"}
          width={"20"}
          height={"20"}
        />
      </Label>
      <Label ison={filter.pets} htmlFor="pets">
        Pets
      </Label>
    </Wrapper>
  );
};

export default CheckBoxWrapper;
