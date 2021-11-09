import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Nav, Button, Table, Image } from 'react-bootstrap'
import Icon from "../../Assets/icons/Icon";
import "./AdminGallery.css"
import { Link } from 'react-router-dom';
import { getUsers } from "../../redux/action/users_actions"
import { deleteArtPiece } from "../../redux/action/art_actions"


const AdminGallery = (props) => {
    const [currentTab, setCurrentTab] = useState(1)
    const changeTabs = async (tabId) => {
        if (tabId === 2 && Object.keys(props.users).length === 0) {
            props.getUsers({ "numberOfElements": 5, "pageNumber": 1 })

        }
        setCurrentTab(tabId);

    }
    const deleteArtPiece = (key) => {
        props.deleteArtPiece(key)
    }
    return (
        <div className="art-pieces-wrapper">
            <Nav variant="pills" defaultActiveKey="/home" className="col-md-1 d-none d-md-block user-views">
                <Nav.Item className="nav-icon" onClick={() => { changeTabs(1) }}>
                    {currentTab === 1 && (<Nav.Link className="supervised-user-icon selected-icon"><Icon icon="supervised_user_circle_selected" size={32} ></Icon></Nav.Link>)}
                    {currentTab !== 1 && <Nav.Link className="supervised-user-icon"><Icon icon="supervised_user_circle1x" size={30} color="" ></Icon></Nav.Link>}


                </Nav.Item>
                <Nav.Item className="nav-icon" onClick={() => { changeTabs(2) }}>
                    {currentTab === 2 && <Nav.Link className="user-icon selected-icon"><Icon icon="user_selected" size={28} color=""></Icon></Nav.Link>}
                    {currentTab !== 2 && <Nav.Link className="user-icon"><Icon icon="user" size={25} color="" ></Icon></Nav.Link>}
                </Nav.Item>
            </Nav>
            <div className="col-md-11">
                <h1 className="title">{currentTab === 1 ? "Art Pieces" : "Users"}</h1>
                <Table responsive size="lg" className="table gallery-table col-md-11 d-none d-md-block  ">
                    {currentTab === 1 && (<><thead className="table-header">
                        <tr>
                            <th className="item-wrapper">Item</th>
                            <th>Name</th>
                            <th>Artist</th>
                            <th className="description-wrapper">Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        <tbody className="border-top-none">
                            {Object.keys(props.artPieces).map(key => {
                                return (
                                    <tr>
                                        <td className="art-pic-wrapper"><Image className="art-pic" src={props.images[props.artPieces[key].picture].default}></Image></td>
                                        <td>{props.artPieces[key].artName}</td>
                                        <td>{props.artPieces[key].artist}</td>
                                        <td><p className="art-description">{props.artPieces[key].description}</p><Link pathname='/gallery'>see detail</Link></td>
                                        <td><Button variant="danger" onClick={_ => deleteArtPiece(key)}>Delete</Button></td>
                                    </tr>
                                );
                            })}

                        </tbody></>)}
                    {currentTab === 2 && (<><thead className="table-header">
                        <tr>
                            <th width={'8%'} >ID</th>
                            <th width={'13%'}>User Name</th>
                            <th width={'70%'}>Phone Number</th>
                        </tr>
                    </thead>
                        <tbody className="border-top-none">
                            {Object.keys(props.users).map((key, i) => {
                                return (
                                    <tr>
                                        <td className="art-pic-wrapper">{i + 1}</td>
                                        <td className="art-pic-wrapper">{props.users[key].userName}</td>
                                        <td>{props.users[key].phoneNumber}</td>
                                    </tr>
                                );
                            })}

                        </tbody></>)}
                </Table>
            </div>
        </div >
    );
}
const mapStateToProps = state => {
    return {
        artPieces: state.artPieces,
        users: state.users
    };
};
const mapDispatchToProps = {
    getUsers,
    deleteArtPiece
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminGallery);