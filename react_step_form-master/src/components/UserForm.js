import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormContactDetails from './FormContactDetails';
import FormEmergencyDetails from './FormEmergencyDetails';
import InsuranceDetails from './InsuranceDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    firstname:'' , middlename:'' , lastname:'' , joindate:'' , gender:'' , maritalstatus:'' , birthdate:'',
    fathername:'', mothername:'',bloodgroup:'',place:'',city:'',state:'',country:'' , pannumber:'', aadharname:'',
    aadharnumber:'',tshirtsize:'' , emailaddress:'' , phonenumber:'', pincode:'',address:'',
    emergencyname:'',emergencyphone:'',emergencyrelation:'' , selfname:'' ,fatherbirthdate:'', motherbirthdate:'',
    spousename:'',spousedob:'',childname:'',childdob:'',childgender:'',child2name:'',child2dob:'',child2gender:''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstname , middlename , lastname , joindate , gender , maritalstatus ,birthdate ,
    fathername, mothername,bloodgroup,place,city,state,country, pannumber, aadharname,
    aadharnumber,tshirtsize,emailaddress,phonenumber,pincode,address,emergencyname,emergencyphone,
    emergencyrelation , selfname , fatherbirthdate, motherbirthdate,spousename,spousedob,childname,
    childdob,childgender,child2name,child2dob,child2gender
  }= this.state;
    const values = { firstname , middlename , lastname , joindate , gender , maritalstatus ,birthdate ,
      fathername, mothername,bloodgroup,place,city,state,country, pannumber, aadharname,
      aadharnumber,tshirtsize,emailaddress,phonenumber,pincode,address,emergencyname,emergencyphone,
      emergencyrelation , selfname , fatherbirthdate, motherbirthdate,spousename,spousedob,childname,
      childdob,childgender,child2name,child2dob,child2gender};

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormContactDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
          return (
            <FormEmergencyDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
      case 5:
            return (
              <InsuranceDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            );
      case 6:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 7:
        return <Success />;
      default:
        (console.log('Form Filled'))
    }
  }
}

export default UserForm;
