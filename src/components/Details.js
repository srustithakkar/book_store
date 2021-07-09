import React from 'react';
import {DialogTitle, DialogContent} from '../_helpers/dialog';


export default function QuestionDialog(props) {
    const {question} = props;
    debugger
    return (
        <div>
            <DialogTitle id="question-dialog" onClose={props.closeQuestionDialog}>Question Dialog</DialogTitle>
            <DialogContent>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="card-subtitle mb-2 text-muted"><a href={question.link} target="_blank" rel="noreferrer">search on stack</a></p>
                            <p dangerouslySetInnerHTML={{ __html: question.body }} ></p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </div>
    );
}
