import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const AnimatedText = () => {
  const h1 = useRef();

  useGSAP(() => {
    gsap.from("h1 .a", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
    });
    gsap.from("h1 .b", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: -0.15,
    });
  });

  return (
    <h1 ref={h1} className="overflow-hidden text-[10vw]">
      <span className="inline-block a">K</span>
      <span className="inline-block a">a</span>
      <span className="inline-block a">i</span>
      <span className="inline-block a">f</span>
      <span className="inline-block b">.</span>
      <span className="inline-block b">d</span>
      <span className="inline-block b">e</span>
      <span className="inline-block b">v</span>
    </h1>
  );
};

export default AnimatedText;
