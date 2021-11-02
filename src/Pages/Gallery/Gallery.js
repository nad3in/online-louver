import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Card, Row, Col, Button, Modal } from 'react-bootstrap'
import "./Gallery.css"
import { setUserInfo } from '../../redux/action/user_actions'
import { getArtPieces } from '../../redux/action/art_actions'

const Gallery = ({ user, setUserInfo, getArtPieces }) => {
    const [showModal, setShowModal] = useState(false);
    const [cardDetails, setCardDetails] = useState(null);
    const [artPieces, setArtPieces] = useState();
    useEffect(async () => {
        if (!user.userName) {
            setUserInfo({
                "userName": localStorage.getItem("username"),
                "userRole": localStorage.getItem("userRole"),
                "isAuthanticated": true
            })
        }
        const pieces = await getArtPieces({ numberOfElements: 13, pageNumber: 1 });
        setArtPieces(pieces)
    }, [])
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../../Assets/gallery', false, /\.(png|jpe?g|svg)$/));
    const showDetails = (key) => {
        var artPiece = artPieces[key]
        setCardDetails({ image: artPiece.picture, description: artPiece.description, artist: artPiece.artist })
        setShowModal(!showModal);
    }
    return (
        <div className="gallery-wrapper">
            <Navbar className="gallery_nav" sticky="top">
                <Container>
                    <Row className="gallery_nav_row">
                        <Col xs={15} md={11}>
                            <Navbar.Brand href="#home">Louver</Navbar.Brand>
                        </Col>
                        <Col xs={3} md={1}>
                            <div><Navbar.Brand className="username">{user.userName}</Navbar.Brand></div>
                            <Navbar.Brand className="user_role">{user.userRole}</Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <div className='body'>
                <h1 className="gallery_header">Gallery</h1>
                <div>
                    <Row md={4}>
                        {artPieces && Object.keys(artPieces).map((key, i) => {
                            return (<Card className="panting">
                                <Card.Img variant="top" src={images[artPieces[key].picture].default} fluid alt="panting" />
                                <Card.Body>
                                    <Button variant="primary" className="artist-name" onClick={() => showDetails(key)} > {artPieces[key].artist}</Button>
                                </Card.Body>
                            </Card>);
                        })}
                    </Row>

                </div >
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
    )
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = {
    setUserInfo,
    getArtPieces
};
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)