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
            .catch((e) => { console.log(e); return false });
    }

}
export function setArtPieces(data) {
    return {
        type: actionTypes.SET_ART_PIECES,
        data
    }

}
export function deleteArtPiece(id) {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_api_local_base_url}/art`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("jwt")
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => { return response.json() }).then(data => {
                dispatch(removePiece(data))
            })
            .catch((e) => { console.log(e); return false });
    }
}

export function removePiece(id) {
    return {
        type: actionTypes.DELETE_ART_PIECE,
        id
    }
}
