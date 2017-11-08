//Actions

const GET_IDEAS = 'GET_IDEAS';
const GET_USERS = 'GET_USERS';

//Action Creators

const getIdeas = (ideas) => ({
    type: GET_IDEAS,
    payload: ideas
});

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
});