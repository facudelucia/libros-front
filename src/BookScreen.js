import React from 'react'
import { useStateValue } from './StateProvider';
import "./BookScreen.css"
function BookScreen({ id, title, author, description, img, link}) {
    const[{}, dispatch]= useStateValue()
    const handleReturn = () => {
        dispatch({
            type:"ALL_AUTHOR"
        })
    } 
    return (
            <div class="bookScreen__card card mt-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={img} class="bookScreen__img card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{author}</p>
                            <p class="card-text">{description}</p>
                            <a href={link} target="_blank" className="bookScreen__btn btn btn-success">Descargar</a>
                            <div onClick={handleReturn} className="bookScreen__btn btn btn-danger">Volver</div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default BookScreen
