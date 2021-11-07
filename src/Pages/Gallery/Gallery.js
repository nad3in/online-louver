import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import "./Gallery.css"
import { setUserInfo } from '../../redux/action/user_actions'
import { getArtPieces } from '../../redux/action/art_actions'
import GuestGallery from '../GuestView/GuestGallery';
import AdminGallery from '../AdminView/AdminGallery';

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
    })
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../../Assets/gallery', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="gallery-wrapper">
            <Navbar className="gallery-nav" sticky="top">
                <Container>
                    <Row className="gallery-nav-row">
                        <Col xs={15} md={11}>
                            <Navbar.Brand href="#home">Louver</Navbar.Brand>
                        </Col>
                        <Col xs={3} md={1}>
                            <div><Navbar.Brand className="username">{user.userName}</Navbar.Brand></div>
                            <Navbar.Brand className="user-role">{user.userRole}</Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            {user.userRole && user.userRole.toLowerCase() === "admin" && <AdminGallery images={images}></AdminGallery>}
            {user.userRole && user.userRole.toLowerCase() === "guest" && <GuestGallery images={images}></GuestGallery>}


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