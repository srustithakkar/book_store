import React, {useEffect, useState} from "react"
import {connect} from "react-redux"
import BookAction from "../_actions/book.action"
import Book from "./Book.js"
import Dialog from '@material-ui/core/Dialog';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardDialog from "./CardDialog"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


function Home (props) {
    const [book, setBook] = useState()
    const [open, setOpen] = useState(false)
    const [sort, setSort] = useState()

    useEffect(()=>{
        props.getBooks()
    },[])

    const openDialog = (ev, book) => {
        setBook(book)
        setOpen(true)
    }
    const loadBooks = () => {
        props.getBooks(props.skip, props.skip + 20)
    }
    const handleChange = (ev) => {
        setSort(ev.target.value) 
        props.sortBookBy(ev.target.value)
    }
    const closeDialog = () => {
        setOpen(false)
    }
    const {books} =  props
    
    return(
        <div>
            <nav class="navbar-dark bg-dark justify-content-between border-bottom container-fluid">
                <div className="row">
                    <div className="col-9 m-auto">
                        <div class="navbar-brand ">BookStore</div>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12">
                                <FormControl variant="filled" className="p-0" margin="dense" fullWidth >
                                    <InputLabel id="demo-simple-select-label" className="bg-light">Sort By</InputLabel>
                                        <Select
                                            className="bg-light"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={sort}
                                            onChange={handleChange}
                                        >
                                        <MenuItem value="none">None</MenuItem>
                                        <MenuItem value="title">Title</MenuItem>
                                        <MenuItem value="author">Author</MenuItem>
                                        <MenuItem value="date">Date</MenuItem>
                                        </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid bg-dark p-4">
                <InfiniteScroll
                dataLength={books.length} //This is important field to render the next data
                next={loadBooks}
                hasMore={props.hasMoreData}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }>
                <div className="row">
                    {books.map((book) => {
                        return (
                            <React.Fragment key={book.index}>
                                <Book book= {book} openDialog={openDialog} />
                            </React.Fragment>
                        ) 
                    })}
                </div>
                </InfiniteScroll>
                <Dialog open={open} >
                    <CardDialog book={book} closeDialog={closeDialog} />
                </Dialog>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        books: state.BooksReducer.books,
        skip: state.BooksReducer.skip,
        hasMoreData: state.BooksReducer.hasMoreData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: (skip, limit) => dispatch(BookAction.getBooks(skip, limit)),
        sortBookBy: (sort) => dispatch(BookAction.sortBookBy(sort))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)