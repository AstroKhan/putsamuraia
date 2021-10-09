
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
        users: [
          {id: 1, photoUrl: 'https://static.wikia.nocookie.net/shadowandbone/images/3/32/Nikolai_Lantsov_by_Kevin_Wada.jpg',
           followed: false, fullName: 'Nikolai', status: 'i`m a boss', location: {city: 'Spb', country: 'Russia'}},
          {id: 2, photoUrl: 'https://roscongress.org/upload/resize_cache/iblock/36c/289_289_2/rian_03054251.hr_.ru_.jpg',
           followed: true, fullName: 'Dimich', status: 'a teacher', location: {city: 'Minsk', country: 'Belarus'}},
          {id: 3, photoUrl: 'https://d38we5ntdyxyje.cloudfront.net/59673/profile/avatar_medium_square.jpg',
           followed: false, fullName: 'Zelik', status: 'some body', location: {city: 'Kiev', country: 'Ukraine'}}
      ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
        return {
            ...state,
             users: state.users.map(u => {
                 if (u.id === action.userId) {
                    return {...u, followed: true}
                 }
                 return u;
             })
            }
        case UNFOLLOW:
            return {
                ...state,
                 users: state.users.map(u => {
                     if (u.id === action.userId) {
                        return {...u, followed: false}
                     }
                     return u;
                 })
                }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
                }
        default: return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;