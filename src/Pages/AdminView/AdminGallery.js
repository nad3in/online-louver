import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Nav, Container, Row, Col, Button, Table, thead, tr, th, Image } from 'react-bootstrap'
import Icon from "../../Assets/icons/Icon";
import "./AdminGallery.css"


const AdminGallery = (props) => {

    return (
        <div className="art-pieces-wrapper">
            <Nav variant="pills" defaultActiveKey="/home" className="col-md-1 d-none d-md-block user-views">
                <Nav.Item className="nav-icon">
                    {/* <Nav.Link ><Icon icon="supervised_user_circle_selected" size={32} color=""></Icon></Nav.Link> */}
                    <Nav.Link className="supervised-user-icon"><Icon icon="supervised_user_circle1x" size={30} color="" ></Icon></Nav.Link>

                </Nav.Item>
                <Nav.Item className="nav-icon">
                    {/* <Nav.Link ><Icon icon="user_selected" size={28} color=""></Icon></Nav.Link> */}
                    <Nav.Link className="user-icon"><Icon icon="user" size={25} color="" ></Icon></Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="col-md-11">
                <h1>Art Pieces</h1>
                <Table hover responsive size="sm" className="col-md-11 d-none d-md-block ">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Artist</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Image src={props.images[Object.keys(props.images)[0]]}></Image></td>
                            <td>ArtName</td>
                            <td>Corey Gouse</td>
                            <td>hhajs kdjkjas jjkhjsdh akjadskjsk klkdjaskdja</td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div >
    );
}
export default AdminGallery;