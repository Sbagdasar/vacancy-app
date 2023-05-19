import React from 'react';
import './App.css';
import {HeaderMenu} from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <HeaderMenu links={[{ link: 'search',label: 'Поиск Вакансий'}, { link: 'favorite',label: 'Избранное'},]}/>

    </div>
  );
}

export default App;
