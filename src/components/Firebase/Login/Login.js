import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLodding] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('')
            setLodding(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to sign in')
        }
        setLodding(false);
    };
    console.log(currentUser && currentUser.email)
    return (
        <Container className="mt-5 d-flex align-items-center justify-content-center">
        <div className="w-100" style={{maxWidth: "400px"}} >
        <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" className="w-100 signup">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
                <div className="w-100 text-center mt-2">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
        </div>
        </Container>
    );
};

export default Login;