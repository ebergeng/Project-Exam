import styled from "styled-components";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";

const SearchWrapper = styled.div`
  border-top: 1px solid #bbbbbb;
  position: relative;
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

const SearchField = () => {
  const filter = useSearchFilterStore((state) => state.filter);
  const setSearchFilter = useSearchFilterStore((state) => state.setSearchWord);

  return (
    <SearchWrapper>
      <Input
        type="text"
        name="where"
        placeholder="Where wuld you like to go?"
        value={filter.where}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
    </SearchWrapper>
  );
};

export default SearchField;
