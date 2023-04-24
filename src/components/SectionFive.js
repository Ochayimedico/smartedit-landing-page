import checkmark from "../pics/icons8-checkmark.svg";
import grafikThree from "../pics/grafik3.jpg";
import Button from "./UI/Button";

export default function SectionFive() {
  return (
    <>
      <ul className=" mt-[16px] text-left">
        <h2 className=" font-[800] text-[1.25rem] uppercase text-[#004777] ">
          Bonus:
        </h2>
        <li>
          <img className="inline" src={checkmark} alt="check" /> Certificate
          Upon Completion
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> One Month Free
          Mentorship
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> Upwork Ebook
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> Copywriting
          Books
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> How to Create
          Google Forms and Shorten Links
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> Content
          Calendar
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> Support Group
        </li>
      </ul>
      <div className="mt-[12px]">
        <span
          className="inline font-[600] 
       "
        >
          TOTAL WORTH OF THIS COURSE IS &nbsp;
          <span className="line-through">₦15,000</span>&nbsp;
        </span>
        but for the first
        <span className="text-[#004777] font-[600]">
          &nbsp;20 PEOPLE WILL GET ACCESS FOR
          <span className="font-[700] "> ₦4500</span>
        </span>
      </div>
      <img
        className="w-[90%] mx-auto mt-[16px] mb-[16px] rounded-[4px]"
        src={grafikThree}
        alt="third graphics"
      />
      <Button />
    </>
  );
}
