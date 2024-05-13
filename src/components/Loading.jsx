import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
const Loading = () => {
  const container = useRef();
  useGSAP(() => {
    gsap.to(".loader", {
      y: -30,
      stagger: -0.05,
      // used to give how many times the animation should work if -1 it is infinite
      repeat: -1,
      //yoyo is just like yoyo if it goes down it should come up which means returning to its inital state
      yoyo: true,
    });
  });
  return (
    <div
      ref={container}
      className="bg-black flex items-center justify-center h-screen gap-x-6 text-white"
    >
      <div className="loader bg-white rounded-full h-6 w-6"></div>
      <div className="loader bg-white rounded-full h-6 w-6"></div>
      <div className="loader bg-white rounded-full h-6 w-6"></div>
      <div className="loader bg-white rounded-full h-6 w-6"></div>
      <div className="loader bg-white rounded-full h-6 w-6"></div>
      <div className="loader bg-white rounded-full h-6 w-6"></div>
    </div>
  );
};

export default Loading;
