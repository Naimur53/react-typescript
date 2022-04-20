import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import AddList from './Components/AddList';
export interface IState {
  people: {
    name: string
    age: number
    about: string
    img: string
  }[]
}
function App() {
  const [people, setPeople] = useState<IState['people']>([{
    name: 'sadi',
    age: 20,
    about: 'I love typeScript',
    img: 'https://i.ibb.co/LNfvVvT/IMG-20211223-155459-removebg-preview.png'
  },]);


  return (
    <div className="App">
      <List people={people}></List>
      <AddList setUser={setPeople}></AddList>



    </div>
  );
}

export default App;
