import React from "react"

//SEM JSX
/*const App = () =>{
return React.createElement('a',{
  href:'http://google.com.br'
  }, 'Clique Aqui')
}
export default App
*/
/*
const App = () =>{
  return(
    <a href='https//google.com.br'>Clique Aqui! 2.0</a>
  )
}
export default App
*/

import {Header} from './components/Header'



const App = () =>{
  const handleButtonClick= () =>{
    alert("Fui clicado!!!")
  }

  return (
    <button onClick={handleButtonClick}>Clique aqui!</button>
    /*
    <div>
      <Header title="TI102" subtitle="Formados"/>
      Olá Mundo!
      
    </div>
    */

  )
} 
export default App



