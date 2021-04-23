import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {ListItemText} from "@material-ui/core";

export default function Home(): JSX.Element {

  return (
    <section className="container">
      <div>
        <Typography className="homeText">
          EIP Design
        </Typography>
        <Link to="/proposal" className="enterButton">
          <ListItemText primary="enter!" />
        </Link>
      </div>
    </section>
  );
}
