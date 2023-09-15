// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";
export default function Button() {
  return (
    <>
      <Link className="mx-auto " to="paystack-checkout-form">
        <button
          className={` ${styles.button} rounded-[0.65rem] w-[12rem] h-[5rem] mt-[2rem] mb-[2rem] uppercase bg-[#004777]  text-[#fff] font-[700] hover:bg-[#f4ff5f] hover:text-black`}
          type="submit"
        >
          pay now
        </button>
      </Link>
    </>
  );
}
