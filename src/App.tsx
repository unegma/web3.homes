import React from 'react';
import './App.css';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  Theme,
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import Menu from "./components/Menu";
import { Redirect, Route, Switch } from "react-router-dom";
import PageOne from "./pages/PageOne";
import About from "./pages/About";
import Home from "./pages/Home";
import WalletPage from "./pages/WalletPage";
import { CssBaseline } from "@material-ui/core";

const drawerWidth = 240; // duplicate in SideMenu for now
let theme = createMuiTheme({
  // spacing: 4,
  palette: {
    primary: { main: '#f57d72' },
    secondary: { main: '#4d4d4d' },
  }
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
      // padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }
));

function App() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <div className={classes.root}>

        <Menu open={open} setOpen={setOpen} />

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/request" component={PageOne}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/wallet" component={WalletPage}/>
            <Redirect to="/"/>
          </Switch>
        </main>

      </div>
    </MuiThemeProvider>
  );
}

export default App;
