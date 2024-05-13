import { useGSAP } from "@gsap/react";

import gsap from "gsap";

const Base = () => {
  useGSAP(() => {
    gsap.to();
  });
  return (
    <div className="box1">
      <div className="box1 bg-red-300 h-48"></div>
      <div className="box2 bg-sky-300 h-48"></div>
    </div>
  );
};

export default Base;
