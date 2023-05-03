import checkmark from "../pics/icons8-checkmark.svg";

export default function SectiionFour({ thingsToLearn }) {
  return (
    <>
      <ul>
        <h4 className="mt-[24px] text-[#004777] font-[600]">
          BELOW ARE WHAT YOU WILL BE LEARNING UPON GETTING THE COURSE:
        </h4>
        {thingsToLearn.map((thingToLearn, id) => (
          <li key={id}>
            <img className="inline" src={checkmark} alt="check" />{" "}
            {thingToLearn.content}
          </li>
        ))}
      </ul>
    </>
  );
}
