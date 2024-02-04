import styled from "styled-components";
import DatePicker from "./datepicker/DatePicker";
import { useEffect } from "react";
import useSearchFilterStore from "../../storage/useSearchFilterStore";
import SearchField from "./searchfield/SearchFild";
import FilterButton from "./filterbox/FilterButton";
import FilterBox from "./filterbox/FilterBox";
import CheckBoxWrapper from "./filterbox/CheckBoxWrapper";
import GuestAmount from "./filterbox/GuestAmount";
import SearchButton from "./searchbutton/SearchButton";
import SearchResult from "./searchresult/SearchResult";
import useVenueStore from "../../storage/apiStore";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -50px;
  padding: 0 10px;
  border-radius: 10px;
`;

const SearchForm = styled.form`
  height: 100px;
  background-color: var(--color-searchbar-dm);
  max-width: 500px;
  width: 100%;
  box-shadow: var(--box-shadow-dm);
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`;

const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const WrapperRight = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const WrapperleftTop = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  .datePicker {
    text-align: center;
    height: 50px;
    border: none;
    outline: none;
    width: 100%;
    &:hover,
    &:focus {
      background-color: var(--color-searchbar-hover-dm);
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
`;

const SearchBar = () => {
  const searchFilterdVenues = useVenueStore(
    (state) => state.searchFilterdVenues,
  );
  const filterdVenues = useVenueStore((state) => state.filterdVenues);
  const setSearchFilter = useVenueStore(
    (state) => state.addSearchFilterdVenues,
  );
  const setResultOpen = useSearchFilterStore((state) => state.setResultOpen);
  const filter = useSearchFilterStore((state) => state.filter);
  const setFilterText = useSearchFilterStore((state) => state.setFilterText);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchFilter(filterdVenues);
    setFilterText();
    if (filter.resultOpen) {
      setResultOpen(false);
    }

    console.log(filterdVenues);
  }

  useEffect(() => {}, [searchFilterdVenues]);

  return (
    <Container>
      <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <WrapperLeft>
          <WrapperleftTop>
            <DatePicker />
            <FilterButton />
          </WrapperleftTop>
          <SearchField />
          <FilterBox>
            <CheckBoxWrapper />
            <GuestAmount />
          </FilterBox>
        </WrapperLeft>

        <WrapperRight>
          <SearchButton onSubmit={(e) => handleSubmit(e)} />
        </WrapperRight>
      </SearchForm>
      <SearchResult />
    </Container>
  );
};

export default SearchBar;
