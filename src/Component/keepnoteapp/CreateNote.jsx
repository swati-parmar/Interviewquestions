import React, { useState } from 'react';

const CreateNote = (props) => {

	const [expand, setExpand] = useState(false);

	const [note, setNote] = useState({
		title:'',
		content:'',
	});

const InputEvent = (event) => {

	// const value = event.target.value;
	// const name = event.target.name;

	const {name, value} = event.target;

	setNote((prevData) => {
		return {
			...prevData,
			[name] : value,
		};
	});
};

const addEvent = (e) => {
	e.preventDefault();
	props.passNote(note);
	setNote({
		title:'',
		content:'',
	});
};

const expandIt = () => {
	setExpand(true);
}

const backtonormal = () => {
	setExpand(false);
};
    return (
      <div className='main_note'>
        <form>
					{expand?
          <input 
					className='note_title' 
					type='text' 
					name="title" 
					value={note.title} 
					onChange={InputEvent} 
					placeholder='Title' 
					autoComplete='off' 
					/> : null}
					<br />
            <textarea 
						className='text_area' 
						type='text' 
						name="content" 
						value={note.content} 
						onChange={InputEvent} 
						rows='' 
						column='' 
						placeholder='write a note...'
						onClick={expandIt}
						onDoubleClick ={backtonormal} >
						</textarea>
						<br />
						{expand?
						<div style={{float: 'right'}}>
							<button className='note_btn' onClick={(e) => {addEvent(e)}}>
								<h1>➕</h1>
							</button>
						</div> : null}
        </form>
      </div>
     
    );
};

export default CreateNote;