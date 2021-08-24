import React from "react";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import { ListItemText } from "@material-ui/core";
import Web3ConnectionButtons from "./Web3ConnectionButtons";

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
          <Web3ConnectionButtons />
        </Toolbar>
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

            <Link to="/" className={classes.menuLink}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/proposal" className={classes.menuLink}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText primary="Request" />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.menuLink}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
            <Link to="/wallet" className={classes.menuLink}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText primary="Wallet" />
              </ListItem>
            </Link>
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
