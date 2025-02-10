import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const headline1 = {
    translateX: [0, 30],
    scale: [1, 1.45, "easeOutCubic"],
    opacity: [1, -1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl md:text-8xl text-white font-thin myname">
          Harshin Mansoor
        </div>
      </div>
    ),
  };
  const headline2 = {
    translateX: [0, -30],
    scale: [1, 1.45, "easeOutCubic"],
    opacity: [1, -1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl md:text-8xl text-white font-thin myprofile">
          Software Developer
        </div>
      </div>
    ),
  };
  const parallax1 = useParallax({
    rotate: [-70, 10],
    translateX: [250, 100],
  });
  const parallax2 = useParallax({
    rotate: [90, 20],
    translateX: [-130, 0],
  });
  const parallax3 = useParallax({
    rotate: [-90, 20],
    translateY: [-70, 250],
  });
  const parallax4 = useParallax({
    rotate: [90, -20],
    translateY: [70, -250],
  });
  const parallax5 = useParallax({
    rotate: [60, -20],
    translateY: [-70, 290],
  });
  return (
    <section className="homebody">
      <div className="header">PORTFOLIO © 2024</div>
      <div className="container-body">
        <div className="imageposition">
          <img src="/images/1.jpg" alt="" className="myimage" />
        </div>
        <ParallaxBanner
          layers={[headline1, headline2]}
          className="bg-container"
        />
      </div>
      <div className="myintro">
        <span className="myintro1 sparkle-text">
          Welcome to the digital domain of Harshin Mansoor, a visionary
          final-year BTech student mastering the art of MERN Stack development.
          With a passion for crafting innovative solutions, I fuse creativity
          with technology to bring ideas to life. Explore my portfolio and
          witness the future unfold.
        </span>
      </div>
      <div className="workidone">
        <span className="workdonetitle">Projects I Have Done</span>
        <div ref={parallax1.ref} className="workdonebubble1">
          Healthcare Platform
        </div>
        <Link
          to={"https://github.com/harshinJJ/Portfolio"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div ref={parallax2.ref} className="workdonebubble2">
            Personal Portfolio{" "}
          </div>
        </Link>
        <Link
          to={"https://github.com/harshinJJ/Blood-Bank-project"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div ref={parallax3.ref} className="workdonebubble3">
            Blood Donor Project{" "}
          </div>
        </Link>
        <Link
          to={"https://weather-searching-app.vercel.app/"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div ref={parallax4.ref} className="workdonebubble4">
            Weather Searching App{" "}
          </div>
        </Link>
        <Link
          to={"https://skill-swap-flax.vercel.app/"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div ref={parallax5.ref} className="workdonebubble5">
            Skill Sharing Website{" "}
          </div>
        </Link>
      </div>
      <div className="cvpart">
        
      </div>
    </section>
  );
};

export default Home;
