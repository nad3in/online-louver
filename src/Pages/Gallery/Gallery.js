import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import "./Gallery.css"
import { setUserInfo } from '../../redux/action/user_actions'
import { getArtPieces } from '../../redux/action/art_actions'
import GuestGallery from '../GuestView/GuestGallery';

const Gallery = ({ user, setUserInfo, getArtPieces }) => {
    useEffect(async () => {
        if (!user.userName) {
            setUserInfo({
                "userName": localStorage.getItem("username"),
                "userRole": localStorage.getItem("userRole"),
                "isAuthanticated": true
            })
        }
        getArtPieces({ numberOfElements: 13, pageNumber: 1 });
    }, [])
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../../Assets/gallery', false, /\.(png|jpe?g|svg)$/));

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
            <GuestGallery images={images}></GuestGallery>

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