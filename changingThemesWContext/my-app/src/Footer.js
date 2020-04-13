import React from 'react'
import {ThemeContextConsumer} from "./ThemeContext"
export default function Footer() {
  return (
    <ThemeContextConsumer>
    {context => (
        <footer onClick={context.switchTheme} className={`${context.themeDark}`}>footer</footer>
    )}
</ThemeContextConsumer>
  )
}
