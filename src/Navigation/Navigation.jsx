import React, { useEffect, useState } from "react";
import "./navigation.css";
import Skills from "../my-skills/Skills";
import Project from "../Projects/Project";

const Navigation = () => {
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setUserData(data.user); // Assuming data.user contains user data
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const highlightMenu = () => {
      const homeMenu = document.getElementById("home-page");
      const aboutMenu = document.getElementById("about-page");
      const servicesMenu = document.getElementById("services-page");
      const ProjectMenu = document.getElementById("Skills-page");
      const projectMenu = document.getElementById("project-page");
      const signup = document.getElementById("signup-page");
      let scrollPos = window.scrollY;

      if (scrollPos < 600) {
        setActiveSection("home");
      } else if (scrollPos < 1400) {
        setActiveSection("about");
      } else if (scrollPos < 2000) {
        setActiveSection("services");
      } else if (scrollPos < 3000) {
        setActiveSection("Skills");
      } else if (scrollPos < 4000) {
        setActiveSection("project");
      } else {
        setActiveSection("signup");
      }
    };

    window.addEventListener("scroll", highlightMenu);
    return () => {
      window.removeEventListener("scroll", highlightMenu);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          {userData && (
            <a href="#home" id="navbar__logo">
              Dymsite
            </a>
          )}
          <div
            className={`navbar__toggle ${mobileMenuActive ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`navbar__menu ${mobileMenuActive ? "active" : ""}`}
            id="navbar-menu"
          >
            <li className={`navbar__item ${activeSection === "home" ? "highlight" : ""}`}>
              <a href="#home" className="navbar__links" id="home-page">
                Home
              </a>
            </li>
            <li
              className={`navbar__item ${
                activeSection === "about" ? "highlight" : ""
              }`}
            >
              <a href="#about" className="navbar__links" id="about-page">
                About
              </a>
            </li>
            <li className={`navbar__item ${activeSection === "services" ? "highlight" : ""}`}>
              <a href="#services" className="navbar__links" id="services-page">
                Services
              </a>
            </li>
            <li className={`navbar__item ${activeSection === "Skills" ? "highlight" : ""}`}>
              <a href="#Skills" className="navbar__links" id="Skills-page">
                Skills
              </a>
            </li>
            <li className={`navbar__item ${activeSection === "project" ? "highlight" : ""}`}>
              <a href="#project" className="navbar__links" id="project-page">
                Projects
              </a>
            </li>
            <li className={`navbar__btn ${activeSection === "signup" ? "highlight" : ""}`}>
              <a href="#sign-up" className="button" id="signup-page">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hero" id="home">
        <div className="hero__container">
          {userData && userData.about && (
            <>
              <h1 className="hero__heading">{userData.about.title}</h1>
              <p className="hero__description">{userData.about.subTitle}</p>
            </>
          )}
          <button className="main__btn">
            <a href="#about">Explore</a>
          </button>
        </div>
      </div>
      <div className="main" id="about">
        <div className="main__container">
          <div className="main__img--container">
            <div className="main__img--card">
              <img src="sam.webp" className="image-style" alt="Sample" />
              {userData && userData.about && (
                <div className="overlay-text">{userData.about.name}</div>
              )}
              <i className="fas fa-layer-group"></i>
            </div>
          </div>
          <div className="main__content">
            {userData && userData.about && (
              <div>
                <h2>{userData.about.title}</h2>
                <p>{userData.about.subTitle}</p>
                <h3 className="h">{userData.about.description}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <h1>Our Services</h1>
        <div className="services__wrapper">
          <div className="services__card">
            <h2>Web services</h2>
            <p>Rect Js</p>
            <div className="services__btn">
              <a href="#home">
                <button>Get Started</button>
              </a>
            </div>
          </div>
          <div className="services__card">
            <h2>Digital Marketing</h2>
            <p>E-commerce</p>
            <div className="services__btn">
              <a href="#home">
                <button>Get Started</button>
              </a>
            </div>
          </div>
          <div className="services__card">
            <h2>Graphics Design</h2>
            <p>UI/UX</p>
            <div className="services__btn">
              <a href="#home">
                <button>Get Started</button>
              </a>
            </div>
          </div>
          <div className="services__card">
            <h2>Mobile Application</h2>
            <p>Andiroid Studio</p>
            <div className="services__btn">
              <a href="#home">
                <button>Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Project />
      <div className="main" id="sign-up">
        <div className="main__container">
          <div className="main__content">
            <h2>Sign Up Today</h2>
            <p>See what makes us different</p>
            <button className="main__btn">
              <a href="#">Sign Up</a>
            </button>
          </div>
          <div className="main__img--container">
            <div className="main__img--card" id="card-2">
              <img src="sam.webp" alt="Sample" />
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>About Us</h2>
              <a href="/sign__up">How it works</a> <a href="/">Testimonials</a>
              <a href="/">Careers</a>
              <a href="/">Terms of Service</a>
            </div>
            <div className="footer__link--items">
              <h2>Contact Us</h2>
              <a href="/">Contact</a> <a href="/">Support</a>
              <a href="/">Destinations</a>
            </div>
          </div>
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Videos</h2>
              <a href="/">Submit Video</a>
              <a href="/">Ambassadors</a>
              <a href="/">Agency</a>
            </div>
            <div className="footer__link--items">
              <h2>Social Media</h2>
              <a href="/">Instagram</a> <a href="/">Facebook</a>
              <a href="/">Youtube</a> <a href="/">Twitter</a>
            </div>
          </div>
        </div>
        <section className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <a href="/" id="footer__logo">
                Dymsite
              </a>
            </div>
            <p className="website__rights">© COLOR 2020. All rights reserved</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navigation;
