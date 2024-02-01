import styled from "styled-components";
import WifiIcon from "../../ui/icons/wifi/WifiIcon";
import ParkingIcon from "../../ui/icons/parking/ParkingIcon";
import BreakfastIcon from "../../ui/icons/breakfast/BreakfastIcon";
import PetsIcon from "../../ui/icons/pets/PetsIcon";
import GuestIcon from "../../ui/icons/Guests/GuestIcon";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import "./datePicker.css";

const Wrapper = styled.div`
  width: 30%;
  height: 50vh;
  background-color: var(--color-primary);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  padding: 20px;
`;

const Facilities = styled.div`
  h2 {
    color: white;
    margin-top: 0;
    font-size: 1.4rem;
  }
  ul {
    padding: 0;
    margin: 2px;
  }
  li {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
    color: white;
    font-size: 1.1rem;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 1.3rem;
  }
`;

const PriceText = styled.div`
  color: white;
`;

const Price = styled.div`
  color: var(--color-secondary);
  font-weight: bold;
`;

const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const schima = yup
  .object({
    dateFrom: yup.string().required("Select a date from"),
    dateTo: yup.string().required("Select a date to"),
    guests: yup
      .number()
      .required("How many are staying? ")
      .min(1, "How many are staying?"),
  })
  .required();

const VenueAction = ({ venue }) => {
  const meta = Object.keys(venue.meta).filter((key) => venue.meta[key]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schima),
  });

  async function onSubmit(data) {
    console.log(data);
    //setIsLoading(true);
    //setIsLoading(false);
  }

  const getIcon = (name) => {
    switch (name) {
      case "wifi":
        return <WifiIcon color={"white"} width={"30"} height={"30"} />;
      case "parking":
        return <ParkingIcon color={"white"} width={"30"} height={"30"} />;
      case "breakfast":
        return <BreakfastIcon color={"white"} width={"30"} height={"30"} />;
      case "pets":
        return <PetsIcon color={"white"} width={"30"} height={"30"} />;
    }
  };
  return (
    <Wrapper>
      <Facilities>
        <h2>Facilities</h2>
        <ul>
          {meta.map((item) => (
            <li key={item}>
              <div>{getIcon(item)}</div>
              <div>{item.charAt(0).toLocaleUpperCase() + item.slice(1)}</div>
            </li>
          ))}
          <li>
            <GuestIcon color={["#E87B7B", "#52A49A"]} />
            {venue.maxGuests} Beds
          </li>
        </ul>
      </Facilities>
      <PriceWrapper>
        <PriceText>Price</PriceText>
        <Price>{venue.price}</Price>
      </PriceWrapper>
      <CTA>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control} // Dette kommer fra useForm()-hook.
            name="dateFrom"
            render={({ field }) => (
              <ReactDatePicker
                className="Date-picker"
                placeholderText="From"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                isClearable
                minDate={new Date()}
                showDisabledMonthNavigation
                id="dateFrom"
              />
            )}
          />
          <Controller
            control={control} // Dette kommer fra useForm()-hook.
            name="dateTo"
            render={({ field }) => (
              <ReactDatePicker
                className="Date-picker"
                placeholderText="To"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                isClearable
                minDate={new Date()}
                showDisabledMonthNavigation
                id="dateTo"
              />
            )}
          />

          <input type="number" {...register("guests")} />
          <input type="submit" />
        </form>
        <p>{errors.dateFrom?.message || errors.dateTo?.message}</p>
      </CTA>
    </Wrapper>
  );
};

export default VenueAction;
