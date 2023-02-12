import React, { useEffect, useState } from 'react';

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
   document.title = `you clicked me ${num} times`;
  }, [num]);
  return (
    <div>
      <button 
        onClick={
          (() => {
          setNum(num + 1);
      })
      }
      > 
      Click me {num} 
      </button>   
    </div>
  );
};

export default App;