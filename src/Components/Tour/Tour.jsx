import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import mel_pic from "../../images/Melbourne.jpeg";

const Tour = (props) => (
  <div>
    <Grid columns={2}>
      <Card style={{ width: "800px", margin: "16px" }}>
        <Card.Content>
          <Card.Header>
            {props.name} <span style={{ color: "green" }}>${props.price}</span>
          </Card.Header>
          <Grid columns={2}>
            <Grid.Column>
              <Image style={{ width: "400px" }} src={mel_pic} />
            </Grid.Column>
            <Grid.Column>
              <Card.Description>{props.intro}</Card.Description>
            </Grid.Column>
          </Grid>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {props.intro.charCodeAt(0);} Attendees
        </Card.Content>
      </Card>
    </Grid>
  </div>
);

export default Tour;
