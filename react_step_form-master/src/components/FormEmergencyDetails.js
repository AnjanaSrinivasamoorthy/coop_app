import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class emergencydetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Emergency Details" />
            <TextField
                            margin="normal"
                            fullWidth
                            label="Emergency Contact Name"
                            name="emergency_name"
                            autoComplete="emergency_name"  
                            onChange={handleChange('emergencyname')}                       
            />
             <TextField
                            margin="normal"
                            fullWidth
                            name="emergency_relationship"
                            label="Emergency Relationship"
                            autoComplete="emergency_relationship"
                            onChange={handleChange('emergencyrelation')}
            />
             <TextField
                            margin="normal"
                            fullWidth
                            name="emergency_phone"
                            label="Emergency Phone Number"
                            type="phone"
                            autoComplete="emergency_phone"
                            onChange={handleChange('emergencyphone')}
            />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
 </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}
export default emergencydetails;