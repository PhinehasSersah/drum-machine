import React,{useState} from 'react';
import './App.css';
import{Header} from './Components/Header/header'
import { Drum } from './Components/Drum/drum'
import { Footer } from './Components/Footer/footer'




 const App = () => {
   

 

  const [backgroundColor, setBackgroundColor] = useState('green');
   
  const handleClick = e => {
  let id = e.target.children[0].id;
   let sound = document.getElementById(`${id}`)
   sound.play();
   let selector = document.getElementById('display');
   selector.textContent = e.target.id
 }

  const handleKeyPress = event => {
    let eventId = event.target.children[0].id
      document.addEventListener('keyup', (e)=> {
        const key = e.code.slice(-1);
        e.preventDefault();
       if(key===eventId) {
         let sound = document.getElementById(`${eventId}`)
         sound.play();
         let selector = document.getElementById('display');
        selector.textContent = event.target.id
        }  
    })
    return
  }

  const background = () => {
    const colorChoice = ['lightseagreen', 'lightyellow', 
'maroon','olive', 'peachpuff','coral','dark','darkgrey','grey,','khaki'];
const random  = Math.floor(Math.random()*colorChoice.length);
    setBackgroundColor(() => {
    let backgroundDiv = document.getElementById('background')
    backgroundDiv.style.backgroundColor = colorChoice[random]
  })

  }

  return (
    <div>
      <Header />
      <Drum play={handleClick}
           press={handleKeyPress}
           color={background}  
      />
      <Footer />
   </div>
  );
  
}
export default App;

