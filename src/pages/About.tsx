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
          {/*<Typography paragraph className="">*/}
          {/*  Built by <a target="_blank" href="https://unegma.com">Unegma</a>*/}
          {/*</Typography>*/}

          <Typography className="pageText--body">This site is by <a href="https://unegma.com" target="_blank">Unegma LTD</a> who are not currently affiliated directly with ENS Domains or Unstoppable Domains. For suggestions re this site: <a href="https://github.com/unegma/web3.homes" target="_blank">see here</a>.</Typography>
          <br/>
          <Typography className="pageText--body">For the purposes of this site, <a href="https://unegma.com" target="_blank">Unegma LTD</a> is currently affiliated with the following organisations:</Typography>
          <br/>
          <a href="https://ethldn.org" target="_blank"><img className="affiliate--ethldn" src="https://ethldn.org/wp-content/uploads/2019/05/unicorn-image-w-stars.png"></img></a>

        </Container>
      </div>
    </section>
  );
}
