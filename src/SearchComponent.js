import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function SearchComponent() {
    const history = useHistory()

    const [form, setForm] = useState({
        busqueda: ""
    })

    const { busqueda } = form

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (busqueda.trim() === "") {
            return
        }
        history.push(`/search/${busqueda}`)
        setForm({
            busqueda: ""
        })
    }
    
    return (
        <div>
            <form
                className="form-inline my-2 my-lg-0"
                onSubmit={handleSubmit}
            >
                <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Busca por nombre..."
                    aria-label="Search"
                    name="busqueda"
                    value={busqueda}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >Buscar</button>
            </form>
        </div>
    )
}

export default SearchComponent
