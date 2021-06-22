import React, { useEffect, useState } from "react";
import IndividualFormCard from "../IndividualFormCard";
import RadioInput from "../RadioInput";
import NumberInput from "../NumberInput";
import SelectInput from "../SelectInput";
import RangeInput from "../RangeInput";
import TextInput from "../TextInput";
import PhoneNumberInput from "../PhoneNumberInput";
import {
  validatePhoneNumber,
  validateEmail,
  validateNumberInput,
} from "../../utils/validations";
import { label } from "../../utils/label";
import { selectOptions } from "../../utils/selectOptions";
import { useGlobalContext } from "../../contextAPI/globalContext";

const Form = () => {
  const [form, setForm] = useState({
    homeOwner: "yes",
    zipCode: "",
    electricProvider: "City of Plattsburgh",
    monthlyElectricBill: 400,
    roofArea: "Full Sun",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({
    zipCode: false,
    email: false,
    name: false,
    lastName: false,
    address: false,
    phoneNumber: false,
  });
  const {
    count,
    setCount,
    setLoading,
    loading,
    isSubmitting,
    setIsSubmitting,
    setRedirect,
  } = useGlobalContext();

  const handleValidationAndIncrement = (e) => {
    setError(false);
    if (count === 2) {
      setLoading(true);
    }
    if (count === 6) {
      setLoading(true);
    }
    if (count === 2 && form.zipCode.length !== 5) {
      setError({ ...error, zipCode: true });
      return;
    }
    if (count === 6 && !validateEmail(form.email)) {
      setError({ ...error, email: true });
      return;
    }
    if (count === 7 && form.firstName.length < 3) {
      setError({ ...error, firstName: true });
      return;
    }
    if (count === 8 && form.lastName.length < 3) {
      setError({ ...error, lastName: true });
      return;
    }
    if (count === 9 && form.address.length < 3) {
      setError({ ...error, address: true });
      return;
    }
    if (count === 10 && !validatePhoneNumber(form.phoneNumber)) {
      setError({ ...error, phoneNumber: true });
      return;
    } else if (count === 10 && validatePhoneNumber(form.phoneNumber)) {
      handleSubmit(e);
    }
    handleIncrement();
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleChange = (e) => {
    if (validateNumberInput(e)) {
      e.target.value = "";
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(form);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    isSubmitting &&
      setTimeout(() => {
        setIsSubmitting(false);
        setRedirect(true);
        document.title = "Thank You | Smart Solar Savings";
      }, 1500);
    return () => clearTimeout();
  }, [isSubmitting]);

  return (
    <div className={`${!isSubmitting ? "container form-wrapper" : "hidden"}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <IndividualFormCard
          question="Are you a homeowner?"
          id={1}
          shouldDisplayBasedOnNumber={count}
        >
          <RadioInput
            isChecked={true}
            value="Yes"
            id="yes"
            handleChange={handleChange}
            name="homeOwner"
          />
          <RadioInput
            value="No"
            id="no"
            handleChange={handleChange}
            name="homeOwner"
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="What is your zip code?"
          id={2}
          shouldDisplayBasedOnNumber={count}
        >
          <NumberInput
            placeholder="Enter your ZIP Code"
            handleChange={handleChange}
            errorMessage={error.zipCode && "Please enter a valid US Zip Code."}
            length={5}
            name="zipCode"
            value={form.zipCode}
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="who's your electric utilty provider?"
          id={3}
          shouldDisplayBasedOnNumber={count}
        >
          <SelectInput
            providers={selectOptions}
            handleChange={handleChange}
            name="electricProvider"
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="How much is your average monthly electric bill?"
          id={4}
          shouldDisplayBasedOnNumber={count}
        >
          <RangeInput
            value={form.monthlyElectricBill}
            name="monthlyElectricBill"
            handleChange={handleChange}
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="How sunny is your roof area?"
          id={5}
          shouldDisplayBasedOnNumber={count}
        >
          <RadioInput
            isChecked={true}
            value="Full Sun"
            id="Full Sun"
            handleChange={handleChange}
            name="roofArea"
          />
          <RadioInput
            value="Partial Sun"
            id="Partial Sun"
            handleChange={handleChange}
            name="roofArea"
          />
          <RadioInput
            value="A Lot of Shade"
            id="A Lot of Shade"
            handleChange={handleChange}
            name="roofArea"
          />
          <RadioInput
            value="Uncertain"
            id="Uncertain"
            handleChange={handleChange}
            name="roofArea"
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="What email address should your results be sent to?"
          id={6}
          shouldDisplayBasedOnNumber={count}
        >
          <TextInput
            type="email"
            name="email"
            placeholder="Email Address"
            handleChange={handleChange}
            errorMessage={error.email && "Please enter a real email address."}
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="What's your first name?"
          id={7}
          shouldDisplayBasedOnNumber={count}
        >
          <TextInput
            name="firstName"
            placeholder="First Name"
            handleChange={handleChange}
            errorMessage={error.firstName && "Please enter your first name."}
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="What's your last name?"
          id={8}
          shouldDisplayBasedOnNumber={count}
        >
          <TextInput
            name="lastName"
            placeholder="Last Name"
            handleChange={handleChange}
            errorMessage={error.lastName && "Please enter your last name."}
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="Where do you want the solar panels installed (street address)?"
          id={9}
          shouldDisplayBasedOnNumber={count}
        >
          <TextInput
            name="address"
            placeholder="Address"
            handleChange={handleChange}
            errorMessage={
              error.address &&
              "Please provide where you'd like the panels installed."
            }
          />
        </IndividualFormCard>
        <IndividualFormCard
          question="What phone number can we reach you at?"
          id={10}
          shouldDisplayBasedOnNumber={count}
        >
          <PhoneNumberInput
            type="tel"
            name="phoneNumber"
            length={14}
            placeholder="(000) 000-0000"
            handleChange={handleChange}
            label={label}
            errorMessage={
              error.phoneNumber && "Please enter a valid US phone number."
            }
          />
        </IndividualFormCard>
        <div
          className="btn-container"
          style={{
            justifyContent: `${count === 1 ? "flex-end" : "space-between"}`,
          }}
        >
          <button
            className="btn btn-back"
            type="button"
            onClick={handleDecrement}
            style={{
              display: `${count === 1 ? "none" : "block"}`,
            }}
          >
            Back
          </button>
          <button
            className="btn btn-next"
            onClick={(e) => handleValidationAndIncrement(e)}
            type={"button"}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
