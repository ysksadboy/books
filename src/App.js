import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);  //this array displays any given book we wnat to display at ay given time//
      
    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, title: newTitle};
            }


            return book;
        });

        setBooks(updatedBooks);

    };

     const deleteBookById = (id) => {  // this removes a book
       const updatedBooks = books.filter((book) => {
        return book.id !== id;
       });

       setBooks(updatedBooks);
     };

    const createBook = (title) => { ///this is the event handler title for the title user enters//
       const updatedBooks = [
        ...books,
        { id: Math.round(Math.random() * 9999), title, }   // this gives each book we create a random id//
       ];
       setBooks(updatedBooks);
    };

    return <div>
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
        </div>;
}

export default App;