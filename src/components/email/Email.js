import { useRef } from "react";
import { ref, push, set } from "firebase/database";
import "../../utils/firebase";
import { database } from "../../utils/firebase";
import emailIcon from "../../pics/email-icon.png";
import sendIcon from "../../pics/send-icon.png";

export default function Email() {
  const emailRef = useRef();
  console.log(emailRef);

  const sendEmailHandler = (e) => {
    e.preventDefault();
    const emailInput = emailRef.current.value;
    console.log(emailInput);
    // if (emailInput.trim() === "") {
    //   return;
    // }
    if (!emailInput.includes("@")) {
      return alert("Invalid Email Address, does not contain @");
    }
    if (!emailInput.includes(".com")) {
      return console.log("Invalid Email Address, does not contain .com");
    }
    if (emailInput.length <= 11) {
      return console.log("email address too short");
    }
    const emailListRef = ref(database, "emails");
    const newEmailRef = push(emailListRef);
    set(newEmailRef, {
      email: emailInput,
    })
      .then(() => {
        <div className="w-[200px] h-[60px] bg-white z-[10] mt-[100%]">
          `${alert("email address sent successfully")}`;
        </div>;
      })
      .catch((error) => {
        alert("error, unsuccessful" + error);
      });
    emailRef.current.value = "";
  };

  return (
    <>
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
            <button className=" cursor-pointer " type="submit">
              <img src={sendIcon} alt="email icon" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
