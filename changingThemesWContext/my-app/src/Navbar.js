import React from 'react'
import {ThemeContextConsumer} from "./ThemeContext"
export default function Navbar(props) {
  return (

    <ThemeContextConsumer>
    {context => (
        <navbar onClick={context.switchTheme} className={`${context.themeDark}`}>navbar</navbar>
    )}
</ThemeContextConsumer>
  )
}
