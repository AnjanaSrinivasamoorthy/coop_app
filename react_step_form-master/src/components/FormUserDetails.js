import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstname')}
              defaultValue={values.firstname}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Middle Name"
              label="Middle Name"
              onChange={handleChange('middlename')}
              defaultValue={values.middlename}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastname')}
              defaultValue={values.lastname}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
                placeholder="Enter Date of Joining"
                label="Choose your joining date"
                type="date"
                onChange={handleChange('joindate')}
                defaultValue="2017-05-24"
            />
            <br />
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

export default FormUserDetails;
