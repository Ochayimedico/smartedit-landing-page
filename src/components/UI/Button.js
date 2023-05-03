import styles from "./Button.module.css";
export default function Button() {
  return (
    <>
      <button
        className={` ${styles.button} rounded-[0.65rem] w-[12rem] h-[5rem] mt-[2rem] mb-[2rem] uppercase bg-[#004777] mx-auto text-[#fff] font-[700] hover:bg-[#f4ff5f] hover:text-black`}
        type="submit"
      >
        pay now
      </button>
    </>
  );
}
