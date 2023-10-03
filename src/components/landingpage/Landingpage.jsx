import React, { useEffect } from "react";
import Header from "../header/Header";
import "./landingpage.css";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import Displaycards from "../displaycards/Displaycards";
import Recentposts from "../recentposts/Recentposts";
import Categories from "../categories/Categories";
const Landingpage = () => {
  const handleScroll = () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY>50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <article>
    
    <div className="landing-top">
      <aside className="page-start-full">
        <div className="page-start-1">
          <div className="start-logo">
            <MdEmail />
            <p>example@gmail.com</p>
          </div>
          <div className="start-logo">
            <BiSolidPhone />
            <p>+0123456789</p>
          </div>
        </div>
        <div className="page-start-2">
          <BiLogoFacebook />
          <AiOutlineTwitter />
          <AiOutlineGooglePlus />
          <BiLogoLinkedin />
        </div>
      </aside>
      <hr color="black" width="74%" className="hr-line" />
      <Header />
      <h1 className="landing-top-heading ">Blog Left Sidebar</h1>
    </div>
    <div className="landing-bottom">
     <Displaycards/>
    </div>
    <div className="recentpostsmove">
    <Recentposts/>
    </div>
    </article>
  );
};

export default Landingpage;
