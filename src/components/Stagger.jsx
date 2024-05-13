import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Stagger = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.from("h1", {
        opacity: 0,
        duration: 1,
        y: 10,
        x: 1000,
        //stagger property is used to basically define the difference of time between each elemnt for the same transition
        //Important note: if giving negative value it will go on reverse loop else on normal loop
        stagger: 0.3,
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="flex bg-black text-3xl overflow-hidden text-white items-center justify-start min-h-screen flex-col"
    >
      <h1>Welcom</h1>
      <h1>to</h1>
      <h1>GSAP</h1>
    </div>
  );
};

export default Stagger;
