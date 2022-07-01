import React, { useEffect } from 'react'
import { useState } from 'react';

const Counter1 = () => {
    const [count, setCount] = useState(0);
const handleCount =()=>{
  setCount(count+1)
 
}

useEffect(()=>{
    document.title=`counter ${count} times`
}, [count])
  return (
    <div>Counter1
<h4>{count}</h4>
<button onClick={handleCount}>+</button>

    </div>
  )
}

export default Counter1