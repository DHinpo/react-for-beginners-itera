//import React from 'react';

type FooterProps = {
  copyright: string;
} 
export const Footer: React.FC<FooterProps> = (props) => (
  <footer>{props.copyright} </footer>
);
// пишемо, що Footer це React-функціональний компонент,
// який приймає в якості аргумента тип FooterProps
