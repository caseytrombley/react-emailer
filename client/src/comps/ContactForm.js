import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    async handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        });


    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                        type="text"
                        htmlFor="name"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        type="text"
                        htmlFor="email"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message">Message:</Label>
                    <Input
                        type="textarea"
                        htmlFor="message"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}

export default ContactForm;