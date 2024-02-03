import styled from "styled-components";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";

const SearchWrapper = styled.div`
  border-top: 1px solid #5e5e5e;
  position: relative;
`;

const Input = styled.input`
  height: 50px;
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  background-color: var(--color-searchbar-dm);
  font-size: 1rem;
  color: var(--color-text-dm);
  &::placeholder {
    color: var(--color-text-toned-dm);
  }
  &:hover,
  &:focus {
    background-color: var(--color-searchbar-hover-dm);
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const SearchField = () => {
  const filter = useSearchFilterStore((state) => state.filter);
  const setSearchFilter = useSearchFilterStore((state) => state.setSearchWord);
  const setResultOpen = useSearchFilterStore((state) => state.setResultOpen);

  function handleChange(e) {
    setSearchFilter(e.target.value);
    if (!filter.resultOpen) {
      setResultOpen();
    } else if (filter.resultOpen && e.target.value.length < 1) {
      setResultOpen();
    }
  }

  return (
    <SearchWrapper>
      <Input
        type="text"
        name="where"
        placeholder="Where wuld you like to go?"
        value={filter.where}
        onChange={(e) => handleChange(e)}
      />
    </SearchWrapper>
  );
};

export default SearchField;
