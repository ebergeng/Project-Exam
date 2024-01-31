import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataPickerStyle.css";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";

const DatePicker = () => {
  const filter = useSearchFilterStore((state) => state.filter);
  const addStartDate = useSearchFilterStore((state) => state.setDateFrom);
  const addEndDate = useSearchFilterStore((state) => state.setDateTo);

  function handleStartDate(date) {
    addStartDate(date);
  }

  function handleEndDate(date) {
    addEndDate(date);
  }

  return (
    <>
      <ReactDatePicker
        className="datePicker"
        placeholderText="From"
        selected={filter.from ? filter.from : null}
        onChange={(date) => handleStartDate(date)}
      />
      <ReactDatePicker
        className="datePicker"
        placeholderText="To"
        selected={filter.to ? filter.to : null}
        onChange={(date) => handleEndDate(date)}
      />
    </>
  );
};

export default DatePicker;
