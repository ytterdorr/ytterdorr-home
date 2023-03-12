import React from "react";
import { Alert, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ReactStrapTutorial = () => {
    return (
        <div>
            <Alert color="info">
                Hello, I am alert
            </Alert>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your unique password"
                        type="password"
                    />
                    <Button>
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default ReactStrapTutorial;