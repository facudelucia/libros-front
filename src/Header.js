import React,{useState, useEffect} from 'react'
import "./Header.css"
import axios from "axios"
import { useStateValue } from './StateProvider'
import SearchComponent from './SearchComponent'
import {Link} from "react-router-dom";
function Header() {
    const[{authorState, books}, dispatch]= useStateValue()
    const [author, setAuthor] = useState([])
    const removeDuplicates = (data, key) => {
        return [
            ...new Map(data.map(item => [key(item), item])).values()
        ]
        
      }
  useEffect(() => {
    const getAuthor = async () =>{
      await axios.get("https://yapoelpdf.herokuapp.com/books")
        .then(datos=>{
            setAuthor(removeDuplicates(datos.data.books, item=>item.author))
        })
    }
    getAuthor()
  }, [])
  const handleClick = (e) => {
    e.preventDefault()
    dispatch({
        type: "GET_AUTHOR",
        authorState: e.target.innerHTML
    })
  }
  const handleAllAuthors = (e) => {
    e.preventDefault()
    dispatch({
        type: "ALL_AUTHOR"
    })
  }
 
    return (
        <div className="header">
            <div className="header__logo">
                <h1>Yapo el PDF</h1>
                <h4>Libros PDF gratis</h4>
            </div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" onClick={handleAllAuthors} class="navbar-brand">Inicio</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Autores
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a onClick={handleAllAuthors} class="dropdown-item" href="#">Todos</a>
                                {author.map(eachAuthor=>(
                                    <a onClick={handleClick} key={eachAuthor._id} class="dropdown-item" href="#">{eachAuthor.author}</a>
                                ))} 
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
