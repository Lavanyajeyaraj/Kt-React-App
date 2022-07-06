import { ThemeContext} from "./Layout";
import "./App.css";
import {  useContext } from "react";
const Home = () => {
  const theme = useContext(ThemeContext);
  console.log(theme.theme);
  return (
    <div className="App-header" id={theme.theme} style={{minHeight:670}}>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
