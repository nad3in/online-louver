import * as user from './actionTypes'

export function getUsers(data) {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_api_local_base_url}/user?number_of_elements=${data.numberOfElements}&page_number=${data.pageNumber}}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("jwt")
            }
        })
            .then(response => response.json())
            .then(data => { dispatch(setUsers(data)); return true; })
            .catch((e) => { console.log(e); return false });
    }

}
export function setUsers(data) {
    return {
        type: user.SET_USERS,
        data
    }

}