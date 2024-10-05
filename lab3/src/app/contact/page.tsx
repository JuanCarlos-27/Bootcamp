"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Contact() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        agree: false
    })


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        const agree = data.get('agree') === 'on';
        setFormData({
            email,
            password,
            agree
        })
    }

    return (
        <div className="d-flex flex-column" style={{ height: '100vh' }}>
            <Header />
            <Form className="flex-grow-1 border p-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                    <Form.Text className="text-muted">
                        Never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" name="agree" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {
                formData.email && formData.agree && formData.password && (
                    <div className="border p-5 d-flex flex-column">
                        <strong>Email: </strong>{formData.email}
                        <strong>Password: </strong>{formData.password}
                        <strong>Agree: </strong> {formData.agree ? 'Yes' : 'No'}
                    </div>
                )

            }

            <div className="mt-auto">
                <Footer />
            </div>
        </div>


    )
}