import * as actionTypes from './actionTypes'

export function getArtPieces(data) {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_api_local_base_url}/art?number_of_elements=${data.numberOfElements}&page_number=${data.pageNumber}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("jwt")
            }
        })
            .then(response => { return response.json() }).then(data => dispatch(setArtPieces(data)))
            .catch(() => { return false });
    }

}
export function setArtPieces(data) {
    return {
        type: actionTypes.SET_ART_PIECES,
        data
    }

}