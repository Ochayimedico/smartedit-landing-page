import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";

import closeButton from "../../pics/close.png";
import { Link } from "react-router-dom";

export default function PaymentForm({ formValues, setFormValues }) {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const name = formValues.name;
  const email = formValues.email;
  const phone = formValues.phone;

  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;
  const amount = 450000;
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Submit",
    onSuccess: function (response) {
      navigate("/");
      console.log(response);
    },
  };

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });

    setFormErrors({ ...formErrors, [id]: undefined });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setIsSubmit(true);
    // setName("");
    // setEmail("");
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      return;
    }
  }, [formErrors, isSubmit]);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const fullnameRegex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
    const mobileNumberRegex =
      /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/;
    if (!name) {
      errors.name = "Please input your full name";
    } else if (!fullnameRegex.test(name)) {
      errors.name = "Please input your correct full name";
    }
    if (!email) {
      errors.email = "Please input your email";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please input your correct email";
    }
    if (!phone) {
      errors.phone = "Please input your mobile number";
    } else if (!mobileNumberRegex.test(phone)) {
      errors.phone = "Please input your correct mobile number";
    }
    return errors;
  };

  // // --- CSS dynamic classes for Input element---
  const nameInputClasses = formErrors.name
    ? " border-[#b40e0e] bg-[#fddddd] focus:border-[#b40e0e]"
    : "bg-[#e5edff] border-[#c6d7ff] focus:outline-none focus:border-blue-500 ";
  const emailInputClasses = formErrors.email
    ? " border-[#b40e0e] bg-[#fddddd] focus:border-[#b40e0e]"
    : "bg-[#e5edff] border-[#c6d7ff] focus:outline-none focus:border-blue-500 ";
  const phoneInputClasses = formErrors.email
    ? " border-[#b40e0e] bg-[#fddddd] focus:border-[#b40e0e]"
    : "bg-[#e5edff] border-[#c6d7ff] focus:outline-none focus:border-blue-500 ";

  // //  CSS Classes for error message
  const errorMessage = "text-[#b40e0e] text-[0.9rem]";

  return (
    <>
      <div className="w-[100%]  h-[40px] bg-[#004777] rounded-tr-[14px] rounded-tl-[14px] text-[#fff]  text-[1.25rem] py-2 px-[2rem] flex flex-row justify-between items-center tracking-[0.025em] ">
        <p>Payment Form </p>
        <Link to="/">
          <img
            className="w-[16px] h-[16px]"
            src={closeButton}
            alt="close form button"
          />
        </Link>
      </div>

      <div className="px-[2rem] py-[1.5] ">
        <div className="my-[0.75rem]  font-bold">Please fill out this form</div>
        <form onSubmit={submitHandler}>
          <div className="flex flex-col mb-[0.5rem]">
            <label htmlFor="name">Full name:</label>
            <input
              className={`${nameInputClasses} rounded-[0.25rem] my-[0.5rem] py-1 px-2 border border-solid focus:outline-none `}
              type="text"
              id="name"
              value={name}
              onChange={changeHandler}
            />

            <p className={errorMessage}>{formErrors.name}</p>
          </div>
          <div className="flex flex-col mb-[0.5rem]">
            <label htmlFor="email">Email address:</label>
            <input
              className={`${emailInputClasses} rounded-[0.25rem] my-[0.5rem] py-1 px-2 border border-solid focus:outline-none `}
              type="text"
              id="email"
              value={email}
              onChange={changeHandler}
            />
            <p className={errorMessage}>{formErrors.email}</p>
          </div>
          <div className="flex flex-col mb-[0.5rem]">
            <label htmlFor="phone">Mobile number:</label>
            <input
              className={`${phoneInputClasses} rounded-[0.25rem] my-[0.5rem] py-1 px-2 border border-solid focus:outline-none `}
              type="text"
              id="phone"
              value={phone}
              onChange={changeHandler}
            />
            <p className={errorMessage}>{formErrors.phone}</p>
          </div>

          <PaystackButton
            className="rounded-[0.35rem] w-[100%] h-[3rem] mt-[1.5rem] mb-[1.5rem] mx-auto text-[#fff]  w-[336px] text-[1.2rem] bg-[#004777]"
            {...componentProps}
          />
        </form>
      </div>
    </>
  );
}
