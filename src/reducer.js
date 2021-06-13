
export const initialState = {
    books: [],
    authorState: null,
    searchBook: null,
    bookId: null,
}


const reducer = (state, action) => {

    switch (action.type) {
        case "GET_BOOKS":
            return {
                ...state,
                books: action.books
            }
        case "GET_AUTHOR":
            return {
                ...state,
                authorState: action.authorState,
                searchBook: null,
                bookId: null
            }
        case "ALL_AUTHOR":
            return {
                ...state,
                authorState: null,
                searchBook: null,
                bookId: null
            }
        case "SEARCH_BOOK":
            return {
                ...state,
                authorState: null,
                searchBook: action.searchBook,
                bookId: null
            }
        case "GET_ID":
            return {
                ...state,
                bookId: action.bookId,
                authorState: null,
                searchBook: null
            }
        default:
            return state
    }
}
export default reducer