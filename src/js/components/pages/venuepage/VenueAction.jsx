import styled from "styled-components";
import WifiIcon from "../../../ui/icons/wifi/WifiIcon";
import ParkingIcon from "../../../ui/icons/parking/ParkingIcon";
import BreakfastIcon from "../../../ui/icons/breakfast/BreakfastIcon";
import PetsIcon from "../../../ui/icons/pets/PetsIcon";
import GuestIcon from "../../../ui/icons/Guests/GuestIcon";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import "./datePicker.css";
import { FormButton } from "../../../../styles/formStyles";
import RatingStar from "../../../../assets/icons/star.png";
import { bookVenue } from "../../../api/venues/bookVenue";
import useProfileStore from "../../../storage/profileStore";

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 10px;
  box-shadow: var(--box-shadow-dm);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    max-width: unset;
  }
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
  margin-top: 25px;
  margin-bottom: 35px;

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

const CTA = styled.form`
  display: flex;
  gap: 15px;
  position: relative;
  flex-direction: column;
  .date-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .guests {
    height: 35px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  p {
    margin: 0px;
  }
`;

const Rating = styled.div`
  color: var(--color-text);
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    margin: 0;
  }
`;

const schema = yup
  .object({
    dateFrom: yup.string().nullable().required("Select a date from"),
    dateTo: yup.string().nullable().required("Select a date to"),
    guests: yup
      .number()
      .required("How many are staying?")
      .min(1, "How many are staying?"),
  })
  .required();

const VenueAction = ({ venue }) => {
  const meta = Object.keys(venue.meta).filter((key) => venue.meta[key]);
  const token = useProfileStore((state) => state.profile.accessToken);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    data.venueId = venue.id;
    const send = await bookVenue(data, token);
    console.log(send);

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
        <Header>
          <h2>Facilities</h2>
          <Rating>
            <img src={RatingStar} alt="star to indikate rating" height="20" />{" "}
            {venue.rating}/5
          </Rating>
        </Header>

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
      <CTA onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.dateFrom?.message || errors.dateTo?.message || " "}</p>
        <div className="date-selector">
          <Controller
            control={control} // Dette kommer fra useForm()-hook.
            name="dateFrom"
            render={({ field }) => (
              <ReactDatePicker
                className="Date-picker"
                placeholderText="From"
                onChange={(date) =>
                  field.onChange(date ? date.toISOString() : null)
                }
                selected={field.value ? new Date(field.value) : null}
                isClearable
                minDate={new Date()}
                showDisabledMonthNavigation
                id="dateFrom"
                dateFormat="yyyy-MM-dd"
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
                onChange={(date) =>
                  field.onChange(date ? date.toISOString() : null)
                }
                selected={field.value ? new Date(field.value) : null}
                isClearable
                minDate={new Date()}
                showDisabledMonthNavigation
                id="dateTo"
                dateFormat="yyyy-MM-dd"
              />
            )}
          />
        </div>
        <select
          className="guests"
          id="guests"
          name="guests"
          {...register("guests")}
        >
          <option value="" selected disabled hidden>
            Guests
          </option>
          {[...Array(venue.maxGuests)].map((_, i) => (
            <option key={`guest${i}`} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {!localStorage.getItem("accessToken") ? (
          <FormButton type="submit" value="Book" />
        ) : (
          "Please log in"
        )}
      </CTA>
    </Wrapper>
  );
};

export default VenueAction;
