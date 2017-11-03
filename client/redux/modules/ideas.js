// //Actions

// const GET_IDEAS = 'GET_IDEAS';
// const GET_USER_IDEAS = 'GET_USER_IDEAS';
// const GET_IDEAS_ERROR = 'GET_IDEAS_ERROR';


// //ACTION CREATORS

// const getIdeas = (ideas) => ({
//     type: GET_IDEAS,
//     payload: ideas
// });

// const getUserIdeas = (users) => ({
//     type: GET_USER_IDEAS,
//     payload: users
// });

// const getIdeasError = (error) => ({
//     type: GET_IDEAS_ERROR,
//     payload: error
// });

// //REDUCERS

// export default (
//     state= { ideasData: [], error: '' },
//     action
// )=>{
//     switch (action.type){
//         case GET_IDEAS:
//             return {...state, ideasData: action.payload, error: ''};
//         case GET_USER_IDEAS:
//             return {...state, ideasData: action.payload, error: '',};
//         case GET_IDEAS_ERROR:
//             return {...state, error: action.payload };
//         default:
//             return state
//     }
// };