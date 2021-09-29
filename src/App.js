import { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import styled from "styled-components";
import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import HomeSection from "./components/home/HomeSection";
import WorkSection from "./components/home/WorkSection";
import Navbar from "./components/navbar/Navbar";
import Pathfinder from "./components/pathfinder/Pathfinder";

function App() {

  const [path, setPath] = useState(window.location.pathname);
  const [tabCount] = useState(Pathfinder.routes.length);

  let num = Pathfinder.findNumByPath(path);

  const changePage = (action) => {
    if (action === "next") {
      if (num < Pathfinder.routes.length - 1) {
        num++;
        setPath(Pathfinder.findPathByNum(num));
      } else {
        window.addEventListener("wheel", handleWheel);
        document.addEventListener("DOMContentLoaded", () => {
          document.querySelector("#previous-page").addEventListener("click", handleClickPrevious);
          document.querySelector("#next-page").addEventListener("click", handleClickNext);
        })
      }
    } else if (action === "previous") {
      if (num !== 0) {
        num--;
        setPath(Pathfinder.findPathByNum(num));
      } else {
        window.addEventListener("wheel", handleWheel);
        document.addEventListener("DOMContentLoaded", () => {
          document.querySelector("#previous-page").addEventListener("click", handleClickPrevious);
          document.querySelector("#next-page").addEventListener("click", handleClickNext);
        })
      }
    }
  }

  const handleWheel = (event) => {
    window.removeEventListener("wheel", handleWheel);
    if (event.deltaY > 0) {
      changePage("next");
    }
    if (event.deltaY < 0) {
      changePage("previous");
    }
  }
  const handleClickPrevious = (event) => {
    console.log("okay")
    document.querySelector("#previous-page").removeEventListener("click", handleClickPrevious);
    changePage("previous");
  }
  const handleClickNext = (event) => {
    console.log("okay")
    document.querySelector("#next-page").removeEventListener("click", handleClickNext);
    changePage("next");
  }

  window.addEventListener("wheel", handleWheel);


  return (
    <>
      <Navbar />

      {/* Navigation Buttons */}
      {num !== 0 && <Previous id="previous-page" className="fas fa-chevron-left" onClick={handleClickPrevious}></Previous>}
      {num !== tabCount - 1 && <Next id="next-page" className="fas fa-chevron-right" onClick={handleClickNext}></Next>}

      {/* Redirect if the asked page is different from the one on screen */}
      {path !== window.location.pathname && <Redirect to={path} />}

      <Switch>
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

      <StyledFooter>
        <div id="page1" className={num === 0 ? "active" : ""}></div>
        <div id="page2" className={num === 1 ? "active" : ""}></div>
        <div id="page3" className={num === 2 ? "active" : ""}></div>
        <div id="page4" className={num === 3 ? "active" : ""}></div>
      </StyledFooter>
    </>
  );
}

const Previous = styled.i`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  padding: 10px;
  `
const Next = styled.i`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  padding: 10px;
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
