import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};
const HomepageHeading = ({ mobile }) => (
  <Container
    text
    style={{
      backgroundImage: { logo },
    }}
  >
    <Header
      as="h1"
      content="Koala Tours"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "3em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Image src={logo} style={{ width: "300px", margin: "0 auto" }} />
    <Header
      as="h2"
      content="See Melbourne"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Link to="/search">
      <Button size="huge" color="teal">
        Search <Icon name="right arrow" />
      </Button>
    </Link>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 700,
              padding: "1em 0em",
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Link to="/">
                  <Menu.Item as="a" color="teal">
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/search">
                  <Menu.Item as="a" color="teal">
                    Tours
                  </Menu.Item>
                </Link>
                <Menu.Item position="right">
                  <Link to="/login">
                    <Button as="a" inverted={!fixed} color="teal">
                      Log in
                    </Button>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () =>
    this.setState({
      sidebarOpened: false,
    });

  handleToggle = () =>
    this.setState({
      sidebarOpened: true,
    });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Link to="/">
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
          </Link>
          <Link to="/search">
            <Menu.Item as="a"> Tours </Menu.Item>
          </Link>
          <Link to="/login">
            <Menu.Item as="a"> Log in </Menu.Item>
          </Link>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            color="teal"
            inverted
            textAlign="center"
            style={{
              minHeight: 350,
              padding: "1em 0em",
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer> {children} </DesktopContainer>
    <MobileContainer> {children} </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment
      style={{
        padding: "8em 0em",
      }}
      vertical
    >
      <Container text>
        <Header
          as="h3"
          color="teal"
          style={{
            fontSize: "2em",
          }}
        >
          See Australia
        </Header>
        <p
          style={{
            fontSize: "1.33em",
          }}
        >
          Melbourne is Australia's greatest city. Explore tours availible in the
          Melbourne area today with Koala Tours.
        </p>
      </Container>
    </Segment>
    <Segment
      inverted
      vertical
      style={{
        padding: "5em 0em",
      }}
    >
      <Container>
        <Grid divided inverted stackable center>
          <Grid.Row>
            <Grid.Column>
              <Header as="h4" inverted>
                Contact us
              </Header>
              <Button color="teal">
                <Icon
                  name="twitter"
                  style={{
                    margin: "0 auto",
                  }}
                />
              </Button>
              <Button color="blue">
                <Icon
                  name="facebook official"
                  style={{
                    margin: "0 auto",
                  }}
                />
              </Button>
              <Button color="red">
                <Icon
                  name="youtube"
                  style={{
                    margin: "0 auto",
                  }}
                />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
