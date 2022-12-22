import React, { Component } from 'react';
import { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

export class personaldetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  //const [value, setValue] = useState('');
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
            <AppBar title="Enter Personal Details" />
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender1"
                onChange={handleChange('gender')}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              <FormLabel>Marital Status</FormLabel>
              <RadioGroup
                name="maritalstatus"
                onChange={handleChange('maritalstatus')}
              >
                <FormControlLabel value="Married" control={<Radio />} label="Married" />
                <FormControlLabel value="Unmarried" control={<Radio />} label="Unmarried" />
              </RadioGroup>
              <TextField
                placeholder="Enter Date of Birth"
                label="Choose your birth date"
                type="date"
                onChange={handleChange('birthdate')}
                defaultValue="2002-04-14"
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                placeholder="Enter Your Father Name"
                label="Father Name"
                onChange={handleChange('fathername')}
                defaultValue={values.fathername}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Enter Your Mother Name"
                label="Mother Name"
                onChange={handleChange('mothername')}
                defaultValue={values.mothername}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Blood Group"
                label="Blood Group"
                onChange={handleChange('bloodgroup')}
                defaultValue={values.bloodgroup}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="City"
                label="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="State"
                label="State"
                onChange={handleChange('state')}
                defaultValue={values.state}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="Country"
                label="Country"
                onChange={handleChange('country')}
                defaultValue={values.country}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder="PAN"
                label="PAN Number"
                onChange={handleChange('pannumber')}
                defaultValue={values.pannumber}
                margin="normal"
                fullWidth
              />
              <TextField
                type="number"
                placeholder="Aadhar Number"
                label="Aadhar Number"
                onChange={handleChange('aadharnumber')}
                defaultValue={values.aadharnumber}
                margin="normal"
                //value={value}
                // InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }}
                // variant="outlined"
                // onChange={(e) => setValue(e.currentTarget.value)}
                // onBlur={(e) => {
                //   if (e.currentTarget.value > 0) setValue(10);
                // }}
                fullWidth
              />
              <TextField
                placeholder="Aadhar Name"
                label="Aadhar Name"
                onChange={handleChange('aadharname')}
                defaultValue={values.aadharname}
                margin="normal"
                fullWidth
              />
              <br />
              <br />
              <FormLabel>T-shirt size</FormLabel>
              <RadioGroup
                name="tshirtsize"
                onChange={handleChange('tshirtsize')}
              >
                <FormControlLabel value="XS" control={<Radio />} label="XS" />
                <FormControlLabel value="S" control={<Radio />} label="S" />
                <FormControlLabel value="M" control={<Radio />} label="M" />
                <FormControlLabel value="L" control={<Radio />} label="L" />
                <FormControlLabel value="XL" control={<Radio />} label="XL" />
              </RadioGroup>
            <br />
            <br />
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

export default personaldetails;