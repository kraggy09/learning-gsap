import { useRef } from "react";
import { Draggable } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

const CustomCursor = () => {
  const cursor = useRef();
  const main = useRef();
  return (
    <div>
      <div
        id="cursor"
        ref={cursor}
        className="flex items-center text-[4px] z-10 justify-center text-center h-8 w-8 rounded-full absolute"
      ></div>
      <div
        ref={main}
        onMouseMove={(e) => {
          console.log(e.clientX);
          gsap.to(cursor.current, {
            x: e.clientX,
            y: e.clientY,
            ease: "back.out(1.7)",
            duration: 0.6,
          });
        }}
        className="h-screen flex items-center justify-center  bg-black"
      >
        <div
          onMouseEnter={() => {
            cursor.current.innerHTML = "View More";
            gsap.to(cursor.current, {
              scale: 2.5,
              backgroundColor: "#ffffff8a",
            });
          }}
          onMouseLeave={() => {
            cursor.current.innerHTML = "";

            gsap.to(cursor.current, { scale: 1, backgroundColor: "#fff" });
          }}
          className="image h-[70vh] bg-sky-300 w-[60vw] relative "
        >
          <div
            id="overlay"
            className="h-full w-full bg-transparent z-20 absolute"
          ></div>
          <img
            src="https://images.unsplash.com/photo-1715763306207-3c1aeaee9f6b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
