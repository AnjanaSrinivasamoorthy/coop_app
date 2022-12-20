import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstname , middlename , lastname , joindate , gender , maritalstatus , birthdate ,
        fathername, mothername,bloodgroup,city,state,country, pannumber, aadharname,
        aadharnumber,tshirtsize,pincode,address,phonenumber,emailaddress,emergencyname,emergencyrelation,
        emergencyphone, selfname , fatherbirthdate, motherbirthdate,spousename,spousedob,childname,
        childdob,childgender,child2name,child2dob,child2gender}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Middle Name" secondary={middlename} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date of Joining" secondary={joindate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gender" secondary={gender} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Marital Status" secondary={maritalstatus} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Birth Date" secondary={birthdate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Father Name" secondary={fathername} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mother Name" secondary={mothername} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Blood Group" secondary={bloodgroup}/>
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="State" secondary={state} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Country" secondary={country} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pan Number" secondary={pannumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Aadhar Number" secondary={aadharnumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Aadhar Name" secondary={aadharname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="T-Shirt size" secondary={tshirtsize} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email Address" secondary={emailaddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone Number" secondary={phonenumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pincode" secondary={pincode} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Emergency Name" secondary={emergencyname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Emergency Relation" secondary={emergencyrelation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Emergency Phone" secondary={emergencyphone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Self Name" secondary={selfname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date of Birth" secondary={birthdate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Father Name" secondary={fathername} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Father Date of Birth" secondary={fatherbirthdate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mother Name" secondary={mothername} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Emergency Phone" secondary={motherbirthdate} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Spouse Name" secondary={spousename} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Spouse Date of Birth" secondary={spousedob} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Child 1 Name" secondary={childname} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Child 1 Date of Birth" secondary={childdob} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Child 1 Gender" secondary={childgender} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Child 2 Name" secondary={child2name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Child 2 Date of Birth" secondary={child2dob} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Child 2 Gender" secondary={child2gender} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
