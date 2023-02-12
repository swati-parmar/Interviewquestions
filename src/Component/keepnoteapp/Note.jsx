import React from 'react';

const Note = (props) => {

    const deleteItem = () => {
        props.deleteItem(props.id);
    };
    return (
        <div className='note'>
            <h1> {props.title} </h1>
            <br/>
            <p> {props.content} </p>
            <button onClick={deleteItem}>
            <p> ➖ </p>
            </button>
        </div>
    );
};

export default Note;