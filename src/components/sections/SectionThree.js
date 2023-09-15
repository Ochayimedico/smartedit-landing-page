import grafikTwo from "../../pics/grafik2.jpg";
import checkmark from "../../pics/icons8-checkmark.svg";
import thumbsup from "../../pics/thumbsup.gif";

export default function SectionThree() {
  return (
    <>
      <ul className="font-[500]  mt-[24px]">
        <h4 className="text-[#004777] font-[700]">
          I HAVE THE SOLUTION FOR YOU IF……
        </h4>
        <li>
          <img className="inline" src={checkmark} alt="check" />
          You struggle with different challenges when it comes to making
          engaging videos. Some even struggle with getting in front of a camera.
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> You don't know
          how to make better videos to promote your business/products.
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> You cannot make
          videos because of their wall or background hence you put off that
          beautiful idea without sharing it.
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> You wish to
          setup a Youtube channel but don't know or have little idea how to go
          about it because they don't have basic video editing knowledge.
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> You are a
          business person and you want to be creating stunning videos for
          yourself and your brand If you want to make money as a video editor.
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> You are a
          student, business person, or a sit at home mom and wants to learn a
          digital skill.
        </li>
        <li>
          <img className="inline" src={checkmark} alt="check" /> You have low
          budget at the moment
        </li>
        <div className="flex flex-row mt-[12px] mb-[12px]">
          <p className=" font-[900] uppercase">
            I will make you a video editor pro in 14 days&nbsp;
            <img
              className="inline w-[36px]"
              src={thumbsup}
              alt="thumbs up smiley"
            />
          </p>
        </div>

        <p>
          If any of the above statement sounds like you, then you don't want to
          miss this video editing course for anything.
        </p>
        <p>
          I want you to know that
          <span className="text-[#004777]">
            &nbsp;CONTENT CREATION INDUSTRY&nbsp;
          </span>
          is the fastest growing industry in the Digital Economy, as Tiktok,
          Facebook and some social media companies now pay people for original
          contents created, their videos and the engagement.
        </p>
        <p>
          You Don't Need A Laptop or High End Pc to Create stunning videos as I
          have the Perfect Solution for you.
        </p>
        <h4 className="mt-[8px] text-[#004777] font-[700]">
          IN THIS SMARTPHONE VIDEO EDITING COURSE
        </h4>
        <p className="capitalize font-[600]">I will show you</p>
        <ul>
          <li>
            <img className="inline" src={checkmark} alt="check" /> How to create
            stunning videos
          </li>
          <li>
            <img className="inline" src={checkmark} alt="check" /> How to edit
            them
          </li>
          <li>
            <img className="inline" src={checkmark} alt="check" /> Ways to
            monetise the skills
          </li>
        </ul>
        <p className="mt-[8px]">
          This is a
          <span className="font-[600] text-[#004777]">
            &nbsp;COMPLETE VIDEO COURSE&nbsp;
          </span>
          as it aims to catapult you from a total newbie to creating
          professional videos for yourself and your brands.
        </p>
      </ul>
      <img
        className="w-[90%] mx-auto mt-[16px] mb-[16px] rounded-[4px]"
        src={grafikTwo}
        alt="second graphics"
      />
    </>
  );
}
