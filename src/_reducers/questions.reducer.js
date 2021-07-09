// import QuestionConstants from "../_constants/question.constants"

// const InitialValues = {
//     questions: []
// }

// export default function questionReducer (state = InitialValues,action){
    
//     switch (action.type){
//         case QuestionConstants.GET_QUESTION_REQUEST :{
//             return {
//                 ...state,
//                 loading: true,
//             }
//         }
//         case QuestionConstants.GET_QUESTION_SUCCESS :{
//             return {
//                 ...state,
//                 questions: [...state.questions, ...action.payload.data.items],
//                 page: action.payload.page,
//                 loading: false
//             }
//         }
//         case QuestionConstants.GET_QUESTION_FAILURE :{
//             return {
//                 ...state,
//                 loading: false
//             }
//         }
//         default : 
//             return state
//     }

// }