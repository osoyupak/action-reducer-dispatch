import React, { Component, createContext } from 'react'

export const themeContext = createContext();

export class ThemeContextProvider extends Component {
    
    state={
        isDark:true,
        dark: {bg:"grey"},
        light: {bg:"white"},
        toggleTheme: () => {
            this.setState({isDark:!this.state.isDark})
        }
    }
    render() {
        return (

            <themeContext.Provider value={this.state}>
                {this.props.children}
            </themeContext.Provider>

        )
    }
}
