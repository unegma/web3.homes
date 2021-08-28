import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Box, Button, Container } from "@material-ui/core";

export default function Home(): JSX.Element {

  return (
    <Container maxWidth="md">
      <Box my={4} className="longtext-box">
        <Typography variant="h2">
          Web3.Homes
        </Typography>

        <Typography  variant="h4">
          Finding Homes for Web3 Wallets.
        </Typography>

        <Typography className="italic error" >
          <i>(This site is currently a POC/MVP)</i><br/><br/>
        </Typography>
        {/*<Typography className="">Your one stop shop for on-boarding into the Web3 ecosystem.</Typography>*/}
        <Typography className="">
          When you want a parcel delivered, do you give:<br/>
          Your address, or your GPS co-ordinates..?
          <br/><br/>
        </Typography>
        <Typography className="">
          <b>It should be like this on the blockchain too!</b><br/><br/>
        </Typography>
        <Typography noWrap>
          Send 1ETH to: <a href="#">unegma.eth</a><br/>
          (Not to: <a href="#">0xEF9D542Cd93c6300b5BB755dff4033Eb0c8f8e01</a>)
        </Typography>
        <Typography>
          <sub>(Take care when using your web3 home with some services such as exchanges).</sub>
        </Typography>
        <br/>
        <br/>
        <Button variant="contained" color="primary" href="/request">
          Get Started
        </Button>
      </Box>
      {/*<section className="container left padded-container home__section2">*/}
      {/*  <div>*/}
      {/*    <Typography className="homeText home__section2-text">*/}
      {/*      Section2*/}
      {/*    </Typography>*/}
      {/*    <Typography className=" home__section2-text">Your one stop shop for on-boarding into the Web3 ecosystem.</Typography>*/}
      {/*    <br/>*/}
      {/*    <Link to="/proposal" className="enterButton">*/}
      {/*      <ListItemText className="left" primary="Get Started" />*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </Container>
  );
}
