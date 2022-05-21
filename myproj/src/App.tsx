import React from 'react';
import './App.css';

type FooterProps = {
  copyright: string;
}

const Footer: React.FC<FooterProps> = (props) => (
  <footer>it`s a footer {props.copyright} </footer>
)

// пишемо, що Footer це React-функціональний компонент,
// який приймає в якості аргумента тип FooterProps
const App = () => (
  <div className="App">
    <h1>Hello world</h1>
    <Footer copyright='C' />
  </div>
)

export default App;
