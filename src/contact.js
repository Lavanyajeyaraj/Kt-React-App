import { ThemeContext } from "./Layout";
import "./App.css";
import { useContext } from "react";
// const theme={ThemeContext}

const Contact = () => {
  // var get_theme=localStorage.getItem("theme")
  // console.log(get_theme)
  const theme = useContext(ThemeContext);
  console.log(theme.theme);

  // const [theme, setTheme] = useState("lightmode");

  return (
    <div className="App-header" id={theme.theme} style={{minHeight:670}}>
      <h1>Contact us</h1>
    </div>
  );
};

export default Contact;
