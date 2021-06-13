import React, { useState } from 'react'
import './Pagination.css'
function Pagination({ booksPerPage, totalBooks, paginate }) {

    const [page, setPage] = useState(1)

    const totalPages = Math.ceil(totalBooks / booksPerPage)

    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }
    const handleClick = (n) => {
        paginate(n)
        setPage(n)
    }
    const handlePaginationReturn = () => {
        if (page === 1) return
        setPage(page - 1)
        paginate(page - 1)
    }
    const handlePaginationAdvance = () => {
        if (page >= totalPages) return
        setPage(page + 1)
        paginate(page + 1)
    }
    return (
        <div className="button-group">
            <button onClick={handlePaginationReturn} disabled={page === 1} className="button-pagination">
                <i className="fas fa-arrow-left"></i>
            </button>
            {pageNumbers.map(number => (
                <button key={number} disabled={page === number} onClick={() => handleClick(number)} className="button-pagination">
                    {number}
                </button>
            ))}
            <button onClick={handlePaginationAdvance} disabled={page === totalPages} className="button-pagination">
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default Pagination
