import React from 'react'

function Pagination({booksPerPage, totalBooks, paginate}) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalBooks/booksPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number=>(
                    <li className="page-item">
                        <a onClick={()=>paginate(number)} href="#!" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
