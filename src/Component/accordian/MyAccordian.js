import React, { useState } from "react";
import "./accordian.css";

const MyAccordian = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="ques-box">
                <span className='icon' onClick={() => setShow(!show)}> { show? '➖' :'➕'} </span>
                <h3 className="ques">{ question }</h3>
            </div>
            {show && <p className="answers"> {answer} </p>}
        </>
    )
}

export default MyAccordian;