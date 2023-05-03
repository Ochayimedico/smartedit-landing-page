import { useRef } from "react";
import emailIcon from "../../pics/email-icon.png";
import sendIcon from "../../pics/send-icon.png";

export default function Email() {
  const emailRef = useRef();
  console.log(emailRef);

  const sendEmailHandler = () => {
    const emailInput = emailRef.current.value;
    console.log(emailInput);
    if (!emailInput.includes("@")) {
      return console.log("Invalid Email Address");
    }
    // if (emailInput.trim() === "") {
    //   return;
    // }

    emailRef.current.value = "";
  };

  return (
    <>
      <form className=" flex flex-col mb-[1rem] ">
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
          <div className="flex flex-row border-solid justify-around border-2 border-[#004777] rounded-[0.25rem] items-center p-[0.5rem]">
            <img src={emailIcon} alt="email icon" />

            <input
              className="bg-transparent  w-[80%] outline-none"
              type="text"
              id="email"
              ref={emailRef}
              required
              placeholder="Input your email address here"
            ></input>
            <button
              className=" cursor-pointer "
              type="button"
              onClick={sendEmailHandler}
            >
              <img src={sendIcon} alt="email icon" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
