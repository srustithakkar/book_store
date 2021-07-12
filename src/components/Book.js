import React from "react"
import { Carousel } from 'react-responsive-carousel';

function Book (props){
    let {book, openDialog} = props

    return(
        
        <div className="col-3 mt-2 mb-2"  onClick={(ev)=>openDialog(ev, book)}>
            <div className="card shadow">
                <div className="card-body">
                    <div onClick={(ev) => ev.stopPropagation()}>
                        <Carousel showThumbs={false} >
                            {book.image.map((img)=>{
                                return <img src={img} alt="Book Cover"/>
                            })}
                        </Carousel>
                    </div>
                    <div>
                        <h5><u><strong>{book.title}</strong></u></h5>
                    </div>
                    <div>
                        <span><b>Description: </b></span><span>{book.discription}</span>
                    </div>
                    <div>
                        <span><b>Author: </b></span><span>{book.author}</span>
                    </div>
                    <div>
                        <span><b>Date: </b></span><span>{book.date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book