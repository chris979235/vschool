import React from "react"
import Cta from "./Cta"

function App() {
    return (
        <div>
            <Cta>
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>
            </Cta>
            
            <Cta>
            <form>
                    <input type="email" placeholder="Enter email address here"/>
                    <br />
                    <button>Submit</button>
                </form>
            </Cta>
        </div>
    )
}

export default App
