export default function SectionFour({ thingsToLearn }) {
  return (
    <>
      <ul>
        <h4 className="mt-[24px] text-[#004777] font-[700] ">
          BELOW ARE WHAT YOU WILL BE LEARNING UPON GETTING THE COURSE:
        </h4>
        {thingsToLearn.map((thingToLearn, id) => (
          <li key={id} className="relative flex flex-row my-[2rem]">
            <div className="rounded-[8px] flex justify-center items-center p-[0.25em] min-w-[40px] h-[40px] bg-white text-center font-[800] text-[1.2rem] text-[#004777]  absolute bottom-[50%] left-[-2.5%]">
              {thingToLearn.number}
            </div>
            <div className="border p-2 pl-[3rem] bg-[#004777] w-[100%] text-white  flex flex-row rounded-[8px]">
              <p className=" ">{thingToLearn.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
