import React , { createContext } from 'react';
import ComA from './ComA';


const FirstName = createContext();
const LastName = createContext();

const UseContext = () => {
    return (
        <>
        <FirstName.Provider value={"swati"}> 
            <LastName.Provider value={"Parmar"} >
            <ComA />
            </LastName.Provider>
        </FirstName.Provider>
        </>
    )
}

export default UseContext;
export { FirstName, LastName };