import React, { Component } from "react";
//material ui

import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TextOnShirt from "./TextOnShirt";
import TextFontSize from "./TextFontSize";
import TextFontFamily from "./TextFontFamily";
import { paper } from "../../styles/styled-components/mainPropertiesComponent";

const styles = theme => ({ paper });

class TextPropertiesMain extends Component{

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Paper className={classes.paper}>
                    <TextOnShirt  />
                    <TextFontSize />
                    <TextFontFamily />
                </Paper>
            </React.Fragment>
        );
    }
}

TextPropertiesMain.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextPropertiesMain);