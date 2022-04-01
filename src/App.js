import React from "react";
import { useState } from "react";

function App(){
  let [counter, changeCounter] = useState(1)
  //we are making the changeCounter variable global 
  //usually this is bad practice in final forms of our product.
  //However, this can be useful for debugging
  window.changeCounter = changeCounter
  return(
    <div>
      <h1>
        {counter}
      </h1>
      <h4>
          {counter}
        </h4>
    </div>
  )
}

export default App
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <a 
//         className='App-link'
//         href='google.com'
//         >
//           or go to google
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
