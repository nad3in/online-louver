import * as user from './actionTypes'

export function getUserInfo(userData) {
    return (dispatch) => {
        return fetch(`${process.env.REACT_APP_api_local_base_url}/login`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => { dispatch(setUserInfo({ userName: data["user_name"], userRole: data["user_role"], isAuthanticated: data["token" ? true : false] })); localStorage.setItem('jwt', data.token); localStorage.setItem('username', data["user_name"]); localStorage.setItem('userRole', data["user_role"]); return true; })
            .catch(() => { return false });
    }

}
export function setUserInfo(userData) {
    return {
        type: user.SET_USER_INFO,
        userData
    }

}