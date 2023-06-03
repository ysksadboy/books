import {useState} from 'react';

function BookCreate({onCreate}) {
    const [title, setTitle] = useState(''); //this is a new piece of state to keep track of what a user types in the input//


     const handleChange = (event) => { //this keeps track of when a user makes changes//
        setTitle(event.target.value); //this looks at what a user types and updates the title piece of state//
     };

     const handleSubmit = (event) => {
        event.preventDefault();        //this prevents the browser from automatically reloading the page//
        onCreate(title);
        setTitle('');  //this clears input bar after user presses enter or create button//
     };
    return (
    <div className='book-create'>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange} />
            <button className='Button'>Create!</button>
        </form>
    </div>
    );
}

export default BookCreate;