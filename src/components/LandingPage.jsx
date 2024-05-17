import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const LandingPage = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("nav h1,nav ul li", {
      opacity: 0,
      y: -30,
      delay: 0.4,
      duration: 0.5,
      stagger: 0.2,
    });
    tl.from("#hero-left h1,#hero-left p,#hero-left button", {
      opacity: 0,
      x: -200,
      duration: 0.5,
      stagger: 0.2,
    });

    tl.from(
      "#hero-right",
      {
        opacity: 0,
        x: 1000,
        duration: 0.6,
      },
      "-=1"
    );
  });

  return (
    <>
      <section id="section1" className=" relative w-screen">
        <nav className="flex p-6 px-16 items-center justify-between">
          <h1 className="text-2xl font-bold">
            <i className="inline-block rotate-45 ri-shining-2-fill"></i> WizardZ
          </h1>
          <ul className="flex items-center text-md font-[400] gap-x-6 justify-center">
            <li>About</li>
            <li>Service</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>
              <button className="py-[10px] px-[20px] rounded-lg  border border-black">
                Request a demo
              </button>
            </li>
          </ul>
        </nav>
        <main className="h-[80%] py-6 w-screen flex">
          <article
            id="hero-left"
            className="h-full w-[40%] flex flex-col items-start justify-center gap-y-6 px-16 "
          >
            <h1 className="text-[50px] line-clamp-6 font-bold">
              Navigating the digital landsape for success
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              a error aspernatur in? Minus aspernatur maiores nesciunt sapiente
              eligendi ipsum porro necessitatibus culpa nisi. Veritatis quidem
              velit eligendi quibusdam temporibus?
            </p>
            <button className="bg-black text-white rounded-lg px-3 py-2">
              Book a consultation
            </button>
          </article>
          <article id="hero-right" className="h-full w-[60%] =">
            <img
              className="h-full mx-auto"
              src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg"
              alt="abc"
            />
          </article>
        </main>
        <footer className="flex items-center min-h-16 justify-around">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/766/240/non_2x/amazon-logo-amazon-icon-transparent-free-png.png"
            className="h-16 "
            alt=""
          />
          <img
            src="https://logowik.com/content/uploads/images/dribbble.jpg"
            className="h-16 "
            alt=""
          />
          <img
            src="https://www.ndash.com/wp-content/uploads/2018/05/HubSpot-Logo-PNG.png"
            className="h-16 "
            alt=""
          />
          <img
            src="https://logowik.com/content/uploads/images/notion1411.jpg"
            className="h-16 "
            alt=""
          />
          <img
            src="https://loodibee.com/wp-content/uploads/Netflix-logo.png"
            className="h-16 "
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Zoom-Logo.png?20230209144005"
            className="h-16 "
            alt=""
          />
        </footer>
      </section>
      <section id="section2" className="px-16 h-screen">
        <div className="services flex items-center my-16  justify-start ">
          <h3 className="text-3xl mr-6 py-1 rounded-xl px-3 bg-lime-300">
            Services
          </h3>
          <p className="w-[45%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            consequatur itaque fugiat iste, cumque quod est praesentium
            asperiores at expedita.
          </p>
        </div>
        <div id="portfolio" className="grid gap-6 grid-cols-2">
          <div
            style={{ boxShadow: "0px 12px 0px black" }}
            className="h-[200px] w-[500px] rounded-lg border-2 border-black  flex items-start justify-between "
          >
            <div className="elem-left flex flex-col h-full justify-around gap-y-8 px-6">
              <h2 className="bg-lime-300 w-[80%] rounded-xl py-1 text-center">
                Search Engine Optimisation
              </h2>
              <h4>
                <i className="rounded-full bg-lime-300 p-2 mr-3 ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>
            <img
              className="w-[60%] h-full"
              src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg"
              alt=""
            />
          </div>
          <div
            style={{ boxShadow: "0px 12px 0px black" }}
            className="h-[200px] w-[500px] rounded-lg border-2 border-black  flex items-start justify-between "
          >
            <div className="elem-left flex flex-col h-full justify-around gap-y-8 px-6">
              <h2 className="bg-lime-300 w-[80%] rounded-xl py-1 text-center">
                Pay per click Advertising
              </h2>
              <h4>
                <i className="rounded-full bg-lime-300 p-2 mr-3 ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>
            <img
              className="w-[60%] h-full"
              src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg"
              alt=""
            />
          </div>

          <div
            style={{ boxShadow: "0px 12px 0px black" }}
            className="h-[200px] w-[500px] rounded-lg border-2 border-black  flex items-start justify-between "
          >
            <div className="elem-left flex flex-col h-full justify-around gap-y-8 px-6">
              <h2 className="bg-lime-300 w-[80%] rounded-xl py-1 text-center">
                Social Media marketing
              </h2>
              <h4>
                <i className="rounded-full bg-lime-300 p-2 mr-3 ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>
            <img
              className="w-[60%] h-full"
              src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg"
              alt=""
            />
          </div>
          <div
            style={{ boxShadow: "0px 12px 0px black" }}
            className="h-[200px] w-[500px] rounded-lg border-2 border-black  flex items-start justify-between "
          >
            <div className="elem-left flex flex-col h-full justify-around gap-y-8 px-6">
              <h2 className="bg-lime-300 w-[80%] rounded-xl py-1 text-center">
                Email marketing
              </h2>
              <h4>
                <i className="rounded-full bg-lime-300 p-2 mr-3 ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>
            <img
              className="w-[60%] h-full"
              src="https://www.unicuscreatives.in/media/graphics/homepage-megaphone.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
