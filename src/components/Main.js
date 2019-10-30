import React, { Component } from "react";

import {library, dom} from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

//for material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

library.add(faSpinner, faUser, faAccessibleIcon);
dom.watch();

import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';

import MainStickyBar from "./sticky-bar-components/MainStickyBar";
import ReactCanvas from './main-canvas-components/ReactCanvas';
import TextPropertiesMain from "./../components/text-properties-component/TextPropertiesMain";

const styles = theme => ({  });

class Main extends Component{
    
    render(){
        const { classes } = this.props;
        return(
            <div>
                <CssBaseline />
                <Container maxWidth="md">
                    <Grid 
                        container
                        direction="row"
                    >
                        <Grid item xs={1} sm={1} md={1}>
                            <MainStickyBar />
                        </Grid>
                        <Grid item xs={7} sm={7} md={7}>
                            <ReactCanvas />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <TextPropertiesMain />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);