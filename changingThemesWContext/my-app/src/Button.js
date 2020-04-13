import React from "react"
import {ThemeContextConsumer} from "./ThemeContext"

function Button() {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.switchTheme} className={`${context.themeDark}`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button