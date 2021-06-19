import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { themeContext } from "./contexts/ThemeContext";
import AddUser from "./components/AddUser";
export default function App() {
  return (
    <themeContext.Consumer>
      {(contextTheme) => {
          const {isDark, dark, light} = contextTheme;
          let theme = isDark ? dark : light;
        return (
          <div className="py-5" style= {{background: theme.bg, minHeight:"100vh"}}>
            <div className="container" style={{ maxWidth: "600px"}}>
              <Header />
              <AddUser />
              <UserList />
            </div>
          </div>
        );
      }}
    </themeContext.Consumer>
  );
}
