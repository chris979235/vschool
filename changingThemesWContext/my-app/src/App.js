import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Main from "./Main"
import Button from "./Button"
import {ThemeContextProvider} from "./ThemeContext"
export default function App(props) {
  console.log(props)
  return (
    <div>
      <ThemeContextProvider >
        {context => (
          <main className={`${context.themeDark}`-true}>
            <h3>{context.themeDark === "light" ? "Light" : "Dark"} Theme </h3>
          </main>
        )}
      <Navbar/>
      <Footer/>
      <Main/>
      <Button/>

      </ThemeContextProvider>
    </div>
  )
}
