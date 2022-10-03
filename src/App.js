//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    var nfm = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(nfm);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldText);
  };

  return (
    <div className="App">
      <div className='app-title'>Monsters Rolodex</div>
      <SearchBox onChangeHandler={onSearchChange} className='monster-search-box' placeHolder='search monsters' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
};

export default App;