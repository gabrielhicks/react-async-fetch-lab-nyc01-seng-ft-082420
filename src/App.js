import React, { Component } from 'react'

export default class App extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(people => {
            this.setState({
                people: people.people
            })
        })
    }
    
    renderPeople() {
        return this.state.people.map(person => <h2>{person.name}</h2>)
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                {this.renderPeople()}
            </div>
        )
    }
}
