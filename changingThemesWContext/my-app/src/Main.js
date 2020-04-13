import React from 'react'
import {ThemeContextConsumer} from "./ThemeContext"
export default function Main(props) {
  return (
    <ThemeContextConsumer>
    {context => (
        <main onClick={context.switchTheme} className={`${context.themeDark}`}>main</main>
    )}
</ThemeContextConsumer>
  )
}
