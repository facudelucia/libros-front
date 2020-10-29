import React,{useState} from 'react'
import { useStateValue } from './StateProvider';
function SearchComponent() {
    const[{searchBook}, dispatch]= useStateValue()
    const [form, setForm] = useState({
        search:""
    })
    const {search} = form
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(search.trim()=== ""){
            return
        }
        
        dispatch({
            type:"SEARCH_BOOK",
            searchBook: search.toUpperCase()
        })
        setForm({
            search:""
        })
    }
    return (
        <div>
            <form 
                class="form-inline my-2 my-lg-0"
                onSubmit={handleSubmit}
            >
                <input 
                    class="form-control mr-sm-2" 
                    type="text" 
                    placeholder="Busca por nombre..." 
                    aria-label="Search" 
                    name="search"
                    value={search}
                    onChange={handleInputChange}
                    />
                <button 
                    class="btn btn-outline-success my-2 my-sm-0" 
                    type="submit"
                >Buscar</button>
            </form>
        </div>
    )
}

export default SearchComponent
