import { useState, useEffect } from 'react';
import "./App.css"

function App() {
const [ count, setCount ] = useState(0);

// this produces a random number between 0 and 255
const randomNumber = () => {
   return Math.floor(Math.random() * 255) 
  }

 // this produces a random color for the styling of the h2 count variable
let randomColor = 'rgb(' + randomNumber() + "," + randomNumber() + "," + randomNumber() + ')';

// this is used to call the function that updates the count every 1000 milliseconds in this case
useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevState => prevState + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Time Elapsed</h1>
      <h2 style={{color: randomColor}}>{count} Seconds</h2>
    </div>
  )
}
// this is a non-named export so you can import it using whatever name you want as long as the path is correct
export default App;
