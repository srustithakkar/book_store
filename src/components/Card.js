import React from 'react';

export default function QuestionCard(props) {

    const {question} = props;
    return (
        <div onClick={(ev) => props.openQuestionDialog(ev, question)} className="card align-center" style={{width: "90vw", margin: "auto",  marginTop: "20px"}}>
            <div className="card-body">
                <h5 className="card-title"> {question.title}</h5>
                <div className="d-flex align-items-center">
                    <div className="d-flex p-2 align-items-center">
                        <p className="card-subtitle mb-2 text-muted">Date: &nbsp;</p>
                        <p>{(new Date(question.creation_date)).toLocaleDateString("en-US")}</p>
                    </div>
                    <div className="d-flex p-2">
                        <p className="card-text text-muted">Auther:  &nbsp;</p>
                        <p>{question.owner.display_name}</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}
