// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { Grid, Header, Image } from "semantic-ui-react";
import logo from "../../images/logo.png";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAC5MOovHB8pjhQ1NmP-ixSZuqYIMaXJRk",
  authDomain: "tourism-kata.firebaseapp.com",
  databaseURL: "https://tourism-kata.firebaseio.com",
  projectId: "tourism-kata",
  storageBucket: "tourism-kata.appspot.com",
  messagingSenderId: "417946319175",
  appId: "1:417946319175:web:e19750c80219b29f263462",
  measurementId: "G-B0T0XZLTEW",
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

class Login extends React.Component {
  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} /> Login
            </Header>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
