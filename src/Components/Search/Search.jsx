// Import FirebaseAuth and firebase.
import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import logo from "../../images/logo.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Tour from "../Tour/Tour.jsx";
import dummy from "./dummy.json";

class Search extends React.Component {
  render() {
    return (
      <div>
        <Grid textAlign="center" style={{ height: "100vh" }}>
          <Grid.Column style={{ maxWidth: 980, margin: "64px" }} width={16}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} /> Tours
            </Header>
            <SearchBar style={{ margin: "0 auto" }} />
            <Grid padded columns={2}>
              <Grid.Column width={4}>Filters</Grid.Column>
              <Grid.Column width={8}>
                {dummy.results.map((result) => (
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
