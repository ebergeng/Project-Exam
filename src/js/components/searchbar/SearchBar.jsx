import styled from "styled-components";
import SearchHeader from "./SearchHeader";
import { useEffect, useState } from "react";
import useVenueStore from "../../storage/apiStore";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const venues = useVenueStore((state) => state.venues);
  const addFilterVenues = useVenueStore((state) => state.addFilterVenues);
  const filterdVenues = useVenueStore((state) => state.filterdVenues);
  const setDispayFilterdVenues = useVenueStore(
    (state) => state.setDispayFilterdVenues,
  );

  const [filter, setFilter] = useState({
    wifi: false,
    parking: false,
    pets: false,
    breakfast: false,
    searchField: "",
    country: "",
    continent: "",
  });

  function handleCheckBox(e) {
    const { name, checked } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
  }

  function handleSearchfield(e) {
    const { value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      searchField: value,
    }));
  }

  function handleSelector(e) {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  }

  useEffect(() => {
    const filteredArray = venues.filter(
      (item) =>
        (filter.wifi ? item.meta.wifi === filter.wifi : true) &&
        (filter.parking ? item.meta.parking === filter.parking : true) &&
        (filter.pets ? item.meta.pets === filter.pets : true) &&
        (filter.breakfast ? item.meta.breakfast === filter.breakfast : true) &&
        (filter.country.length > 0
          ? item.location.country.toLowerCase() === filter.country.toLowerCase()
          : true) &&
        (filter.continent.length > 0
          ? item.location.continent.toLowerCase() ===
            filter.continent.toLowerCase()
          : true) &&
        (filter.searchField.length > 0
          ? item.location.city
              .toLowerCase()
              .includes(filter.searchField.toLowerCase())
          : true),
    );

    const uniqueArray = filteredArray.filter(
      (obj, index, self) => index === self.findIndex((t) => t.id === obj.id),
    );

    if (uniqueArray.length === venues.length) {
      addFilterVenues([]);
    } else {
      addFilterVenues(uniqueArray);
    }
  }, [filter]);

  function handleSubmit(e) {
    e.preventDefault();
    setDispayFilterdVenues();
  }

  return (
    <Container>
      <Wrapper>
        <SearchHeader />
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormWrappOne>
            <CheckBoxWrapper>
              <div>
                <label htmlFor="wifi">Wifi</label>
                <input
                  type="checkbox"
                  id="wifi"
                  name="wifi"
                  checked={filter.wifi}
                  onChange={handleCheckBox}
                />
              </div>

              <div>
                <label htmlFor="parking">Parking</label>
                <input
                  type="checkbox"
                  id="parking"
                  name="parking"
                  checked={filter.parking}
                  onChange={handleCheckBox}
                />
              </div>

              <div>
                <label htmlFor="breakfast">Breakfast</label>
                <input
                  type="checkbox"
                  id="breakfast"
                  name="breakfast"
                  checked={filter.breakfast}
                  onChange={handleCheckBox}
                />
              </div>

              <div>
                <label htmlFor="pets">Petts allowed</label>
                <input
                  type="checkbox"
                  id="pets"
                  name="pets"
                  checked={filter.pets}
                  onChange={handleCheckBox}
                />
              </div>
            </CheckBoxWrapper>
            <Searchbar
              type="search"
              placeholder="Search..."
              onChange={handleSearchfield}
            />
            {filter.searchField.length > 0 && (
              <Ul>
                {filterdVenues.map((venue, index) => {
                  return (
                    <Link
                      to={`/${venue.id}`}
                      key={`${venue.id}_search${index}`}
                    >
                      <Li>
                        {venue.location.city}, {venue.name}
                      </Li>
                    </Link>
                  );
                })}
              </Ul>
            )}
          </FormWrappOne>

          <FormWrappTwo>
            <SelectorWrapper>
              <Selector
                name="country"
                id="country"
                value={filter.country}
                onChange={handleSelector}
              >
                <option value="">Country</option>
                <option value="norway">Norway</option>
                <option value="sweden">Sweeden</option>
                <option value="denmark">DanmaK</option>
              </Selector>

              <Selector
                name="continent"
                id="continent"
                value={filter.continent}
                onChange={handleSelector}
              >
                <option value="">Continent</option>
                <option value="Europe">Europe</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
              </Selector>
            </SelectorWrapper>
            <FormButton type="submit" value="Search" />
          </FormWrappTwo>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  width: 100%;
  background-color: var(--color-background);
  height: 180px;
  max-width: 800px;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: -90px;
  transform: translate(-50%);

  @media (max-width: 650px) {
    top: 0;
    height: auto;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  gap: 25px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Searchbar = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid var(--color-foreground);
  font-size: 18px;
`;

const CheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const FormWrappOne = styled.div`
  position: relative;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const FormWrappTwo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const FormButton = styled.input`
  width: 100%;
  background-color: #52a49a;
  border: none;
  height: 35px;
  font-size: 16px;
  font-weight: bolder;
  border-radius: 5px;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #48988e;
  }
`;

const Selector = styled.select`
  height: 35px;
  border-radius: 5px;
  border: 1px solid var(--color-foreground);
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
`;

const Ul = styled.ul`
  position: absolute;
  background-color: var(--color-background);
  width: 100%;
  top: 75px;
  border: 2px solid var(--color-foreground);
  border-radius: 5px;
  height: 25vh;
  overflow: auto;
  padding: 0;
  @media (max-width: 650px) {
    display: none;
  }
`;

const Li = styled.li`
  display: block;
  color: var(--color-foreground);
  font-size: 18px;
  padding: 10px;
  &:hover {
    background-color: white;
  }
`;
