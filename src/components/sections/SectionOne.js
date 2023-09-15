import phone from "../../pics/phone.jpg";

export default function SectionOne() {
  return (
    <>
      <img
        className="mx-auto mt-[8px] mb-[8px] w-[12rem] h-[12rem] rounded-full"
        src={phone}
        alt="phone"
      />

      <div>
        <p className="mb-[16px] font-[500]">
          Discover The Secrets To Making Amazing Video Edit With Just Your
          <span className="text-[#004777]">&nbsp;SMARTPHONE&nbsp;</span>That
          Will Easily Capture Your Customers Attention Online and How To Make
          Money From This Skill.
        </p>
      </div>
    </>
  );
}
