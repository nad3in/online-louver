import { Card, Form, Button } from 'react-bootstrap'
import "./Login.css"
const Login = (props) => {
    return (
        <div className="login-wrapper d-flex justify-content-center align-items-center">
            <Card className='d-flex justify-content-center align-items-center'>
                <Card.Title className='card-title'>Log In</Card.Title>
                <div className="separator-wrapper"><div className='separator'></div>
                </div>
                <Card.Body>
                    <Form className='input-wrapper'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="input your email here" />
                        </Form.Group>

                        <Form.Group className="password-wrapper mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="input your password here" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Login