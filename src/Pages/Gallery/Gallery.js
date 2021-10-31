import React, { useState } from 'react';
import { Navbar, Container, Card, Row, Button, Modal } from 'react-bootstrap'
import "./Gallery.css"

const Gallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [cardDetails, setCardDetails] = useState(null);
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../../Assets/gallery', false, /\.(png|jpe?g|svg)$/));
    const showDetails = (key) => {
        setCardDetails({ image: key, describe: " Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc efficitur diam orci. Suspendisse ornare, turpis ut vulputate aliquam, arcu dolor ornare mi, id placerat metus dui sed erat. Fusce sagittis enim molestie turpis pellentesque" })
        setShowModal(!showModal);
    }
    return (
        <div className="gallery-wrapper">
            <Navbar sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Louver</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='body'>
                <h1>Gallery</h1>
                <div>
                    <Row md={4}>
                        {Object.keys(images).map((key, i) => {
                            return (<Card className="panting">
                                <Card.Img variant="top" src={images[key].default} fluid alt="panting" />
                                <Card.Body>
                                    <Button variant="primary" className="artist-name" onClick={() => showDetails(key)} > Glen Williams</Button>
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
                    <Modal.Body >
                        <Card>
                            <Card.Img className="painting-image" src={images[cardDetails.image].default} fluid alt="panting" variant="top" ></Card.Img>
                            <Card.Text className="painting-discreption">{cardDetails.describe}</Card.Text>
                        </Card>
                    </Modal.Body>
                </Modal>
            }
        </div >
    )
}
export default Gallery