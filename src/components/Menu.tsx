import React, {useEffect, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import {Box, Button, ListItemText} from "@material-ui/core";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {Web3Provider} from "@ethersproject/providers";
const INFURA_ID = process.env.REACT_APP_INFURA_ID;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_ID
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

console.log("Web3Modal instance is", web3Modal);

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
    },
    menuLink: {
      textDecoration: 'none',
      color: 'Black',
    },
    menuLinkSandbox: {
      textDecoration: 'none',
      color: 'Gray',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function Menu(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  const handleDrawerClose = () => {
    props.setOpen(false);
  };


  const [provider, setProvider] = useState<any>();
  const [web3, setWeb3] = useState<any>();
  const [accountId, setAccountId] = useState<any>();


  async function initProvider() {
    console.log('here1')
    let provider, web3;
    try {
      console.log('here2')
      provider = await web3Modal.connect();
      web3 = new Web3(provider);
      setWeb3(web3);
      console.log('here3')
    } catch (error: any) {
      console.log('here4')
      console.log(error);
      return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts: any) => {
      console.log(accounts);
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId: any) => {
      console.log(chainId);
    });


    // // Subscribe to provider connection
    provider.on("connect", (info: { chainId: number }) => {
      console.log(info);
    });
    //
    // // Subscribe to provider disconnection
    provider.on("disconnect", (error: { code: number; message: string }) => {
      console.log(error);
    });

    setProvider(provider);
  }

  async function closeProvider (provider: any) {
    console.log("Killing the wallet connection", provider);

    try {
      if (provider.disconnect) { // todo check that all providers have this method
        await provider.disconnect();

        // https://github.com/Web3Modal/web3modal-vanilla-js-example/blob/master/example.js
        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        setProvider(null);
      }
    } catch (error: any) {
      console.log('Failed to disconnect provider');
    }

    // selectedAccount = null;
  }



  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            <Link to="/" className="logo">
              Web3 Homes
            </Link>
          </Typography>
          <Button variant="contained" color="secondary" className="connectButton" onClick={initProvider}>
            Connect
          </Button>
          <Button variant="contained" color="secondary" className="disconnectButton" onClick={() => {closeProvider(provider)}}>
            Disconnect
          </Button>
        </Toolbar>

        {/*<div style={{*/}
        {/*  float: 'right'*/}
        {/*}}>*/}
        {/*  <Account/>*/}
        {/*</div>*/}
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        onKeyDown={handleDrawerClose} // todo find out if this is needed as well as handleDrawerClose on ListItems
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <div className={classes.menuContainer}>
          <List>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/" className={classes.menuLink}>
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/proposal" className={classes.menuLink}>
                <ListItemText primary="Request" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/about" className={classes.menuLink}>
                <ListItemText primary="About" />
              </Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography><a href="https://unegma.com" target="_blank">Unegma LTD</a></Typography>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
}
