import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note'; 



const Keep = () => {
const[addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata) => 
      olddata.filter((currdata, index) => {
        return index !== id;
    })
    )
  };

    return (
        <div >
        <Header />
        <CreateNote passNote={addNote} />
      <div style={{
        display: 'grid', 
        marign: 10, 
        padding: 10,
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 20
  
        }}>
      {addItem.map((val, index) => {
          return (
            <Note 
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem = {onDelete}
            />
          );
      })}
  
      </div>
        <Footer />
      </div>
    )
}

export default Keep;