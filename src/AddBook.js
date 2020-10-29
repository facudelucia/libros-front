import React,{useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"
import "./AddBook.css"
import {useStateValue} from "./StateProvider"
function AddBook() {
    const history = useHistory()
    const [{ token }, dispatch] = useStateValue()
    if(!token){
        history.push("/login")
    }
     const [form, setForm] = useState({
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
    })
    const {title, author, description, image, link} = form
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    } 
    const capitalizeString = (str)=>{
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    const authorCapitalized = capitalizeString(author)
    const headers = {
        'Content-Type': 'application/json',
    } 
    const handleSubmit = async (e) =>{
        e.preventDefault()
            await axios.post(`https://yapoelpdf.herokuapp.com/books`,{
            "title": `${title}`,
            "author": `${authorCapitalized}`,
            "description": `${description}`,
            "image": `${image}`,
            "downloadLink": `${link}`,
            headers
          })
        
    }
    const handleReturn = async (e) => {
        e.preventDefault()
        history.push("/admin")
    }
    return (
        <>
        <div onClick={handleReturn} className="btn btn-success">
            Volver
        </div>
        <div className="addBook">
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

export default AddBook
