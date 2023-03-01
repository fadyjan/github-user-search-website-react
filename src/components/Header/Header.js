import React, { useState, useEffect,useContext } from "react";
import "./Header.css";
import SunIcon from "../../assets/icon-sun.svg";
import MoonIcon from "../../assets/icon-moon.svg";
import { ThemeContext } from "../../App"

const Header = () => {
  const themeObjectContext = useContext(ThemeContext);

  return (
    <div id="HeaderWrapper" className={themeObjectContext.theme+"HeaderWrapper"}>
      <div>
        <h1 id={"divFinder"+themeObjectContext.theme}>devfinder</h1>
      </div>
      <div id="LightwithIcon" onClick={()=>{themeObjectContext.toggleTheme()}}>
        {themeObjectContext.theme == "Dark" ? (
          <>
            <h1>Light</h1>
            <img src={SunIcon} alt=""></img>
          </>
        ) : (
          <>
            <h1>Moon</h1>
            <img src={MoonIcon} alt=""></img>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
