import styled from "styled-components";
import searchIcon from "../../../../assets/icons/search.svg";

const SearchBtn = styled.button`
  height: 70px;
  width: 70px;
  border-radius: 10px;
  background-color: var(--color-secondary);
  border: none;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  &:hover {
    background-color: var(--btn-hover);
  }

  &:active {
    background-color: var(--btn-hover);
    box-shadow: none;
  }
`;

const SearchIcon = styled.img`
  height: 35%;
`;

const SearchButton = () => {
  return (
    <SearchBtn>
      <SearchIcon src={searchIcon} alt="icon for search" />
    </SearchBtn>
  );
};

export default SearchButton;
