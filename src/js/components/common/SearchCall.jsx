import styled from "styled-components";
import useSearchModalStore from "../../storage/modalstate/searchModalstate";
import SearchBarModal from "../modal/SearchBarModal";
import useSearchFilterStore from "../../storage/useSearchFilterStore";
import SearchBar from "../searchbar/SearchBar";
import SearchIcon from "../../ui/icons/search/SearchIcon";
const SearchButton = styled.button`
  display: none;
`;

const SearchBtnLabel = styled.label`
  width: 50px;
  height: 50px;
  padding: 0;
  background-color: #52a49ab3;
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.1s ease-out;
  box-sizing: unset;
  &:hover {
    cursor: pointer;
    background-color: #52a49a;
    padding: 2px;
  }
`;

const SearchCall = () => {
  const searchState = useSearchModalStore((state) => state.searchState);
  const setSearchStateOn = useSearchModalStore(
    (state) => state.setSearchStateOn,
  );
  const setSearchStateOff = useSearchModalStore(
    (state) => state.setSearchStateOff,
  );
  const clearFilter = useSearchFilterStore((state) => state.resetFilter);
  const openModal = () => setSearchStateOn();
  const closeModal = () => setSearchStateOff();

  const callOnSearch = () => {
    clearFilter();
    openModal();
  };

  return (
    <>
      <SearchBtnLabel htmlFor="searchBtn">
        <SearchIcon width="28" />
      </SearchBtnLabel>
      <SearchButton
        type="submit"
        name="searchBtn"
        id="searchBtn"
        onClick={callOnSearch}
      />
      <SearchBarModal isOpen={searchState} onClose={closeModal}>
        <SearchBar />
      </SearchBarModal>
    </>
  );
};

export default SearchCall;
