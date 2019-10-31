import React, { Component } from "react";
import GoogleFontLoader from 'react-google-font-loader';
//material ui
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';


class TextFontFamily extends Component{
    constructor(){
        super();
        this.state = {
          fontFamily:[
            { font: "ABeeZee" }, { font: "Abel" }, { font: "Advent Pro" }, { font: "Aller" }, 
            { font: "Amatic SC" }, { font: "Barlow" }, { font: "Crimes" }, { font: "Fjalla One" }, 
            { font: "Freshmarker" }, { font: "Geneva" }, { font: "Graduate" }, { font: "Monofur" }, 
            { font: "Lemon" }, { font: "Ostrich" }, { font: "McLaren" }
          ],
          fontName:""
        }
    }

    selectFontFamily = () => {
        return this.state.fontFamily.map((value, index) => (
            <MenuItem key={index} value={value.font} style={{fontFamily:value.font}}>{value.font}</MenuItem>
        ));
    }

    handleChange = (event) => {
      this.setState({fontName:event.target.value});
    }

    render(){
        return(
            <React.Fragment>
                <GoogleFontLoader
                  fonts={[
                    { font: "ABeeZee" }, { font: "Abel" }, { font: "Advent Pro" }, { font: "Aller" }, 
                    { font: "Amatic SC" }, { font: "Barlow" }, { font: "Crimes" }, { font: "Fjalla One" }, 
                    { font: "Freshmarker" }, { font: "Geneva" }, { font: "Graduate" }, { font: "Monofur" }, 
                    { font: "Lemon" }, { font: "Ostrich" }, { font: "McLaren" }
                  ]}
                  subsets={['cyrillic-ext', 'greek']}
                />
                <Grid container item xs={12} md={12} justify="center">
                    <Grid item xs={12} md={11} >
                      <FormControl fullWidth={true}>
                        <InputLabel >Select a font</InputLabel>
                        <Select
                          value={this.state.fontName}
                          style={{fontFamily:this.state.fontName}}
                          onChange={this.handleChange}
                        >
                          <MenuItem value="">
                          <em>None</em>
                          </MenuItem>
                          {this.selectFontFamily()}
                        </Select>
                        
                      </FormControl>
                </Grid>
              </Grid>
            </React.Fragment>
        )
    }
}

export default TextFontFamily;