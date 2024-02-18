import { Input, Label, FormButton } from "../../../../styles/formStyles";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DisplayMessage from "../../common/DisplayMessage";
import { useState } from "react";
import ToggleSwitch2 from "../../searchbar/filterbox/ToggleSwitch2";
import WifiIcon from "../../../ui/icons/wifi/WifiIcon";
import ParkingIcon from "../../../ui/icons/parking/ParkingIcon";
import BreakfastIcon from "../../../ui/icons/breakfast/BreakfastIcon";
import PetsIcon from "../../../ui/icons/pets/PetsIcon";
import styled from "styled-components";
import { createVenue } from "../../../api/venues/createVenue";
import useProfileStore from "../../../storage/profileStore";
import useCreateVenueStore from "../../../storage/modalstate/createVenueModalState";
import { updateVenue } from "../../../api/venues/updateVenue";

const WrapperLeft = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  h3 {
    margin: 0;
    color: var(--color-text);
  }
`;

const WrapperRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-width: 200px;
  max-width: 350px;
  min-height: 350px;
  text-align: start;
  h3 {
    margin: 0;
    color: var(--color-text);
    text-align: start;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  justify-content: center;
  gap: 10px;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    width: 100%;
    gap: 10px;
  }
`;

const PriceAndGuestWrapper = styled.div`
  display: flex;
  gap: 10px;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const ToggleButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  gap: 5px;
  img {
    height: 16px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const IconLabel = styled.label`
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  gap: 10px;
  padding: 5px;
  flex-direction: row-reverse;
  color: var(--color-text);
`;

const schima = yup
  .object({
    name: yup
      .string()
      .required("Venue Name is required")
      .min(2, "Must be atleast 2 characters long"),

    media: yup
      .array()
      .of(yup.string().url("Must be a valid URL").notRequired()),

    location: yup.object({
      contry: yup.string(),
      //.required("Pleace select a country"),
      continent: yup.string(),
      //.required("Pleace select a continent"),
      zip: yup.string(),
      //.required("Pleace select a valid zip"),
      city: yup.string(),
      //.required("Pleace select a valid city"),
      address: yup.string(),
      //.required("Pleace select a valid adress"),
    }),

    maxGuests: yup
      .number()
      .typeError("Please enter the number of guests.")
      .required("How many guests can the venue room")
      .min(1, "Minimum 1 guest")
      .max(100, "Maximum 100 guests"),
    price: yup.number().typeError("Price.").required(),

    meta: yup.object().shape({
      wifi: yup.boolean().default(false),
      parking: yup.boolean().default(false),
      breakfast: yup.boolean().default(false),
      pets: yup.boolean().default(false),
    }),

    description: yup
      .string()
      .required("please enter a discription")
      .min(3)
      .max(500),
  })
  .required();

const CreateVenueForm = () => {
  const [error, setError] = useState("");
  const reRender = useProfileStore((state) => state.updateProfileStore);
  const token = useProfileStore((state) => state.profile.accessToken);
  const venue = useCreateVenueStore((state) => state.updateVenue);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schima),
    defaultValues: {
      name: venue ? venue.name : "",
      description: venue ? venue.description : "",
      location: {
        country: venue ? venue.location.country : "",
        continent: venue ? venue.location.continent : "",
        zip: venue ? venue.location.zip : "",
        city: venue ? venue.location.city : "",
        address: venue ? venue.location.address : "",
      },
      media: venue ? venue.media : [],
      maxGuests: venue ? venue.maxGuests : 1,
      price: venue ? venue.price : null,
      meta: {
        wifi: venue ? venue.meta.wifi : false,
        parking: venue ? venue.meta.parking : false,
        breakfast: venue ? venue.meta.breakfast : false,
        pets: venue ? venue.meta.pets : false,
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "media",
  });

  async function onSubmit(data) {
    if (venue) {
      const response = await updateVenue(data, venue.id, token);
      reRender();
      if (!response) {
        setError("An error has occured");
      }
    } else {
      const response = await createVenue(data, token);
      reRender();
      if (!response) {
        setError("An error has occured");
      }
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <WrapperLeft>
          <Label htmlFor="name">
            {errors.venueName?.message ? (
              <DisplayMessage type={"alert"}>
                {errors.venueName?.message}
              </DisplayMessage>
            ) : (
              "Venue Name"
            )}
          </Label>
          <Input type="name" id="name" name="name" {...register("name")} />

          <LocationContainer>
            <h3>Location</h3>
            <div>
              <Input
                type="country"
                id="country"
                name="country"
                placeholder="country"
                {...register("location.country")}
              />
              <Input
                type="continent"
                id="continent"
                name="continent"
                placeholder="Continent"
                {...register("location.continent")}
              />
            </div>
            <div>
              <Input
                type="zip"
                id="zip"
                name="zip"
                placeholder="Zip"
                {...register("location.zip")}
              />
              <Input
                type="city"
                id="city"
                name="city"
                placeholder="City"
                {...register("location.city")}
              />
            </div>
            <Input
              type="address"
              id="address"
              name="address"
              placeholder="Address"
              {...register("location.address")}
            />
          </LocationContainer>

          {fields.map((field, index) => (
            <div key={field.id}>
              {errors.media && errors.media[index] && (
                <DisplayMessage type="alert">
                  {errors.media[index].message || "Invalid URL"}
                </DisplayMessage>
              )}
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
              <Input
                type="url"
                {...register(`media.${index}`)}
                placeholder="Media URL"
              />
            </div>
          ))}
          <button type="button" onClick={() => append("")}>
            Add Media
          </button>
          <PriceAndGuestWrapper>
            <div>
              <Label htmlFor="guests">
                {errors.maxGuests?.message ? (
                  <DisplayMessage type={"alert"}>
                    {errors.maxGuests?.message}
                  </DisplayMessage>
                ) : (
                  "Guests"
                )}
              </Label>
              <Input
                type="number"
                id="guests"
                name="guests"
                {...register("maxGuests")}
              />
            </div>
            <div>
              <Label htmlFor="price">
                {errors.price?.message ? (
                  <DisplayMessage type={"alert"}>
                    {errors.price?.message}
                  </DisplayMessage>
                ) : (
                  "Price"
                )}
              </Label>
              <Input
                type="number"
                id="price"
                name="price"
                {...register("price")}
              />
            </div>
          </PriceAndGuestWrapper>
        </WrapperLeft>

        <WrapperRight>
          <div>
            <h3>Facilities</h3>
            <ToggleButtons>
              <Controller
                control={control}
                name="meta.wifi"
                render={({ field }) => (
                  <>
                    <ToggleSwitch2
                      id={"wifi"}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                    <IconLabel htmlFor="wifi">
                      wifi{" "}
                      <WifiIcon
                        width="22"
                        color={field.value ? "#52A49A" : "#8d8d8d"}
                      />
                    </IconLabel>
                  </>
                )}
              />
              <Controller
                control={control}
                name="meta.parking"
                render={({ field }) => (
                  <>
                    <ToggleSwitch2
                      id={"parking"}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                    <IconLabel htmlFor="parking">
                      Parking{" "}
                      <ParkingIcon
                        width="22"
                        color={field.value ? "#52A49A" : "#8d8d8d"}
                      />
                    </IconLabel>
                  </>
                )}
              />
              <Controller
                control={control}
                name="meta.breakfast"
                render={({ field }) => (
                  <>
                    <ToggleSwitch2
                      id={"breakfast"}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                    <IconLabel htmlFor="breakfast">
                      Breakfast{" "}
                      <BreakfastIcon
                        width="22"
                        color={field.value ? "#52A49A" : "#8d8d8d"}
                      />
                    </IconLabel>
                  </>
                )}
              />
              <Controller
                control={control}
                name="meta.pets"
                render={({ field }) => (
                  <>
                    <ToggleSwitch2
                      id={"pets"}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                    <IconLabel htmlFor="pets">
                      pets{" "}
                      <PetsIcon
                        width="22"
                        color={field.value ? "#52A49A" : "#8d8d8d"}
                      />
                    </IconLabel>
                  </>
                )}
              />
            </ToggleButtons>
          </div>

          <Label htmlFor="description">
            {errors.description?.message ? (
              <DisplayMessage type={"alert"}>
                {errors.description?.message}
              </DisplayMessage>
            ) : (
              "Description"
            )}
          </Label>
          <TextArea
            type="text-area"
            id="description"
            name="description"
            {...register("description")}
          />
        </WrapperRight>
        <DisplayMessage type={"alert"}>{error}</DisplayMessage>
        <FormButton value={venue ? "Update" : "Create"} type="submit" />
      </Form>
      {error.length > 0 ? (
        <DisplayMessage type={"alert"}>{error[0].message}</DisplayMessage>
      ) : null}
    </>
  );
};

export default CreateVenueForm;
