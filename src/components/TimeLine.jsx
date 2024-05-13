import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TimeLine = () => {
  useGSAP(() => {
    //The timeline is used to basically work the animation in sync nothing else
    let tl = gsap.timeline();
    tl.from("h1", {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.5,
    });
    tl.from("li", {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.3,
    });
  });
  return (
    <nav className="flex items-center justify-between">
      <h1 className="px-12">Kaif.dev</h1>
      <ul className="flex gap-x-6 mr-36">
        <li>Home</li>

        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default TimeLine;
