
import { useState } from "react";

export default function App() {

  const [advice, setAdvice] = useState()
  const [count, UpdateCount] = useState(0)

  async function GetAdviceApp() {

    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json()
    setAdvice(data.slip.advice);
    UpdateCount(c => c+1);
    console.log(count,'countttttttttt')

  }

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Today advice is : {advice}</h2>
      <button onClick={GetAdviceApp}>Get Free Adivices</button>
      <p>
        You read <strong>{count}</strong> Advices
      </p>
    </div>
    
  );
}

