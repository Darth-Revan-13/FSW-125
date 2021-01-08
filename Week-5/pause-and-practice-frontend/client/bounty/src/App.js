//App.js

import React from "react"
import axios from "axios"
import { response } from "express"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            bounties: []
        }
    }

    componentDidMount(){
        axios.get("/bounties").then(res=>{console.log(res)
        this.setState({bounties: res.data.value})
        }).catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Bounty Board</h1>
                <div id="bountyBoard">
                    {axios.get("/bounties")}
                </div>
                <h1>Add New Bounties Here</h1>
                <form>
                    <input 
                    type="text"
                    value="firstName"
                    name="firstName"
                    placeholder="First Name"/>
                    <input 
                    type="text"
                    value="lastName"
                    name="lastName"
                    placeholder="Last Name"/>
                    <input 
                    type="text"
                    value="living"
                    name="living"
                    placeholder="Living"/>
                    <input 
                    type="text"
                    value="sithOrJedi"
                    name="sithOrJedi"
                    placeholder="Sith or Jedi"/>
                    <button type="submit">Add Bounty</button>
                </form>
            </div>
        )
    }
}

export default App