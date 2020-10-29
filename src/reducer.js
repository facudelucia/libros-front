
export const initialState = {
    books: [],
    authorState: null,
    searchBook: null,
    bookId: null,
    token: localStorage.getItem("token")
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
        case "GET_TOKEN":
            localStorage.setItem("token", action.token)
            return {
                ...state,
                token: action.token
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                ...state,
                books: [],
                authorState: null,
                searchBook: null,
                bookId: null,
                token: null
            }
        default:
            return state
    }
}
export default reducer