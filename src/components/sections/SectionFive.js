import grafikThree from "../../pics/grafik3.jpg";
import Button from "../UI/Button";

export default function SectionFive({ bonus }) {
  return (
    <>
      <h2 className=" font-[800] mt-[1rem] text-[1.25rem] uppercase text-[#004777] ">
        Bonus:
      </h2>
      <ul className=" mt-[0.5rem] text-left">
        {bonus.map((bonus, id) => (
          <li
            key={id}
            className="my-[0.85rem] max-w-[100%] h-[6rem] flex flex-col bg-white rounded-[8px] shadow-lg"
          >
            <div
              className={`h-[1rem] w-[100%] rounded-t-[8px] bg-gradient-to-r from-[#004777] to-[#f4ff5f]`}
            ></div>
            <div className="flex flex-row items-center  w-[100%] mt-[1rem] ">
              <div className="min-w-[2.5rem] h-[2.5rem] flex items-center text-white font-bold rounded-full bg-[#004777] mx-[1.5rem] ">
                <p className="m-auto "> {bonus.number} </p>
              </div>
              <h3 className="font-bold"> {bonus.content}</h3>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-[12px]">
        <span
          className="inline font-[600] 
       "
        >
          TOTAL WORTH OF THIS COURSE IS &nbsp;
          <span className="line-through">₦10,000</span>&nbsp;
        </span>
        but for the first
        <span className="text-[#004777] font-[600]">
          &nbsp;20 PEOPLE WILL GET ACCESS FOR
          <span className="font-[700] "> ₦4500</span>
        </span>
      </div>
      <img
        className="w-[90%] mx-auto mt-[1rem] mb-[1rem] rounded-[4px]"
        src={grafikThree}
        alt="third graphics"
      />
      <Button />
    </>
  );
}
