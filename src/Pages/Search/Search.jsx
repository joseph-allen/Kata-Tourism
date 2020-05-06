// Import FirebaseAuth and firebase.
import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import logo from "../../images/logo.png";
import Tour from "../../Components/Tour/Tour.jsx";
import { Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      min: 0,
      max: 1000,
      searchTerm: "",
      data: [],
    };

    this.getResultsWithinSearch = this.getResultsWithinSearch.bind(this);
  }

  componentWillMount() {
    this.renderMyData();
  }

  renderMyData() {
    fetch(
      "https://www.triposo.com/api/20200405/tour.json?location_ids=Melbourne&count=10&fields=name,price,intro&order_by=-score",
      {
        headers: {
          "X-Triposo-Account": "ZX1UJ378",
          "X-Triposo-Token": "f4xiu4hclcnu7coye4eorxb1o67vtcpp",
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson.results });
      })
      .catch((error) => {
        console.error(error);
      });
  }

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

  getResultsWithinRange(results) {
    // return results within min and max
  }

  getResultsWithinSearch(result) {
    const searchTerm = this.state.searchTerm;
    // return results within search, and convert to lowercase
    return result.name.toLowerCase().includes(searchTerm.toLowerCase());
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
                {this.state.data
                  .filter((result) => result.price.amount > this.state.min)
                  .filter((result) => result.price.amount < this.state.max)
                  .filter(this.getResultsWithinSearch)
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
