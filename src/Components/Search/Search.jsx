// Import FirebaseAuth and firebase.
import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import logo from "../../images/logo.png";
import Tour from "../Tour/Tour.jsx";
import dummy from "./dummy.json";
import { Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    min: 0,
    max: Math.max(
      ...dummy.results.map((result) => parseFloat(result.price.amount))
    ),
    searchTerm: "",
  };

  handleChangeSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleChangeMinInput(event) {
    this.setState({
      min: event.target.value,
    });
  }

  handleChangeMaxInput(event) {
    this.setState({
      max: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Grid textAlign="center" style={{ height: "100vh" }}>
          <Grid.Column style={{ maxWidth: 980, margin: "64px" }} width={16}>
            <Link to="/">Home</Link>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} />
              Tours
            </Header>
            <Input
              value={this.state.searchTerm}
              onChange={this.handleChangeSearch.bind(this)}
            />
            <Grid padded columns={2}>
              <Grid.Column width={4}>
                Filters
                <Input
                  value={this.state.min}
                  onChange={this.handleChangeMinInput.bind(this)}
                />
                <Input
                  value={this.state.max}
                  onChange={this.handleChangeMaxInput.bind(this)}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                {dummy.results
                  .filter((result) => result.price.amount > this.state.min)
                  .filter((result) => result.price.amount < this.state.max)
                  .filter((result) =>
                    result.name.includes(this.state.searchTerm)
                  )
                  .map((result) => (
                    <Tour
                      name={result.name}
                      price={result.price.amount}
                      intro={result.intro}
                    />
                  ))}
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Search;
