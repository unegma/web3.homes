import React from 'react';
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function About(): JSX.Element {

  return (
    <section className="container">
      <div>
        <Container maxWidth="sm">
          <Typography paragraph className="pageText--heading">
            About
          </Typography>
          <Typography paragraph className="">
            Built by <a target="_blank" href="https://unegma.com">Unegma</a>
          </Typography>
        </Container>
      </div>
    </section>
  );
}
