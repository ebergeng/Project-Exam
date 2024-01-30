import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useVenueStore from "../../storage/apiStore";
import { Link } from "react-router-dom";
import searchIcon from "../../../assets/icons/search.svg";
import settingIcon from "../../../assets/icons/setting.png";

const SearchBar2 = () => {
  const [filterisOpen, setFilterIsOpen] = useState(false);
  const venues = useVenueStore((state) => state.venues);
  const [filterdVenues, setFilterdVenues] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [searchTherm, setSearchTherm] = useState({
    when: [startDate, endDate],
    where: "",
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  });

  const filter = () => {
    const filteredArray = venues.filter(
      (venue) =>
        (searchTherm.wifi ? venue.meta.wifi === searchTherm.wifi : true) &&
        (searchTherm.parking
          ? venue.meta.parking === searchTherm.parking
          : true) &&
        (searchTherm.pets ? venue.meta.pets === searchTherm.pets : true) &&
        (searchTherm.breakfast
          ? venue.meta.breakfast === searchTherm.breakfast
          : true) &&
        (searchTherm.where.length > 0
          ? venue.location.city
              .toLowerCase()
              .includes(searchTherm.where.toLowerCase()) ||
            venue.location.country
              .toLowerCase()
              .includes(searchTherm.where.toLowerCase()) ||
            venue.location.continent
              .toLowerCase()
              .includes(searchTherm.where.toLowerCase()) ||
            venue.name.toLowerCase().includes(searchTherm.where.toLowerCase())
          : true),
    );

    const uniqueArray = filteredArray.filter(
      (obj, index, self) => index === self.findIndex((t) => t.id === obj.id),
    );

    return uniqueArray;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchTherm((prevSearch) => ({
      ...prevSearch,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    setFilterdVenues(filter());
  }, [searchTherm]);

  return (
    <Container>
      <SearchForm onSubmit={(e) => e.preventDefault()}>
        <WrapperLeft>
          <DateWrapper>
            <ReactDatePicker
              className="datePicker"
              placeholderText="From"
              selected={startDate ? startDate : null}
              onChange={(date) => setStartDate(date)}
            />
            <ReactDatePicker
              className="datePicker"
              placeholderText="To"
              selected={endDate ? endDate : null}
              onChange={(date) => setEndDate(date)}
            />
            <BtnWrapper isOpen={filterisOpen}>
              <FilterBtn
                isOpen={filterisOpen}
                onClick={() => setFilterIsOpen(!filterisOpen)}
              >
                <SettingIcon src={settingIcon} />
              </FilterBtn>
            </BtnWrapper>
          </DateWrapper>
          <SearchWrapper>
            <Input
              type="text"
              name="where"
              placeholder="Where wuld you like to go?"
              value={searchTherm.where}
              onChange={handleInputChange}
            />
          </SearchWrapper>
        </WrapperLeft>
        <WrapperRight>
          <SearchBtn>
            <SearchIcon src={searchIcon} />
          </SearchBtn>
        </WrapperRight>
      </SearchForm>
      {searchTherm.where.length > 0 && (
        <SerchResulte>
          <Ul>
            {filterdVenues.map((venue) => {
              return (
                <Link to={`venue/${venue.id}`} key={`${venue.id}`}>
                  <Li>
                    {venue.location.city}, {venue.location.country},{" "}
                    {venue.name}
                  </Li>
                </Link>
              );
            })}
          </Ul>
        </SerchResulte>
      )}
      <CheckBoxArea isOpen={filterisOpen}>
        <Label htmlFor="wifi">Wifi</Label>
        <CheckBox
          type="checkbox"
          checked={searchTherm.wifi}
          name="wifi"
          id="wifi"
          onChange={handleInputChange}
        />

        <Label htmlFor="parking">Parking</Label>
        <CheckBox
          type="checkbox"
          name="parking"
          id="parking"
          checked={searchTherm.parking}
          onChange={handleInputChange}
        />

        <Label htmlFor="breakfast">Breakfast</Label>
        <CheckBox
          type="checkbox"
          name="breakfast"
          id="breakfast"
          checked={searchTherm.breakfast}
          onChange={handleInputChange}
        />

        <Label htmlFor="pets">Pets Allowerd</Label>
        <CheckBox
          type="checkbox"
          name="pets"
          id="pets"
          checked={searchTherm.pets}
          onChange={handleInputChange}
        />
      </CheckBoxArea>
    </Container>
  );
};

export default SearchBar2;

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
  background-color: white;
  max-width: 500px;
  width: 100%;
  box-shadow: var(--box-shadow);
  display: flex;
  border-radius: 10px;
  overflow: hidden;
`;

const DateWrapper = styled.div`
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
      background-color: #e7e7e7;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }
`;

const Input = styled.input`
  height: 50px;
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  &:hover,
  &:focus {
    background-color: #e7e7e7;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const SearchWrapper = styled.div`
  border-top: 1px solid #bbbbbb;
  position: relative;
`;

const WrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-right: 1px solid #bbbbbb;
`;

const WrapperRight = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const CheckBoxArea = styled.div`
  position: absolute;
  top: -100px;
  width: 95%;
  padding: 10px;
  max-width: 500px;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  grid-template-columns: auto auto;
  align-items: center;
  font-size: 12px;
  overflow: hidden;
`;

const CheckBox = styled.input``;

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
const BtnWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? "#e7e7e7" : "white")};

  &:hover {
    background-color: #e7e7e7;
  }
`;

const FilterBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  height: 35%;
`;

const SettingIcon = styled.img`
  cursor: pointer;
  height: 25px;
`;

const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

const SerchResulte = styled.div`
  width: 95%;
  max-width: 500px;
  max-height: 40vh;
  position: absolute;
  background-color: var(--color-background);
  top: 105px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  overflow: auto;
`;

const Ul = styled.ul`
  width: 100%;
  border-radius: 5px;
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
