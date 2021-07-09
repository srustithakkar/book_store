// import QuestionConstants from "../_constants/question.constants"
// import axios from "axios"

// const QuestionAction = {
//     getQuestions
// }

// export default QuestionAction;

// //action to get questions from API
// function getQuestions (page=1, limit=20) {
//     // get question request
//     const getQuestionsRequest = () => {
//         return {
//             type: QuestionConstants.GET_QUESTION_REQUEST
//         }
//     }
//     // get questions success
//     const getQuestionsSuccess = (data) => {
//         return {
//             type: QuestionConstants.GET_QUESTION_SUCCESS,
//             payload: {page, data}
//         }
//     }
//     // get questions Failure
//     const getQuestionsFailure = (data) => {
//         return {
//             type: QuestionConstants.GET_QUESTION_FAILURE
//         }
//     }
//     //dispatch 
//     return (dispatch) => {
//         dispatch(getQuestionsRequest()) 
//         axios.get(`https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=${limit}&order=desc&sort=activity&site=stackoverflow&filter=!nL_HTx9iJf`)
//         .then(response => {
//             dispatch(getQuestionsSuccess(response.data))
//         }).catch(error  => {
//             dispatch(getQuestionsFailure(error.data))
//         });
//     }
// }
