import BookConstant from "../_constants/book.constants"

const BookAction = {
    getBooks
}

function getBooks (skip = 0 , limit = 20) {
    return {
        type: BookConstant.GET_BOOKS,
        payload: {skip, limit}
    }
}
function sortBook () {
    return {
        type: BookConstant.SORT_BOOK
    }
}

export default BookAction;