import React from 'react';
import './App.css';     // підключаємо стилі
import { Footer } from './Footer';
import { Avatar } from './Avatar';
import { Bio } from './Bio';
import { Header } from './Header';
//import { Resume } from './basic';

//const user = { userName: 'Gupalo Vasyl' }

// const App = () => (
//   <div className="App">
//     <h1>{user.userName}</h1>
//     <Resume basic="Congratulations, this is Gupalo Vasyl!
// Let's hold on!"/>
//     <Footer copyright='C' />
//   </div>
// )

const App = () => {
  return (
    <>
      <Header basic="Gupalo Vasyl" />
      <Avatar basic="maybe photo" />
      <Bio basic="Hello, this text about me" />
      <Footer copyright='C' />
    </>
  );
};
export default App;  //   доступніть коду з іншого місця
