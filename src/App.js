import React, { createContext } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ComA from './ComA';
// import Accordian from './Component/accordian/Accordian';
// import Cards from './cardsapp/Cards';
// import Keep from './Component/keepnoteapp/keep';

const FirstName = createContext();
const LastName = createContext();


const App = () => {
  
  return (
    <>
      <FirstName.Provider value={"swati"}> 
        <LastName.Provider value={"Parmar"} >
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
   
  );
};

export default App;
export { FirstName, LastName };