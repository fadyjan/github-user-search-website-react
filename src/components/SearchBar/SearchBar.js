import React ,{useContext, useEffect ,useState} from "react";
import axios from "axios";

import "./SearchBar.css";
import SearchIcon from "../../assets/icon-search.svg";
import { ThemeContext } from "../../App"
import { UserData } from "../../App"

const SearchBar = () => {
  const themeObjectContext = useContext(ThemeContext);
  let User = useContext(UserData)

  const [isClicked, setIsClicked] = useState(true)
  const [userName,setUserName] = useState("fadyjan")
  const [sucess,setSucess] = useState("") 

  useEffect(()=>{
    if (isClicked === true) {
      axios.get(`https://api.github.com/users/${userName}`).then((response)=>{
        User.PrepareUserData(response)
        setSucess("Sucess")
      }).catch((err)=>{
        console.error(err)
        setSucess("Error")
      })
    }
    setIsClicked(false)

  },[isClicked])

  const HandleBtnClick = ()=>{
    
    setIsClicked(true)

    let InputValue = document.getElementById("SearchInputField").value
    setUserName(InputValue)

  }

  return (
    <div id="SearchBar" className={"SearchBar"+themeObjectContext.theme}>
      <div id="IconWithInput">
        <img src={SearchIcon} id="SearchIcon" ></img>
        <input
          id="SearchInputField"
          className={"SearchInputField"+themeObjectContext.theme}
          placeholder="Search GitHub username ..."
        ></input>
      </div>
      {sucess === "Sucess" ? <label id="Sucess">Sucess</label> :<label id="Error">Error</label>}
      <button id="SearchButton" onClick={()=>{HandleBtnClick()}}>Search</button>
    </div>
  );
};

export default SearchBar;
