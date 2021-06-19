import ReactDOM from "react-dom";
import App from "./App";
import { UserContextProvider } from "./contexts/UserContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <ThemeContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </ThemeContextProvider>,

  document.getElementById("root")
);
