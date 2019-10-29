import React, { Component } from "react";

import TextField from '@material-ui/core/TextField';

class TextPropertiesComponent extends Component{

    render(){
        return(
            <React.Fragment>
                <TextField 
                    value="Your Text Here"
                />
            </React.Fragment>
        );
    }
}

export default TextPropertiesComponent;