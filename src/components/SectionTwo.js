import grafikOne from "../pics/grafik.jpg";
export default function SectionTwo() {
  return (
    <>
      <div className="font-[500]">
        <p className=" text-[#004777] font-[600]">
          AND THAT IS WHY I WANT EVERYONE TO ACQUIRE THIS SKILL.
        </p>
        <p>
          As an individual, imagine the space you will create for yourself in
          the global market if you know how to create and edit videos like a
          pro. That is what this
          <span className="text-[#004777]">
            &nbsp;FULL PACK SMARTPHONE VIDEO COURSE&nbsp;
          </span>
          is designed to help you achieve in a short time.
        </p>
        <img
          className="w-[90%] mx-auto mt-[16px] mb-[16px] rounded-[4px]"
          src={grafikOne}
          alt="first graphics"
        />
      </div>
    </>
  );
}
