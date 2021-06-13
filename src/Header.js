import React, { useState, useEffect } from 'react'
import "./Header.css"
import axios from "axios"
import SearchComponent from './SearchComponent'
import { Link, useHistory } from "react-router-dom";
function Header() {

    const [author, setAuthor] = useState([])
    const history = useHistory()
    const removeDuplicates = (data, key) => {
        return [
            ...new Map(data.map(item => [key(item), item])).values()
        ]

    }

    useEffect(() => {
        const getAuthor = async () => {
            await axios.get("https://yapoelpdf.herokuapp.com/books")
                .then(datos => {
                    setAuthor(removeDuplicates(datos.data.books, item => item.author))
                })
        }
        getAuthor()
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        let busqueda = e.target.innerHTML
        history.push(`/search/${busqueda}`)
    }
    const halfOfTotalAuthors = author.length / 2

    return (
        <div className="header">
            <div className="header__logo">
                <h1>PDF Books</h1>
                <h4>Free PDF books</h4>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/home" className="navbar-brand">Inicio</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Autores
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div>
                                    <Link to="/home" className="dropdown-item">Todos</Link>
                                    {author.slice(0, halfOfTotalAuthors).map(eachAuthor => (
                                        <a onClick={handleClick} key={eachAuthor._id} className="dropdown-item" href="/#">{eachAuthor.author}</a>
                                    ))}
                                </div>
                                <div>
                                    {author.slice(halfOfTotalAuthors, author.length).map(eachAuthor => (
                                        <a onClick={handleClick} key={eachAuthor._id} className="dropdown-item" href="/#">{eachAuthor.author}</a>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <SearchComponent />
                </div>
            </nav>
        </div>
    )
}

export default Header
