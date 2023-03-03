import React, { useEffect, useState, useContext } from "react";
import "./LoadingGitHubInfo.css";
import TwitterIcon from "../../assets/icon-twitter.svg";
import CompanyIcon from "../../assets/icon-company.svg";
import LocationIcon from "../../assets/icon-location.svg";
import WebsiteIcon from "../../assets/icon-website.svg";
import ProfileImg from "../../assets/ProfileImg.jpg";
import { ThemeContext } from "../../App";

const LoadingGitHubInfo = () => {
  const themeObjectContext = useContext(ThemeContext);

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);


  useEffect(() => {


    const handleWindowResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);
  const MobileView = () => {
    return (
      <div id="MobileViewInfoWrapper">
        <div id="ImgWrapperMobView">
          <img id="UserProfileImg" alt=""></img>
        </div>

        <div id="UserNameWrapper" className={themeObjectContext.theme + "loading"}>
          <h1 className={"UserNameWrapper" + themeObjectContext.theme}>FakeName</h1>
          <a id="AnchorUserName">@FakeName</a>
          <label className={"UserNameLabel" + themeObjectContext.theme}>FAkeDAte</label>
        </div>
      </div>
    );
  };

  const DesktopView = () => {
    return (
      <>
        <div id="UserNameWrapper" className={themeObjectContext.theme +"loading"}>
          <h1 className={"UserNameWrapper" + themeObjectContext.theme}>
            FakeNAme
          </h1>

          <label className={"UserNameLabel" + themeObjectContext.theme}>
          FakeDAte
          </label>
        </div>
        <div id="GituserWrapper" className={themeObjectContext.theme +"loading"}><a >@FakeName</a></div>
      </>
    );
  };
  return (
    <div id="OuterInfoWrapper" className={themeObjectContext.theme} >
      <div id="InfoWrapper">
        {windowWidth > 600 ? (
          <div id="LeftPart">
            <img id="UserProfileImg" alt="" className={themeObjectContext.theme +"loading"}></img>
          </div>
        ) : (
          <div> </div>
        )}

        <div id="RightPart">
          {windowWidth < 600 ? MobileView() : DesktopView()}
          <div
            id="ParagrapheWrapper"
            className={themeObjectContext.theme + "Color " + themeObjectContext.theme +"loading"}
          >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr

          </div>

          <div
            id="grid-container-stats"
            className={"GridContainer" + themeObjectContext.theme +" "+ themeObjectContext.theme +"loading"}
          >
            <div class="grid-item-stats Headers">Repos</div>
            <div class="grid-item-stats Headers">Followers</div>
            <div class="grid-item-stats Headers">Following</div>

            <div class="grid-item-stats Outputs">1</div>
            <div class="grid-item-stats Outputs">1</div>
            <div class="grid-item-stats Outputs">1</div>
          </div>
          <div
            id="grid-container-socialAccs"
            className={themeObjectContext.theme + "SocialColor"}
          >
            <div class={"grid-item-socialAccs " + themeObjectContext.theme+"loading" }>
              <img  ></img>
              <label className="SocialAccsLabels">1111111111</label>
            </div>
            <div class={"grid-item-socialAccs " + themeObjectContext.theme+"loading" }>
              <img ></img>
              <label className="SocialAccsLabels">1111111111</label>
            </div>
            <div class={"grid-item-socialAccs " + themeObjectContext.theme+"loading" }>
              <img ></img>
              <a className="SocialAccsLabels">1111111111</a>
            </div>
            <div class={"grid-item-socialAccs " + themeObjectContext.theme+"loading" }>
              <img ></img>
              <label className="SocialAccsLabels">1111111111</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingGitHubInfo;
