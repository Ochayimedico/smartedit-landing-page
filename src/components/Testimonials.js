import testimonial1 from "../pics/testimonial1.jpg";
import testimonial2 from "../pics/testimonial2.jpg";
import testimonial3 from "../pics/testimonial3.jpg";
import testimonial4 from "../pics/testimonial4.jpg";

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col space-y-2 mx-auto items-center">
        <img
          className="w-[90%] rounded-[4px]"
          src={testimonial1}
          alt="first testimonial"
        />
        <img
          className="w-[90%] rounded-[4px]"
          src={testimonial2}
          alt="second testimonial"
        />
        <img
          className="w-[90%] rounded-[4px]"
          src={testimonial3}
          alt="third testimonial"
        />
        <img
          className="w-[90%] rounded-[4px]"
          src={testimonial4}
          alt="fourth testimonial"
        />
      </div>
    </>
  );
}
