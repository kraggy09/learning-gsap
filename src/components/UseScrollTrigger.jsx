import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import gsap from "gsap";

const UseScrollTrigger = () => {
  const style = {
    page: "min-h-screen",
    box: "h-[300px] w-[300px] bg-red-400 rounded-2xl ",
  };

  //   useGSAP(() => {
  //     gsap.from("#page1 .box", {
  //       scale: 0,
  //       opacity: 0,
  //       duration: 2,
  //     });
  //     gsap.from("#page2 .box", {
  //       scale: 0,
  //       opacity: 0,
  //       duration: 2,
  //       //scrollTrigger is a property that is being used to specify that our animation should work only when the trigger path is inside the viewport
  //       scrollTrigger: {
  //         trigger: "#page2 .box",
  //         scroller: "body",
  //         markers: true,
  //         start: "top 60%",
  //         end: "top 30%",
  //         //This one is a great porperty used to specify that the animation should work according to our scroll
  //         //scrub can be given values in bool or number (the number is used to give the smoothness of the scrolltrigger)
  //         //default value of scrub is false
  //         scrub: 2,
  //       },
  //     });
  //   });

  useGSAP(() => {
    gsap.to("#page2 h1", {
      transform: "translateX(-150%)",
      scrollTrigger: {
        //Tip: whenever using pin try to keep the trigger as the parent of the element as it will give great experience for the animation
        trigger: "#page2",
        markers: true,
        start: "top 0% ",
        end: "top -200%",
        scrub: 2,
        //This pin is used to pin the element to the screen unless and untill the complete animation of the element is not completed
        pin: true,
      },
    });
  });
  return (
    <div id="holder">
      <div id="page1" className={style.page + " bg-sky-300"}></div>
      <div id="page2" className={style.page + " bg-black"}>
        <h1 className="text-[35vw] uppercase ">Experiences</h1>
      </div>
      <div id="page3" className={style.page + " bg-sky-800"}></div>
    </div>
  );
};

export default UseScrollTrigger;
