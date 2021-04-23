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
          <Typography className="pageText--body">This site is meant as an easy interface for corporations and business users to submit proposals for improvements to the <a href="https://ethereum.org/" target="_blank">Ethereum protocol</a>.</Typography>
          <br/>
          <Typography className="pageText--body">Each proposal will be reviewed, and then submitted to the official Ethereum team in the <a href="https://eips.ethereum.org/EIPS/eip-1" target="_blank">accepted technical format.</a></Typography>
          <br/>
          <Typography className="pageText--body">This site is by <a href="https://unegma.com" target="_blank">Unegma LTD</a> who are not currently affiliated directly with the Ethereum Foundation. For suggestions re this site, please <a href="https://unegma.com/contact" target="_blank">let us know here</a>.</Typography>
          <br/>
          <Typography className="pageText--body">For the purposes of this site, <a href="https://unegma.com" target="_blank">Unegma LTD</a> is currently affiliated with the following organisations:</Typography>
          <br/>
          <a href="https://ethldn.org" target="_blank"><img className="affiliate--ethldn" src="https://ethldn.org/wp-content/uploads/2019/05/unicorn-image-w-stars.png"></img></a>

        </Container>
      </div>
    </section>
  );
}
