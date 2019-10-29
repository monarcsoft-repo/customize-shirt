import React, { Component } from "react";

import {library, dom} from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";

//for material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

library.add(faSpinner, faUser, faAccessibleIcon);
dom.watch();

import MainStickyBar from "./sticky-bar-components/MainStickyBar";
import ReactCanvas from './main-canvas-components/ReactCanvas';
import TextPropertiesComponent from './main-canvas-components/TextPropertiesComponent';

class Main extends Component{
    
    render(){
        return(
            <div>
                <CssBaseline />
                <Container maxWidth="md">
                    <Grid 
                        container
                        direction="row"
                    >
                        <Grid item xs={2} sm={2} md={2}>
                            <MainStickyBar />
                        </Grid>
                        <Grid item xs={7} sm={7} md={7}>
                            <ReactCanvas />
                        </Grid>
                        <Grid item xs={3} sm={3} md={3}>
                            <Paper>
                                <TextPropertiesComponent />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Main;