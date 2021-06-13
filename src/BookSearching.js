import React, { useMemo } from 'react'
import Card from './Card'
import { useParams } from 'react-router-dom';
import { useStateValue } from './StateProvider'
const BookSearching = () => {
    const { busqueda } = useParams();
    const [{ books }] = useStateValue()
    const busquedaToUpperCase = busqueda.toUpperCase()
    const getBookByTitle = (title) => {
        return books.filter(book => book.title.toUpperCase().includes(title) || book.author.toUpperCase().includes(title))
    }
    const booksBySearch = useMemo(() => getBookByTitle(busquedaToUpperCase), [busquedaToUpperCase])
    return (
        <>
            {
                (busqueda && booksBySearch.length === 0) &&
                <div className="alert alert-danger">No existen libros con ese nombre o autor</div>
            }
            <div className="card-columns">
                {booksBySearch.map(book => (
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
        </>

    )
}

export default BookSearching
