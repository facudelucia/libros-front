import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
function Card({ id, title, img, author, link }) {
    return (
        <div className="card__card card mt-3" style={{ maxWidth: "540px" }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={img} className="card__img card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body card__body">
                        <h5 className="card-title card__title">{title}</h5>
                        <p className="card-text card__text">{author}</p>
                        <Link to={`/book/${id}`}  className="card__btn btn btn-info mb-2">Ver más</Link>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="card__btn btn btn-success">Descargar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
