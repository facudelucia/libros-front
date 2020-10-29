import React,{useState, useMemo} from 'react'
import { useStateValue } from './StateProvider'
import "./FormEditBook.css"
import axios from "axios"
import {useHistory} from "react-router-dom"
function FormEditBook() {
    const [{ books, bookId, token }, dispatch] = useStateValue()

    const idLower = bookId.toLowerCase()
    
    const history = useHistory()
    
    const getBookById = (idLower) => {
        return (
            books.find(book => book._id == idLower)
        );
    }
    const selectedBook = useMemo(() => getBookById(idLower), [idLower]);

    const [form, setForm] = useState({
        title: selectedBook.title,
        author: selectedBook.author,
        description: selectedBook.description,
        image: selectedBook.image,
        link: selectedBook.downloadLink
    })
    const {title, author, description, image, link} = form
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    } 
 
    const headers = {
        'Content-Type': 'application/json',
    }
    const capitalizeString = (str)=>{
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    const authorCapitalized = capitalizeString(author)
    const handleSubmit = async (e) =>{
        e.preventDefault()
            await axios.put(`https://yapoelpdf.herokuapp.com/books/${idLower}`,{
            "title": `${title}`,
            "author": `${authorCapitalized}`,
            "description": `${description}`,
            "image": `${image}`,
            "downloadLink": `${link}`,
            headers
          })
        
    }
    const handleDelete = async (e) =>{
        e.preventDefault()
        await axios.delete(`https://yapoelpdf.herokuapp.com/books/${idLower}`,{
            headers
          })
    }
    const handleReturn = async (e) => {
        e.preventDefault()
        history.push("/admin")
    }
    return (
        <>
        <div onClick={handleDelete} className="btn btn-danger">
            Eliminar libro
        </div>
        <div onClick={handleReturn} className="btn btn-success">
            Volver
        </div>
        <div className="formEditBook">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="title" 
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="author">Author</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="author"
                        name="author"
                        value={author}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="image"
                        name="image"
                        value={image}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="form-group">
                    <label for="link">Link</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="link"
                        name="link"
                        value={link}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormEditBook
