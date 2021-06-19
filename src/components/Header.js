import React from "react";
import { themeContext } from "../contexts/ThemeContext";

export default function Header() {
  return (
    <themeContext.Consumer>
      {(contextTheme) => {
        
        const {toggleTheme} = contextTheme
        return (
          <div className="text-center">
            <h3>User List App</h3>
            <button 
                className = "btn btn-sm btn-secondary mb-3"
                onClick = {toggleTheme}
            >
              Toggle Theme
            </button>
          </div>
        );
      }}
    </themeContext.Consumer>
  );
}
