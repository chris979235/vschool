import React, { Component } from "react"
const {Provider, Consumer}=React.createContext()

class ThemeContextProvider extends Component {
    constructor(){
      super()
      this.state = {
        themeDark: false
      }
    }
      
      switchTheme=()=>{
        this.setState(prevState => {
          return {
            themeDark:!prevState.themeDark  
          }
        })
      }
    
    render(){
      return(
        <Provider 
        value={{...this.state,
        themeDark:this.state.themeDark, 
        switchTheme:this.switchTheme}}>
        {this.props.children}
        </Provider>

      )
    }
    }

    export {ThemeContextProvider, Consumer as ThemeContextConsumer }
