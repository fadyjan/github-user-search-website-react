import logo from "./logo.svg";
import { useState ,createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import GitHubInfo from "./components/GitHubInfo/GitHubInfo";
import LoadingGitHubInfo from "./components/LoadingGitHubInfo/LoadingGitHubInfo";

export const ThemeContext = createContext(null)
export const UserData = createContext(null)

function App() {
  const [theme, setTheme] = useState('Dark');
  const [user,setUser] =useState("")

  const toggleTheme = ()=>{
    setTheme((currentTheme)=>(currentTheme === "Light"? "Dark" : "Light"))
  }
  const PrepareUserData = (u)=>{
    setUser(u)
  }

  return (
    <ThemeContext.Provider value={{theme ,toggleTheme }}>
      <UserData.Provider value = {{user, PrepareUserData}}>
    <div className={"App " + theme+"App"}>
      <div id="InnerWrapper">
        <div id="HeaderWithSearch">
          <Header></Header>
          <SearchBar></SearchBar>
        </div>
        <GitHubInfo></GitHubInfo>
      </div>
    </div>
    </UserData.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
