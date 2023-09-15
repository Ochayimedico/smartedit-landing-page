import SectionSeven from "./SectionSeven";

export default function Faqs() {
  const frequentlyAskedQuestions = [
    {
      id: 1,
      question: "When does the course begin?",
      answer:
        "Immediately you register. Once you register, you gain access to the course videos instantly.",
    },
    {
      id: 2,
      question: "What platform will I access the course?",
      answer:
        "This is a FULLY RECORDED practical demonstration course online. It is not a LIVE or physical class or one you hold with others. It has been recorded for you to watch each practical demonstration video whenever you want and practice at your own time and pace. It has a mentorship/support group for questions to be answered and ideas to be shared.",
    },
    {
      id: 3,
      question: "What is the total duration of the course?",
      answer:
        "The course has 15+ short video tutorials in it, making up about 2-3 hrs total watch time. You can however watch at your pace for longer if you wish, and of course practice as you watch. It is a lifetime access",
    },
    {
      id: 4,
      question: "How long will I have access to this course?",
      answer:
        "You have access for a full year. So feel free to watch and practice at your time and pace. If you want more time, you can request at no extra cost.",
    },
    {
      id: 5,
      question: "What type of phone device will I need (iPhone or Android)?",
      answer: "Any smartphone (whether Android or iPhone) can be used.",
    },
    {
      id: 6,
      question: "Will I be required to pay for the apps you will show me?",
      answer:
        "No. I have paid for you, You have free access to the pro version of the apps I will show you.",
    },
    {
      id: 7,
      question: "Will I need a laptop?",
      answer:
        "No. This is purely a smartphone video class and everything will be taught using a smartphone. However, if you would like to use your laptop to view the class while you have your smartphone in hand to explore what is being taught, it is also fine.",
    },
  ];
  return (
    <>
      <SectionSeven faqs={frequentlyAskedQuestions} />
      <div className="font-bold">
        <p className="mb-[4px] ">
          Offer to expire soon! Grab this offer for just $10 ($20) today. Start
          creating/editing stunning videos for your business and say goodbye to
          chasing your customers away with scrappy videos.
        </p>
        <p className="mb-[4px]">
          Also, start making a lot of money creating videos for other
          businesses.
        </p>
      </div>
    </>
  );
}
