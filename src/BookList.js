import React, { useMemo } from 'react';
import BookScreen from './BookScreen';
import Card from './Card';
import { useStateValue } from './StateProvider';
import "./BookList.css"
const BookList = ({ booksPaginate, id, author, title, books }) => {
    const [{ authorState, searchBook, bookId }, dispatch] = useStateValue()
    const getBookByAuthor = (author) => {
        return (
            books.filter(book => book.author === author)
        );
    }
    const getBookByTitle = (title) => {
        return books.filter(book => book.title.toUpperCase().includes(title))

    }
    const getBookById = (id) => {
        return (
            books.find(book => book._id === id)
        );
    }
    const booksMemo = useMemo(() => getBookByAuthor(author), [author]);
    const booksFiltered = useMemo(() => getBookByTitle(title), [title])
    const selectedBook = useMemo(() => getBookById(id), [id]);
  if (bookId) {
        return (
            <BookScreen
                id={selectedBook._id}
                key={selectedBook._id}
                title={selectedBook.title}
                author={selectedBook.author}
                description={selectedBook.description}
                img={selectedBook.image}
                link={selectedBook.downloadLink}
            />
        )
    }
    if (authorState) {
        return (
            <div className="card-columns">
                {booksMemo.map(book => (
                    <Card
                        id={book._id}
                        key={book._id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        img={book.image}
                        link={book.downloadLink}
                    />
                ))}
            </div>
        )
    }
    if (searchBook && booksFiltered.length === 0) {
        return (
            <div className="alert alert-danger">No existen libros con ese nombre</div>)
    }
    if (searchBook) {
        return (
            <div className="card-columns">
                {booksFiltered.map(book => (
                    <Card
                        id={book._id}
                        key={book._id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        img={book.image}
                        link={book.downloadLink}
                    />
                ))}
            </div>
        )
    }
    if (!searchBook && !authorState && !bookId) {
        return (
            <div className="card-columns">
                {booksPaginate.map(book => (
                    <Card
                        id={book._id}
                        key={book._id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        img={book.image}
                        link={book.downloadLink}
                    />
                ))}
            </div>
        )
    }

}

export default BookList;