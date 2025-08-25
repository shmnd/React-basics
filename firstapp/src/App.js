
import { useState, useEffect } from "react";

export default function App() {

  const [advice, setAdvice] = useState("")
  const [count, UpdateCount] = useState(0)

  const GetAdviceApp = async () => {

    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json()
    console.log(data.slip.id)
    setAdvice(data.slip.advice);
    UpdateCount(c => c+1);

  }

  useEffect( function App() {
    GetAdviceApp();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <h2>Today advice is : {advice}</h2>
      <button onClick={GetAdviceApp}>Get Free Adivices</button>
      <Message count = {count} />
    </div>
    
  );
}

function Message (props) {
  return (
    <p>
        You read <strong>{props.count}</strong> Advices so far <br />
        my name is {props.name}
    </p>
  )
}