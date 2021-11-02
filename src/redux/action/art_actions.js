import * as actionTypes from './actionTypes'

export function getArtPieces(data) {
    return () => {
        return fetch(`${process.env.REACT_APP_api_local_base_url}/art?number_of_elements=${data.numberOfElements}&page_number=${data.pageNumber}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("jwt")
            }
        })
            .then(response => { return response.json() })
            .catch(() => { return false });
    }

}