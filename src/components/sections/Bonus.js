import SectiionFive from "./SectionFive";
export default function Bonus() {
  const bonus = [
    { id: 1, number: "1", content: "Certificate Upon Completion" },
    { id: 2, number: "2", content: "One Month Free Mentorship" },
    { id: 3, number: "3", content: "Upwork Ebook" },
    { id: 4, number: "4", content: "Copywriting Books" },
    {
      id: 5,
      number: "5",
      content: "How to Create Google Forms and Shorten Links",
    },
    { id: 6, number: "6", content: "Content Calendar" },
    { id: 7, number: "7", content: "Support Groups" },
  ];
  return (
    <>
      <SectiionFive bonus={bonus} />
    </>
  );
}
