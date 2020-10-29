import React from 'react'
import "./Card.css"
import { useStateValue } from './StateProvider'
function Card({id, title, img, description, author, link}) {
    const[{bookId}, dispatch]= useStateValue()
    const handleClick = (e) => {
        e.preventDefault()
        dispatch({
            type: "GET_ID",
            bookId: id
        })
    }
    return (
            <div class="card__card card mt-3" style={{maxWidth:"540px"}}>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={img} class="card__img card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{author}</p>
                            <div onClick={handleClick} className="card__btn btn btn-info mb-2">Ver más</div>
                            <a href={link} target="_blank" className="card__btn btn btn-success">Descargar</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card
