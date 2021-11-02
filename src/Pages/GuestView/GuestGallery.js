import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Button, Modal } from 'react-bootstrap'
import "./GuestGallery.css"
import { setUserInfo } from '../../redux/action/user_actions'
import { getArtPieces } from '../../redux/action/art_actions'

const GuestGallery = ({ artPieces, images }) => {
    const [cardDetails, setCardDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const showDetails = (key) => {
        var artPiece = artPieces[key]
        setCardDetails({ image: artPiece.picture, description: artPiece.description, artist: artPiece.artist })
        setShowModal(!showModal);
    }
    return (
        <div className='body'>
            <h1 className="gallery_header">Gallery</h1>
            <div>
                <Row md={4}>
                    {artPieces && Object.keys(artPieces).map((key, i) => {
                        return (<Card className="panting" key={key}>
                            <Card.Img variant="top" src={images[artPieces[key].picture].default} alt="panting" />
                            <Card.Body>
                                <Button variant="primary" className="artist-name" onClick={() => showDetails(key)} > {artPieces[key].artist}</Button>
                            </Card.Body>
                        </Card>);
                    })}
                </Row>

            </div >
            {showModal &&
                <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    dialogClassName="painting-details"
                    aria-labelledby="painting details"

                >
                    <Modal.Body className='painting-wrapper'>
                        <Card className='painting-card'>
                            <Card.Img className="painting-image" src={images[cardDetails.image].default} fluid alt="panting" variant="top" ></Card.Img>
                            <span className='painting-text-wrapper'>
                                <Card.Text className="painting-artist">{cardDetails.artist}</Card.Text>
                                <Card.Text className="painting-discreption">{cardDetails.description}</Card.Text>
                            </span>

                        </Card>
                    </Modal.Body>
                </Modal>
            }
        </div >
    );

}
const mapStateToProps = state => {
    return {
        artPieces: state.artPieces
    };
};
const mapDispatchToProps = {
    setUserInfo,
    getArtPieces
};
export default connect(mapStateToProps, mapDispatchToProps)(GuestGallery)