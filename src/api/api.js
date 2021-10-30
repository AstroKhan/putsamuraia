import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "525bb8c0-bfc2-43b0-8b84-fa4bf78b2a90"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data;
});
},
follow(userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
},
unfollow(userId) {
   return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
}
}



export const getUsers2 = (currentPage = 1, pageSize = 10) => {
return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
.then(response => {
    return response.data;
});
}


