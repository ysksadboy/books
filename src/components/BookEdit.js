import {useState} from 'react';

function BookEdit({book, onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => { //this function is called anytime the form is submitted//
        event.preventDefault();

        onSubmit(book.id, title);
    };

    return (
    <form onSubmit={handleSubmit} className='book-edit'>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button is-primary'>
            Save Title
        </button>
    </form>
    );
}

export default BookEdit;