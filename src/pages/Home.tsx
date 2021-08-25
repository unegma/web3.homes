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
          Finding Homes for Web3 Wallet Addresses.
        </Typography>

        <Typography className="italic error" >
          <i>(This site is currently a POC/MVP)</i><br/><br/>
        </Typography>
        {/*<Typography className="">Your one stop shop for on-boarding into the Web3 ecosystem.</Typography>*/}
        <Typography className="">When navigating around the internet, <br/>Do most of us remember and use:&nbsp;
          <a href="http://172.217.169.78" target="_blank">172.217.169.78</a><br/>
          Or human rememberable words: <a href="https://google.com" target="_blank">google.com</a>?
          <br/><br/>
        </Typography>
        <Typography className="">
          <b>Why should this be any different in Web3.</b><br/><br/>
        </Typography>
        <Typography noWrap>

          Would you prefer to say:&nbsp;<br/>
          Please send 1 ETH to: "<a href="#">0xEF9D542Cd93c6300b5BB755dff4033Eb0c8f8e01</a>"<br/>
          Or "Please send to: <a href="#">unegma.eth</a>"?<br/><br/>
        </Typography>
        <Typography>
          <sub>(Take care when using your domain name with some services such as exchanges).</sub>
        </Typography>
        <br/>
        <Button variant="contained" color="primary" href="/proposal">
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
