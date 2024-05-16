import gsap from "gsap";

const SVGExample = () => {
  const handleMouseMove = (e) => {
    let y = e.clientY - 200;
    let x = e.clientX;
    console.log(y);
    let newPath = `M 10 100 Q ${x} ${y} 990 100`;

    gsap.to("svg path", {
      attr: {
        d: newPath,
      },
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    let path = `M 10 100 Q 500 100 990 100`;
    gsap.to("svg path", {
      attr: {
        d: path,
      },
      duration: 0.5,
      ease: "elastic.out(1.5,0.3)",
    });
  };

  return (
    <div className="h-screen border-2 border-black flex items-center justify-center">
      <svg
        className="border border-black rounded-xl"
        width="1000"
        height="200"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <path
          d={`M 10 100 Q 500 100 990 100`}
          fill="transparent"
          stroke="black"
        ></path>
      </svg>
    </div>
  );
};

export default SVGExample;
