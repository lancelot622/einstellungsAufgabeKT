import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./App.less";

function App() {

  const [num, setNum] = useState(useSelector(state => state.test[0].hello))

  const dispatch = useDispatch()

  const handleChange = (number) => {
    setNum(number)
    dispatch({
      type: "TEST",
      payload: number
    })
  }

  return (
    <div className="App">
      <h1>Test</h1>
      <p><span style={{margin: "10px 20px", cursor: "pointer"}} onClick={() => handleChange(num + 1)}>+</span><span style={{cursor: "pointer"}} onClick={() => handleChange(num - 1)}>-</span></p>
      <p style={{margin: "10px 20px"}}>{num}</p>
    </div>
  );
}

export default App;
