import React, { useEffect, useState, useContext } from "react";
import "./GitHubInfo.css";
import TwitterIcon from "../../assets/icon-twitter.svg";
import CompanyIcon from "../../assets/icon-company.svg";
import LocationIcon from "../../assets/icon-location.svg";
import WebsiteIcon from "../../assets/icon-website.svg";
import ProfileImg from "../../assets/ProfileImg.jpg";
import { ThemeContext } from "../../App";
import { UserData } from "../../App";

const GitHubInfo = () => {
  const themeObjectContext = useContext(ThemeContext);
  let User = useContext(UserData);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (User.user) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let FullDate = new Date(User.user.data.created_at);
      setDate(
        `${FullDate.getDay()}` +
          " " +
          `${monthNames[FullDate.getMonth()]}` +
          " " +
          `${FullDate.getFullYear()}`
      );
    }

    const handleWindowResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth, User]);
  const MobileView = () => {
    return (
      <div id="MobileViewInfoWrapper">
        {User.user && (
        <div id="ImgWrapperMobView">
          {
            <img
              src={User.user.data.avatar_url}
              id="UserProfileImg"
              alt=""
            ></img>
          }
        </div>
        )}

        <div id="UserNameWrapper">
          {User.user && (
            <>
              <h1 className={"UserNameWrapper" + themeObjectContext.theme} style={{textAlign:"left"}}>
                {User.user.data.name}
              </h1>
              <a id="AnchorUserName">{User.user.data.login}</a>
              <label className={"UserNameLabel" + themeObjectContext.theme}>
              Joined {date}
              </label>
            </>
          )}
        </div>
      </div>
    );
  };

  const DesktopView = () => {
    return (
      <>
        <div id="UserNameWrapper">
          {User.user && (
            <h1 className={"UserNameWrapper" + themeObjectContext.theme}>
              {User.user.data.name}
            </h1>
          )}
          {User.user && (
            <label className={"UserNameLabel" + themeObjectContext.theme}>
              Joined {date}
            </label>
          )}
        </div>
        <div id="GituserWrapper">
          {User.user && <a id="AnchorUserName">{User.user.data.login}</a>}
        </div>
      </>
    );
  };
  return (
    <div id="OuterInfoWrapper" className={themeObjectContext.theme}>
      <div id="InfoWrapper">
        {windowWidth > 600 ? (
          <div id="LeftPart">
            {User.user && (
              <img
                src={User.user.data.avatar_url}
                id="UserProfileImg"
                alt=""
              ></img>
            )}
          </div>
        ) : (
          <div> </div>
        )}

        <div id="RightPart">
          {windowWidth < 600 ? MobileView() : DesktopView()}
          <div
            id="ParagrapheWrapper"
            className={themeObjectContext.theme + "Color"}
          >
            {User.user && <p>{User.user.data.bio}</p>}
          </div>

          <div
            id="grid-container-stats"
            className={"GridContainer" + themeObjectContext.theme}
          >
            <div className="grid-item-stats Headers">Repos</div>
            <div className="grid-item-stats Headers">Followers</div>
            <div className="grid-item-stats Headers">Following</div>

            {User.user && (
              <>
                <div className="grid-item-stats Outputs">
                  {User.user.data.public_repos}
                </div>
                <div className="grid-item-stats Outputs">
                  {User.user.data.followers}
                </div>
                <div className="grid-item-stats Outputs">
                  {User.user.data.following}
                </div>
              </>
            )}
          </div>
          <div
            id="grid-container-socialAccs"
            className={themeObjectContext.theme + "SocialColor"}
          >
            {User.user && (
              <>
                <div className="grid-item-socialAccs">
                  <img src={LocationIcon}></img>
                  <label className="SocialAccsLabels">
                    {User.user.data.location == null
                      ? "Not Avaliable"
                      : User.user.data.location}
                  </label>
                </div>
                <div className="grid-item-socialAccs">
                  <img src={TwitterIcon}></img>
                  <label className="SocialAccsLabels">
                    {User.user.data.twitter_username == null
                      ? "Not Avaliable"
                      : User.user.data.twitter_username}
                  </label>
                </div>
                <div className="grid-item-socialAccs">
                  <img src={WebsiteIcon}></img>
                  <a className="SocialAccsLabels" href={User.user.data.blog}>
                    LinkedIn
                  </a>
                </div>
                <div className="grid-item-socialAccs">
                  <img src={CompanyIcon}></img>
                  <label className="SocialAccsLabels">
                    {User.user.data.company == null
                      ? "Not avaliable"
                      : User.user.data.company}
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubInfo;
