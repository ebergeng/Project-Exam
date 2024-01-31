import styled from "styled-components";
import settingIcon from "../../../../assets/icons/setting.png";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";

const BtnWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ isopen }) =>
    isopen === "true" ? "#e7e7e7" : "white"};

  &:hover {
    background-color: #e7e7e7;
  }
`;

const FilterBtn = styled.div`
  background-color: transparent;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SettingIcon = styled.img`
  cursor: pointer;
  height: 25px;
`;

const FilterButton = () => {
  const filterIsOpen = useSearchFilterStore(
    (state) => state.filter.filterIsOpen,
  );
  const setFilterIsOpen = useSearchFilterStore((state) => state.setOpenFilter);

  return (
    <BtnWrapper isopen={filterIsOpen.toString()}>
      <FilterBtn onClick={() => setFilterIsOpen(!filterIsOpen)}>
        <SettingIcon src={settingIcon} alt="icon for filter" />
      </FilterBtn>
    </BtnWrapper>
  );
};

export default FilterButton;
