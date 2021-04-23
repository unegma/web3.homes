import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {Container, ListItemText} from "@material-ui/core";

export default function Home(): JSX.Element {

  return (
    <section className="container left padded-container">
      <div>
        <Typography className="homeText">
          EIP Proposal Designer
        </Typography>
        <Typography className="pageText--body padded-text">For enterprise clients to submit proposals for improvements to the Ethereum Protocol. <Link to="/about" className="enterButton">More Info.</Link></Typography>
        <br/>
        <Link to="/proposal" className="enterButton">
          <ListItemText className="left padded-text" primary="Submit a proposal" />
        </Link>
      </div>
    </section>
  );
}
