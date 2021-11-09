import React, { useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Card, Form, Button } from 'react-bootstrap'
import "./Login.css"
import { getUserInfo } from '../../redux/action/user_actions'

const Login = (props) => {
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const login = async (e) => {
        e.preventDefault();
        var data = {
            "user_name": userEmail,
            "password": userPassword
        }
        var result = await props.getUserInfo(data);
        if (result) {
            props.history.push('/gallery');
        }
    }
    return (
        <div className="login-wrapper d-flex justify-content-center align-items-center">
            <Card className='login-card d-flex justify-content-center align-items-center'>
                <Card.Title className='card-title'>Log In</Card.Title>
                <div className="separator-wrapper"><div className='separator'></div>
                </div>
                <Card.Body className='login-card-body'>
                    <Form className='input-wrapper'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='login-form-label'>Email</Form.Label>
                            <Form.Control type="email" placeholder="input your email here" onChange={e => setUserEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="password-wrapper mb-3" controlId="formBasicPassword">
                            <Form.Label className='login-form-label'>Password</Form.Label>
                            <Form.Control type="password" placeholder="input your password here" onChange={e => setUserPassword(e.target.value)} />
                        </Form.Group>
                        <Button className='login-btn' variant="primary" type="submit" onClick={(e) => login(e)}>
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
export default withRouter(connect(null, mapDispatchToProps)(Login))