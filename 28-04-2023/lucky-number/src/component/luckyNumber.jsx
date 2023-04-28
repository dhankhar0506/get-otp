import { useState } from "react";
import "./luckyNumber.css"

 export function LuckyNumber() {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
    
  const randomNumber = Math.floor(Math.random() * 100) + 1
  const [num, setNum] = useState("loading....");
  const [enterNumber, setEnterNum] = useState("Guess the lucky Number");
  const [count, setCount] = useState(0);

  const ChangingValue = (e) => {
    
    setEnterNum(e.target.value);
  };
  const MatchNumber = () => {
    
    setNum(randomNumber);
    setCount(count + 1);
    if(isNaN(enterNumber) || enterNumber < 1 || enterNumber > 100) 
    
    {
        alert("Please enter a valid number between 1 and 100.");

    }
    else if (enterNumber < num) {
      alert("you guessed a smaller number");
    } else if (enterNumber > num) {
      alert("you guessed a greter number");
    } else {
      alert(
        `congratulations you guessed the right number in  ${count} attempts `
      );
    }
  };

  return (
    <div className="items">
      <h2>You have made {count} attempts</h2>
     
      <input placeholder={enterNumber} onChange={ChangingValue} />
      <button onClick={MatchNumber}>Match number</button>
      
        <h2>The lucky number was: {num}</h2>
      
    </div>
    
  );
}