import React, { useMemo } from 'react'
import { useStateValue } from './StateProvider';
import "./BookScreen.css"
import { Redirect, useParams } from 'react-router-dom';

function BookScreen({ history }) {
    const [{ books }] = useStateValue()

    const { id } = useParams();

    const getBookById = (id) => {
        return (
            books.find(book => book._id === id)
        );
    }
    const book = useMemo(() => getBookById(id), [id])

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push("/home");
        } else {
            history.goBack();
        }
    }

    if (!book) {
        return <Redirect to="/home" />;
    }
    const { title, author, description, image, link } = book

    return (
        <div className="bookScreen__card card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={image} className="bookScreen__img card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{author}</p>
                        <p className="card-text">{description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="bookScreen__btn btn btn-success">Descargar</a>
                        <div onClick={handleReturn} className="bookScreen__btn btn btn-danger">Volver</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookScreen
