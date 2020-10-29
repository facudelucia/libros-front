import React, { useEffect } from 'react'
import { useStateValue } from './StateProvider'
import axios from "axios"
import { useHistory } from "react-router-dom"
function Admin() {
    const history = useHistory()
    const [{ books, authorState, searchBook, bookId, token }, dispatch] = useStateValue()
    if(!token){
        history.push("/login")
    }
    useEffect(() => {
        const getBooks = async () => {
            await axios.get("https://yapoelpdf.herokuapp.com/books")
                .then(datos => {
                    dispatch({
                        type: "GET_BOOKS",
                        books: datos.data.books
                    })
                })
        }
        getBooks()
    }, [])
    
    const handleEdit = (e) => {
        e.preventDefault()
        dispatch({
            type: "GET_ID",
            bookId: e.target.parentElement.parentElement.firstChild.innerText
        })
        history.replace("/editbook")
    }
    const handleAdd = (e) => {
        e.preventDefault()
        history.push("/addbook")
    }
    const handleLogout = (e) =>{
        e.preventDefault()
        history.push("/login")
        dispatch({
            type: "LOGOUT"
        })
    }
    return (
        <>
            <div onClick={handleAdd} className="btn btn-success">
                Agregar Libro
        </div>
            <div onClick={handleLogout} className="btn btn-danger">
                Logout
        </div>
            <div className="admin">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Opcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr>
                                <th scope="row">{book._id}</th>
                                <td>{book.title}</td>
                                <td>
                                    <button onClick={handleEdit} className="btn btn-info">
                                        Editar
                                </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Admin
