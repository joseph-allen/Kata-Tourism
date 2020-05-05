import React from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import logo from "../../images/logo.png";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src={logo} /> Sign-up
      </Header>
      <Form size="large">
        <Segment>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
