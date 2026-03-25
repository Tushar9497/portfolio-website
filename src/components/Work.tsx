import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Personal Muneem",
    category: "MERN Stack",
    stack: "React, Node.js, MongoDB, Charts",
    description:
      "Built a responsive finance manager with transaction tracking, reduced errors, and real-time financial visualization.",
    image: "/images/personal-finance-tracker.png",
  },
  {
    title: "StockRadar",
    category: "Machine Learning",
    stack: "Python, NLP, Streamlit, Sentiment Analysis",
    description:
      "Created a stock forecasting app using historical market data and news sentiment with a Buy-Hold recommender.",
    image: "/images/stock-price-predictor.png",
  },
  {
    title: "Airline Booking System",
    category: "Object-Oriented Programming",
    stack: "C++, OOP, Classes, Encapsulation",
    description:
      "Developed a booking system that manages flights, schedules, and ticket generation using core OOP principles.",
    image: "/images/airline-booking-system.png",
  },
];

const Work = () => {
  useLayoutEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!container || boxes.length === 0) {
        return;
      }

      const firstBox = boxes[0] as HTMLElement;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = firstBox.getBoundingClientRect();
      const parentWidth = firstBox.parentElement?.getBoundingClientRect().width ?? 0;
      const padding = parseInt(window.getComputedStyle(firstBox).padding, 10) / 2;

      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.title}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.stack}</p>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
