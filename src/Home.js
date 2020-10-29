import React, {useState, useEffect} from 'react';
import './Home.css';
import Header from './Header';
import axios from "axios"
import BookList from "./BookList"
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import Pagination from './Pagination';

function Home() {
  const[{books, authorState, searchBook, bookId}, dispatch]= useStateValue()

  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage, setBooksPerPage] = useState(12)

  useEffect(() => {
    const getBooks = async () =>{
      await axios.get("https://yapoelpdf.herokuapp.com/books")
        .then(datos=>{
          dispatch({
            type:"GET_BOOKS",
            books: datos.data.books
          })
        })
    }
    getBooks()
  }, [])

  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <>
    <Header/>
    <div className="home">
 
      <BookList booksPaginate={currentBooks} books={books} id={bookId} author={authorState} title={searchBook}/>
      {(!bookId && !authorState && !searchBook) && <Pagination booksPerPage={booksPerPage} totalBooks={books.length}paginate={paginate}/>}
    </div>
    <Footer />
    </>
  );
}

export default Home;
