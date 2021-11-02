import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Card, Form, Button } from 'react-bootstrap'
import "./Login.css"
import { getUserInfo } from '../../redux/action/user_actions'
import Gallery from '../Gallery/Gallery';
const Login = (props) => {
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const login = (e) => {
        e.preventDefault();
        var data = {
            "user_name": userEmail,
            "password": userPassword
        }
        props.getUserInfo(data);
    }
    return (
        <div className="login-wrapper d-flex justify-content-center align-items-center">
            <Card className='login_card d-flex justify-content-center align-items-center'>
                <Card.Title className='card-title'>Log In</Card.Title>
                <div className="separator-wrapper"><div className='separator'></div>
                </div>
                <Card.Body className='login_card_body'>
                    <Form className='input-wrapper'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='login_form_label'>Email</Form.Label>
                            <Form.Control type="email" placeholder="input your email here" onChange={e => setUserEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="password-wrapper mb-3" controlId="formBasicPassword">
                            <Form.Label className='login_form_label'>Password</Form.Label>
                            <Form.Control type="password" placeholder="input your password here" onChange={e => setUserPassword(e.target.value)} />
                        </Form.Group>
                        <Button className='login_btn' variant="primary" type="submit" onClick={(e) => login(e)}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
const mapDispatchToProps = {
    getUserInfo
};
export default connect(null, mapDispatchToProps)(Login)