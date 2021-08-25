import React from 'react';
import { Box, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import WalletDetails from "../components/WalletDetails";

export default function WalletPage(): JSX.Element {

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography paragraph variant="h2">
          My Wallet
        </Typography>
        <WalletDetails/>
      </Box>
    </Container>
  );
}
