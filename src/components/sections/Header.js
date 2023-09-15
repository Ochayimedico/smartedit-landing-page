import logo from "../../pics/SE.svg";

export default function Header() {
  return (
    <div>
      <img className="w-[25%] mx-auto" src={logo} alt="logo" />
      <h2 className="mt-[8px] font-[kanit] font-[700] text-center text-[2rem] text-[#004777]">
        There is a Secret to Amazing Video Edit and I Want to Show You in a
        Jiffy
      </h2>
    </div>
  );
}
