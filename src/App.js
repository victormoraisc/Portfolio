import './styles/global.css';
import React from 'react';
import { Background } from './components/background';
import { Decoration } from './components/decoration';
import { Layout } from './components/layout';

function App() {
  function randomColor() {
    let random = Math.floor(Math.random() * 9 + 1)
    let colors = {
      1 : '#ff0000',
      2 : '#ff7300',
      3 : '#fffb00',
      4 : '#48ff00',
      5 : '#00ffd5',
      6 : '#002bff',
      7 : '#7a00ff',
      8 : '#ff00c8',
      9 : '#ff0000'
    }
    return colors[random];
  }
  let color1 = randomColor();
  let color2 = randomColor();
  if (color2 === color1) {
    color2 = randomColor();
  }
  return (
    <span>
      <Background />
      <Layout randomColor1={color1} randomColor2={color2}/>
      <Decoration randomColor1={color1} randomColor2={color2}/>
    </span>
  );
}

export default App;
