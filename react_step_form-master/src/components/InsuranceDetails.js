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


export class insurancedetails extends Component {

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
            <AppBar title="Enter Insurance Details" />
            <TextField
                            margin="normal"
                            fullWidth
                            label="Self Name"
                            name="self_name"
                            autoComplete="self_name"  
                            onChange={handleChange('selfname')}                       
            />
            <TextField
                placeholder="Enter Date of Birth"
                label="Choose your birth date"
                type="date"
                onChange={handleChange('birthdate')}
                defaultValue="2002-04-14"
                margin="normal"
                fullWidth
            />
            <TextField
                            margin="normal"
                            fullWidth
                            label="Father Name"
                            name="fathername"
                            autoComplete="fathername"  
                            onChange={handleChange('fathername')}                       
            />
            <TextField
                placeholder="Enter Father Date of Birth"
                label="Choose your Father's birth date"
                type="date"
                onChange={handleChange('fatherbirthdate')}
                defaultValue="1970-04-14"
                margin="normal"
                fullWidth
            />
            <TextField
                            margin="normal"
                            fullWidth
                            label="Mother Name"
                            name="mothername"
                            autoComplete="mothername"  
                            onChange={handleChange('mothername')}                       
            />
            <TextField
                placeholder="Enter Mother Date of Birth"
                label="Choose your Mother's birth date"
                type="date"
                onChange={handleChange('motherbirthdate')}
                defaultValue="1970-04-14"
                margin="normal"
                fullWidth
            />
            <TextField
                            margin="normal"
                            fullWidth
                            label="Spouse Name"
                            name="spousename"
                            autoComplete="spousename"  
                            onChange={handleChange('spousename')}                       
            />
            <TextField
                placeholder="Enter Spouse Date of Birth"
                label="Choose your Spouse's birth date"
                type="date"
                onChange={handleChange('spousedob')}
                defaultValue="1970-04-14"
                margin="normal"
                fullWidth
            />
            <TextField
                            margin="normal"
                            fullWidth
                            label="Child Name"
                            name="childname"
                            autoComplete="childname"  
                            onChange={handleChange('childname')}                       
            />
            <TextField
                placeholder="Enter child Date of Birth"
                label="Choose your Child's birth date"
                type="date"
                onChange={handleChange('childdob')}
                defaultValue="2013-04-14"
                margin="normal"
                fullWidth
            />
           <FormLabel>Child 1 Gender</FormLabel>
              <RadioGroup
                name="genderchild"
                onChange={handleChange('childgender')}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            <TextField
                            margin="normal"
                            fullWidth
                            label="Child 2 Name"
                            name="child2name"
                            autoComplete="child2name"  
                            onChange={handleChange('child2name')}                       
            />
            <TextField
                placeholder="Enter child 2 Date of Birth"
                label="Choose your Child's birth date"
                type="date"
                onChange={handleChange('child2dob')}
                defaultValue="2013-04-14"
                margin="normal"
                fullWidth
            />
           <FormLabel>Child 2 Gender</FormLabel>
              <RadioGroup
                name="genderchild2"
                onChange={handleChange('child2gender')}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
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
export default insurancedetails;