import { useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";
import styled from "styled-components";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import HomeSection from "./components/home/HomeSection";
import WorkSection from "./components/home/WorkSection";
import Navbar from "./components/navbar/Navbar";
import Pathfinder from "./components/pathfinder/Pathfinder";
import { AnimatePresence } from "framer-motion";

function App() {

  const [path, setPath] = useState(window.location.pathname);
  const [tabCount] = useState(Pathfinder.routes.length);
  const [doRedirect, setRedirect] = useState(false);

  let num = Pathfinder.findNumByPath(path);

  const changePage = (action) => {
    if (action === "next") {
      if (num < Pathfinder.routes.length - 1) {
        num++;
        setPath(Pathfinder.findPathByNum(num));
        setRedirect(true);
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          document.querySelector("#previous-page").addEventListener("click", handleClickPrevious);
          document.querySelector("#next-page").addEventListener("click", handleClickNext);
        })
      }
    } else if (action === "previous") {
      if (num !== 0) {
        num--;
        setPath(Pathfinder.findPathByNum(num));
        setRedirect(true);
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          document.querySelector("#previous-page").addEventListener("click", handleClickPrevious);
          document.querySelector("#next-page").addEventListener("click", handleClickNext);
        })
      }
    } else if (action === "setPageByPath") {
      let pageNum = Pathfinder.findNumByPath();
      num = pageNum;
    }
  }

  const handleClickPrevious = (event) => {
    document.querySelector("#previous-page").removeEventListener("click", handleClickPrevious);
    changePage("previous");
  }
  const handleClickNext = (event) => {
    document.querySelector("#next-page").removeEventListener("click", handleClickNext);
    changePage("next");
  }

  // window.addEventListener("wheel", handleWheel);
  const location = useLocation();
  changePage("setPageByPath");

  return (
    <>
      <Navbar />

      {/* Navigation Buttons */}
      {num !== 0 && <NavButton id="previous-page" className="fas fa-chevron-left" onClick={handleClickPrevious}></NavButton>}
      {num !== tabCount - 1 && <NavButton id="next-page" className="fas fa-chevron-right" onClick={handleClickNext}></NavButton>}

      {/* Redirect if the asked page is different from the one on screen */}
      {doRedirect && <Redirect to={path} />}

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <HomeSection />
          </Route>
          <Route exact path="/works">
            <WorkSection />
          </Route>
          <Route exact path="/about">
            <AboutSection />
          </Route>
          <Route exact path="/contact">
            <ContactSection />
          </Route>
          <Redirect to="/" />
        </Switch>
      </AnimatePresence>

      <StyledFooter>
        <div id="page1" className={num === 0 ? "active" : ""}></div>
        <div id="page2" className={num === 1 ? "active" : ""}></div>
        <div id="page3" className={num === 2 ? "active" : ""}></div>
        <div id="page4" className={num === 3 ? "active" : ""}></div>
      </StyledFooter>
    </>
  );
}

const NavButton = styled.i`
  &#previous-page {
    left: 0;
  }
  &#next-page {
    right: 0;
  }
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.5s;
  :hover {
    background-color: rgba(0,0,0,0.2);
  }
  @media screen and (min-width: 480px) {
    padding: 2rem;
    font-size: 2rem;
  }
  `

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div {
      width: 5px;
      height: 5px;
      background-color: white;
      margin: 0.5rem;
      margin-bottom: 1rem;
      transition: height 0.5s;
      &.active {
          height: 15px;
          background-color: orange;
      }
  }
`

export default App;
