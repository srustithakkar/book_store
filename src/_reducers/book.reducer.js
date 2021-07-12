import BookConstant from "../_constants/book.constants"
import booksList from "../Books.json"
const InitialValues = {
    books: [],
    hasMoreData: true
}

export default function BooksReducer (state = InitialValues,action){
    switch (action.type){
        case BookConstant.GET_BOOKS :{
            let books = booksList.books
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",books.length)
            return {
                ...state,
                books: [...state.books, ...books.slice(action.payload.skip, action.payload.limit) ],
                skip: state.books.length,
                hasMoreData: booksList.books.length === state.books.length ? false : true
            }
        }

        default : 
            return state
    }
}