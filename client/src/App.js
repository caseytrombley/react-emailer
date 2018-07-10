import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            email: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });

    };

    async handleSubmit(e) {
        e.preventDefault();

        const { first_name, email, message } = this.state;

        const form = await axios.post('/api/form', {
            first_name,
            email,
            message
        });

    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label htmlFor="first_name">Name:</Label>
                    <Input
                        type="text"
                        name="first_name"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message">Message:</Label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default App;