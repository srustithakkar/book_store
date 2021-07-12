import React from 'react';
import {DialogTitle, DialogContent} from '../_helpers/dialog';

export default function BookDailogue(props) {
    const {book} = props;
    return (
        <div>
            <DialogTitle id="question-dialog" className="text-center" onClose={props.closeDialog}>Author Info</DialogTitle>
            <DialogContent no-cache>
                <div className="text-center">
                    <div>
                        <img style={{maxAge:"0"}} className="p-3" src={book.profile_photo} alt="profile" />
                        <div>
                            <span><b>Title: </b>{book.title}</span><span></span>
                        </div>
                        <div>
                            <span><b>Author: </b><strong>{book.author}</strong></span><span></span>
                        </div>
                        <div>
                            <span><b>Description: </b></span><span>{book.author_headline}</span>
                        </div>
                        <div>
                            <span><b>City: </b></span><span>{book.author_location}</span>
                        </div>
                        <div>
                            <span><b>Language: </b></span><span>{book.author_language}</span>
                        </div>
                        <div>
                            <span><b>Date: </b></span><span>{book.date}</span>
                        </div>
                        <p className="card-subtitle mb-2 text-muted"><a href={book.url} target="_blank" rel="noreferrer">Buy Now</a></p>
                    </div>
                </div>
            </DialogContent>
        </div>
    );
}