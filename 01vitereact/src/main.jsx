import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//     <h1>Custom App</h1>
//     </div>
//   )
// } // this is just a function, par isko use krne ke liye bundler use krta h - babel
// inside this strictmode we can write to execute as a function 

// const anotherElement = (
//   <a href='https://google.com' target= '_blank'>Visit Google</a>
// );

// const reactElement = React.createElement( //isko babel- a transpiler inject krta h
//   'a',
//   {
//     href: "https://google.com",
//     target: '_blank'
// },
// "click me to visit google"
//   );


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
