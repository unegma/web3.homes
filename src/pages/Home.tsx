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
          {/*<Typography className="pageText--body padded-text">Your one stop shop for on-boarding into the Web3 ecosystem.</Typography>*/}
          <Typography className="pageText--body padded-text">When navigating around the internet, <br/>Do most of us remember and use:&nbsp;
            <a href="http://172.217.169.78" target="_blank">172.217.169.78</a><br/>
            Or human rememberable words: <a href="https://google.com" target="_blank">google.com</a>?

          </Typography>
          <Typography className="pageText--body padded-text">
            <b>Why should this be any different in Web3.</b>
          </Typography>
          <Typography className="pageText--body padded-text">

            Would you prefer to say:&nbsp;<br/>
            Please send 1 ETH to: "<a href="#" target="_blank">0xEF9D542Cd93c6300b5BB755dff4033Eb0c8f8e01</a>"<br/>
            Or "Please send to: <a href="#">unegma.eth</a>"?<br/><br/>
            <sub>(Take care when using your domain name with some services such as exchanges).</sub>
          </Typography>
          <br/>
          <Link to="/proposal" className="enterButton">
            <ListItemText className="left padded-text" primary="Get Started" />
          </Link>
        </div>
      </section>
      {/*<section className="container left padded-container home__section2">*/}
      {/*  <div>*/}
      {/*    <Typography className="homeText home__section2-text">*/}
      {/*      Section2*/}
      {/*    </Typography>*/}
      {/*    <Typography className="pageText--body padded-text home__section2-text">Your one stop shop for on-boarding into the Web3 ecosystem.</Typography>*/}
      {/*    <br/>*/}
      {/*    <Link to="/proposal" className="enterButton">*/}
      {/*      <ListItemText className="left padded-text" primary="Get Started" />*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
}
