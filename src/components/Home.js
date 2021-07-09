import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import QuestionAction from "../_actions/questions.action";
import QuestionCard from "../components/Card";
import QuestionDialog from "./Details";
import Dialog from '@material-ui/core/Dialog';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from "./loading"

/**
  * @param {*} props
  * component for mapping data recived from reducer.
  * contains Dialog
  * @returns {Component} Home
  */
function Home (props) {
    const {questions} = props;
    const [open, setOpen] = useState(false);
    const [question, setQuestion] = useState(null)

    /**
     * @param {Event} ev
     * @param {Object} question
     * toggle dialog component
     * setQuestions
     */
    const openQuestionDialog = (ev, question) => {
        setQuestion(question);
        setOpen(true);
    }

    /**
     * @param {Event} ev
     * toggle dialog component
     */
    const closeQuestionDialog = (ev) => {
        setOpen(false);
    }

    /**
     * Wrapper for getQuestion() action
     */
    const callGetQuestions = () => {
        //pass page + 1 and limit on each scroll-end to get new 20 questions
        props.getQuestions(props.page + 1, 20)
    }

    useEffect(()=>{
        props.getQuestions()
    },[])

    return (
        <div
            style={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
        }}>
            <InfiniteScroll
                dataLength={books.length}
                next={callGetQuestions}
                hasMore={true}
                loader={<Loading/>}
            >
                {questions && questions.map((question) => (
                    <QuestionCard openQuestionDialog={openQuestionDialog} question={question}/>
                ))}
            </InfiniteScroll>
            <Dialog
                    open={open}
                    aria-labelledby="question dialog"
                    maxWidth="sm"
                    fullWidth>
                    <QuestionDialog question={question}  closeQuestionDialog={closeQuestionDialog} />
            </Dialog>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return{
//         questions: state.questionReducer.questions,
//         page: state.questionReducer.page,
//         loading: state.questionReducer.loading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getQuestions : (page, skip) => dispatch(QuestionAction.getQuestions(page, skip))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home