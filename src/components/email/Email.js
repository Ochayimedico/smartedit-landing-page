import { useEffect, useRef, useState } from "react";
import { ref, push, set } from "firebase/database";
import "../../utils/firebase";
import { database } from "../../utils/firebase";
import emailIcon from "../../pics/email-icon.png";
import EmailSuccess from "./EmailSuccess";
import Loading from "./Loading";
// import sendIcon from "../../pics/send-icon.png";

export default function Email() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmailHandler = (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (emailInput.trim().length === 0) {
      setError("Please input your email address");
      setEnteredEmailIsValid(false);
      return;
    } else if (!emailRegex.test(emailInput.trim())) {
      setError("Invalid email address, please try again");
      setEnteredEmailIsValid(false);
      return;
    } else {
      setIsLoading(true);
      setError("");
      setEnteredEmailIsValid(true);
    }

    const emailListRef = ref(database, "emails");
    const newEmailRef = push(emailListRef);
    if (enteredEmailIsValid) {
      set(newEmailRef, {
        email: emailInput,
      })
        .then(() => {
          setEnteredEmailIsValid(true);
          setIsSubmit(true);
          setEmailSent(true);
          setIsLoading(false);
          emailRef.current.value = "";
        })
        .catch((error) => {
          setEmailSent(false);
          setIsLoading(false);
          setEnteredEmailIsValid(false);
          setError("Email could not be sent, please try again later");
        });
    }
  };
  const handleInputChange = () => {
    setError("");
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (emailSent) {
        setEmailSent(false);
      }
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [emailSent]);

  return (
    <>
      {enteredEmailIsValid && isSubmit && emailSent && <EmailSuccess />}
      <form className=" flex flex-col mb-[1rem] " onSubmit={sendEmailHandler}>
        <h2 className="font-bold text-[1.25rem] mb-[0.5rem]">
          Please Input Your Email Address Below After Payment to Receive the
          Course.
        </h2>
        <div>
          <label
            className="font-bold text-[#004777] text-[1.15rem] mb-[0.5rem] "
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="flex flex-row border-solid justify-between border-2 border-[#004777] rounded-[0.25rem] items-center">
            <div className="mx-[0.85rem]">
              <img src={emailIcon} alt="email icon" />
            </div>
            <input
              className="bg-transparent  w-[80%] outline-none"
              type="text"
              id="email"
              ref={emailRef}
              placeholder="Input your email address here"
              onChange={handleInputChange}
            ></input>
            <div className="font-bold cursor-pointer text-white bg-[#004777] py-[0.5rem] px-[0.75rem]">
              <button className="" type="submit">
                Send
                {/* <img src={sendIcon} alt="email icon" /> */}
              </button>
            </div>
          </div>
        </div>
        {isLoading && <Loading />}
        {error && <p className="text-[#b40e0e] text-[0.9rem]">{error}</p>}
      </form>
    </>
  );
}
