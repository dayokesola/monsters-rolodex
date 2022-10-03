//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    //console.log("constructor");
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        //console.log("setstate");
        return this.setState(() => {
          return { monsters: users };
        })
      });
    //console.log("componentDidMount");
  }

  onSearchChange = (event) => {
    //console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    });
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    //console.log("render");
    return (
      <div className="App">
      <div className='app-title'>Monsters Rolodex</div>
        <SearchBox onChangeHandler={onSearchChange} className='monster-search-box' placeHolder='search monsters' />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
export default App;