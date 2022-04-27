import React from "react";
import { Cardlist } from "./components/card-list/card-list.components";
// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { SearchBox } from "./components/search-box/search-box.components";


class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchfield: ""
    };
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users =>this.setState({monsters:users}))
  }

  // making a function component use this instead of this.bind for reuseable purpose so we use es6 functionality
  handlechange= e => {
    this.setState({searchfield:e.target.value})
  }
  render(){
    const {monsters, searchfield} = this.state;
    const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        handlechange={this.handlechange} 
        />
        <Cardlist monsters={filteredmonsters}/>
      </div>
    );
  }
}

export default App;
