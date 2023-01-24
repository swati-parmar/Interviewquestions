import React, { useState } from 'react';
import { questions } from './Api';
import "./accordian.css";
import MyAccordian from './MyAccordian';


const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <div className='main-box'>
        <section className='sub-box'>
				<h1> React Interview Questions </h1>
            {
                data.map((curElem) => {
                    const { id } = curElem;
                    return <MyAccordian key={id} {...curElem} />
                })
            }
        </section>
        </div>
    )
}

export default Accordian