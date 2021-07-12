import BookConstant from "../_constants/book.constants"
import {sortBy} from "lodash"
import booksList from "../Books.json"
const InitialValues = {
    books: [],
    hasMoreData: true,
    isSort: false
}

export default function BooksReducer (state = InitialValues,action){
    switch (action.type){
        case BookConstant.GET_BOOKS :{
            let books = booksList.books
            return {
                ...state,
                books: [...state.books, ...books.slice(action.payload.skip, action.payload.limit) ],
                skip: state.books.length,
                hasMoreData: booksList.books.length === state.books.length ? false : true
            }
        }
        case BookConstant.SORT_BOOK : {
            return {
                ...state,
                isSort: action.payload === "none" ? false : true,
                books: action.payload !== "none" ? [...sortBy(state.books, [action.payload])] : [...state.books]
            }
        }

        default : 
            return state
    }
}