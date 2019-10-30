import React, { Component } from "react";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//material ui
import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { addTextOnShirt } from "./../../redux/action/textOnShirt";
import { textField } from "./../../styles/styled-components/textOnShirt";

const styles = theme => ({ textField });

class TextOnShirt extends Component{

    constructor(){
        super();
        this.state = {
            shirtOnText: "Your text goes here"
        }
    }

    componentDidMount(){
        this.props.addTextOnShirt({shirtOnText: "Your text goes here"});
    }

    handleChange = (event) => {
        this.setState({shirtOnText: event.target.value}, () => {
            this.props.addTextOnShirt({shirtOnText: this.state.shirtOnText});
        })
    }


    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <Grid container item xs={12} md={12} justify="center">
                    <Grid item xs={12} md={11} >
                        <TextField
                            fullWidth={true}
                            id="outlined-textarea"
                            label="Type text on shirt"
                            multiline
                            margin="normal"
                            variant="outlined"
                            value={this.state.shirtOnText}
                            onChange={this.handleChange}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

TextOnShirt.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTextOnShirt
    },dispatch);
}


export default connect(null,mapDispatchToProps)(withStyles(styles)(TextOnShirt));
