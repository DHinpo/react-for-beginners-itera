import React from 'react';
import './App.css';     // підключаємо стилі
import { Footer } from './Footer';
import { Resume } from './basic';

const user = { userName: 'Gupalo Vasyl' }

const App = () => (
  <div className="App">
    <h1>{user.userName}</h1>
    <Resume basic="Congratulations, this is Gupalo Vasyl!
Let's hold on!"/>
    <Footer copyright='C' />
  </div>
)

export default App;  //   доступніть коду з іншого місця
