import React, { useEffect, useState } from 'react';
import Card from './Card';
import Pagination from './Pagination'
import { useStateValue } from './StateProvider';
import "./BookList.css"
import Axios from 'axios';
const BookList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [booksPerPage] = useState(9)
    const [{ books }, dispatch] = useStateValue()
    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    useEffect(() => {
        const getBooks = async () => {
            await Axios.get("./data.json")
                .then(datos => {
                    dispatch({
                        type: "GET_BOOKS",
                        books: datos.data
                    })
                })
        }
        getBooks()
    }, [])

    return (
        <>
            <div className="card-columns">
                {currentBooks.map(book => (
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
            <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
        </>

    )


}

export default BookList;