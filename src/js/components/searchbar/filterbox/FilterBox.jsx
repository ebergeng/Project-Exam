import styled from "styled-components";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";
import { useEffect } from "react";

const FilterContainer = styled.div`
  position: absolute;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  top: -95px;
  width: 94%;
  padding: 10px 20px;
  max-width: 500px;
  display: ${({ isopen }) => (isopen === "true" ? "grid" : "none")};
  grid-template-columns: 2fr 1fr;
  background-color: var(--color-filterbox);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  overflow: hidden;

  @media (max-width: 480px) {
    top: -148px;
    grid-template-columns: auto;
    justify-content: center;
  }
`;

const FilterBox = ({ children }) => {
  const filterIsOpen = useSearchFilterStore(
    (state) => state.filter.filterIsOpen,
  );

  useEffect(() => {}, [filterIsOpen]);

  return (
    <FilterContainer isopen={filterIsOpen.toString()}>
      {children}
    </FilterContainer>
  );
};

export default FilterBox;
