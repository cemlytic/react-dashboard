import { useSelector } from "react-redux";
import { selectTheme } from "./features/themeSlice";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./helpers/Main";
import Content from "./helpers/Content";
import Profile from "./components/Profile/Profile";
import Stats from "./components/Stats/Stats";
import Events from "./components/Events/Events";

const App = () => {
  const theme = useSelector(selectTheme);
  return (
    <div className={`font-montserrat ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <Sidebar />
      <Main>
        <Content>
          <Stats />
          <Events />
        </Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
