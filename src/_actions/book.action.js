import BookConstant from "../_constants/book.constants"

const BookAction = {
    getBooks, sortBookBy
}

function getBooks (skip = 0 , limit = 20) {
    return {
        type: BookConstant.GET_BOOKS,
        payload: {skip, limit}
    }
}
function sortBookBy (sort) {
    return {
        type: BookConstant.SORT_BOOK,
        payload: sort
    }
}

export default BookAction;