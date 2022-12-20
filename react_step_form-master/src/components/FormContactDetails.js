import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class contactdetails extends Component {

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
            <AppBar title="Enter Contact Details" />
            <TextField
                            margin="normal"
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"  
                            onChange={handleChange('emailaddress')}                       
            />
             <TextField
                            margin="normal"
                            fullWidth
                            name="phone"
                            label="Phone Number"
                            type="phone"
                            autoComplete="phone"
                            onChange={handleChange('phonenumber')}
            />
            <TextField
                            margin="normal"
                            fullWidth
                            name="address"
                            label="Address"
                            //type="address"
                            autoComplete="address"
                            onChange={handleChange('address')}
            />
            <TextField
                            margin="normal"
                            fullWidth
                            name="city"
                            label="City"
                            //type="city"
                            autoComplete="city"
                            onChange={handleChange('city')}
            />
            <TextField
                            margin="normal"
                            fullWidth
                            name="state"
                            label="State"
                            //type="state"
                            autoComplete="state"
                            onChange={handleChange('state')}
            />
            <TextField
                            margin="normal"
                            fullWidth
                            name="pincode"
                            label="Pin Code"
                            type="number"
                            autoComplete="pincode"
                            onChange={handleChange('pincode')}
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
export default contactdetails;