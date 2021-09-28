import { useEffect, useState } from "react";
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

  let num = Pathfinder.findNumByPath(path);

  useEffect(() => {
    const handleWheel = (event) => {
      window.removeEventListener("wheel", handleWheel);
      if (event.deltaY > 0) {
        if (num < Pathfinder.routes.length - 1) {
          num++;
          setPath(Pathfinder.findPathByNum(num));
        } else {
          window.addEventListener("wheel", handleWheel);
        }
      }
      if (event.deltaY < 0) {
        if (num !== 0) {
          num--;
          setPath(Pathfinder.findPathByNum(num));
        } else {
          window.addEventListener("wheel", handleWheel);
        }
      }
    }
    window.addEventListener("wheel", handleWheel);
  })


  return (
    <>
      <Navbar />

      {
        path !== window.location.pathname &&
        <Redirect to={path} />
      }

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
