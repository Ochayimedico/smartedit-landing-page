import { useState } from "react";
import collapse from "../pics/collapse-button1.png";
import expand from "../pics/expand-button1.png";

export default function SectionSeven({ faqs }) {
  const [isOpen, setIsOpen] = useState(false);

  const collapsibleHandler = (id) => {
    if (isOpen === id) {
      setIsOpen(false);
    } else {
      setIsOpen(id);
    }
  };
  return (
    <>
      <h2 className="mx-auto capitalize text-[1.25rem] font-[800] text-[#004777] ">
        frequently asked questions
      </h2>
      <ul>
        {faqs.map((faq, id) => (
          <li
            key={id}
            className="mt-[8px] flex flex-col space-between mb-[8px]"
          >
            <div
              className={`flex flex-row space-between bg-[#004777]  p-[0.5rem] rounded-[0.25rem] bg-gradient-to-r hover:from-[#004777] hover:to-[#0078c9] cursor-pointer ${
                isOpen === id ? "rounded-b-[0]" : "rounded-[0.25rem]"
              }`}
              onClick={() => collapsibleHandler(id)}
            >
              <img
                className="mr-[8px] max-h-[22px] max-w-[22px]"
                src={`${isOpen === id ? collapse : expand}`}
                alt="collapse button"
              />
              <h2 className="text-[#f4ff5f] font-[700] ">{faq.question}</h2>
            </div>
            <p
              className={`p-[1rem] border-[1.5px] border-[#004777] border-t-0 border-solid rounded-b-[0.25rem] ${
                isOpen === id ? "visible" : "hidden"
              }`}
            >
              {faq.answer}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
