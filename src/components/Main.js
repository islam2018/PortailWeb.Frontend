import React, {Component, ReactPropTypes as PropTypes} from 'react';
import withTheme from "@material-ui/core/styles/withTheme";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from "@material-ui/core/Drawer";
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core/styles";
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {connect} from "react-redux";
import {SignedIn} from "../actions/authActions";
import Header from "./Header";
import Navigation from "./Navigation";
import Products from "./Products";
import Home from "./Home";
import NotFound404 from "./404NotFound";
import {Route, BrowserRouter as Router ,Switch} from "react-router-dom";


const styles = theme => ({
    root: {
        display: 'flex',
    },

    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
});

class Main extends Component {



    render() {
        const classes = this.props.classes;
        const theme = this.props.theme;


        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Header/>
                <Router>
                <Navigation />
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/acceuil" component={Home} />
                    <Route exact path="/produits" component={Products} />
                    <Route component={NotFound404} />
                    </Switch>
                </main>
                </Router>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        authentificated: state.authentificated
    };
}

export default connect(
    mapStateToProps,
    {SignedIn}
)(withStyles(styles, { withTheme: true })(Main));

