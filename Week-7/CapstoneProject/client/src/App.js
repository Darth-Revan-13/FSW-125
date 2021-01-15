import React from "react"
import axios from "axios"


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            starships: []
        }
    }

    componentDidMount(){
        axios.get("/starships").then(res=>{console.log(res)
        this.setState({starships: res.data.value})
        }).catch(err=>console.log(err))
    }

    handleChange = (e) => {
        var {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        var newStarship = {starshipName: this.state.starshipName, cost: this.state.cost, inProduction: this.state.inProduction}
        axios.post("/starships", newStarship).then(res=>{console.log(res)
            this.setState({starships: res.data.currentStarshipNames})
        }).catch(err=>console.log(err))
    }
    
    handleEdit = (starship) => {
        var updatedStarship = {
            starshipName: (this.state.starshipName?(starship.starshipName):this.state.starshipName),
            cost: this.state.cost,
            inProduction: this.state.inProduction}
        axios.put("/starships", updatedStarship).then(res=>{console.log(res)
            this.setState({starships: res.data.currentStarshipNames})
        }).catch(err=>console.log(err))
    }

    handleDelete = (req, starship) => {
        var updatedStarship = {
            starshipName: (this.state.starshipName?(starship.starshipName):this.state.starshipName),
            cost: this.state.cost,
            inProduction: this.state.inProduction}
        const starshipId = req.params.starshipId
        const starshipIndex = starship.findIndex(starships => starships._id === starshipId)
        axios.delete("/starships", starship.id, updatedStarship).then(res=>{console.log(res)
            starship.splice(starshipIndex, 1)
        }).catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                <h1>Bounty Board</h1>
                <div id="starshipNames">
                    {/* {axios.get("/starships")} */}
                </div>
                <h1>Add New starships Here</h1>
                <form>
                    <input 
                    type="text"
                    value={this.state.starshipName}
                    name="starshipName"
                    placeholder="Starship Name"
                    onChange={this.handleChange}/>
                    <input 
                    type="text"
                    value={this.state.cost}
                    name="cost"
                    placeholder="Cost"
                    onChange={this.handleChange}/>
                    <input 
                    type="text"
                    value={this.state.inProduction}
                    name="inProduction"
                    placeholder="In production?"
                    onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleSubmit}>Add Starship</button>
                </form>

                {this.state.starships.map((starship, index) => {
                    return(
                        <div>
                            {starship.starshipName}
                            {starship.cost}
                            {starship.inProduction}
                            <button onClick={this.handleEdit(starship)}>Edit</button>
                            <button onClick={this.handleDelete(starship)}>Delete</button>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default App