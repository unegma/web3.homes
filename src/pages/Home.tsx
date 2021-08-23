import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Container, ListItemText} from "@material-ui/core";

export default function Home(): JSX.Element {

  return (
    <>
      <section className="container left padded-container">
        <div>
          <Typography className="homeText">
            Web3 Homes
          </Typography>
          <Typography className="pageText--body padded-text">Your one stop shop for on-boarding into the Web3 ecosystem.</Typography>
          <br/>
          <Link to="/proposal" className="enterButton">
            <ListItemText className="left padded-text" primary="Get Started" />
          </Link>
        </div>
      </section>
      <section className="container left padded-container home__section2">
        <div>
          <Typography className="homeText home__section2-text">
            Section2
          </Typography>
          <Typography className="pageText--body padded-text home__section2-text">Your one stop shop for on-boarding into the Web3 ecosystem.</Typography>
          <br/>
          <Link to="/proposal" className="enterButton">
            <ListItemText className="left padded-text" primary="Get Started" />
          </Link>
        </div>
      </section>
    </>
  );
}
