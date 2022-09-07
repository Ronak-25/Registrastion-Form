import React from 'react';
import './form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",

            Email: "",
            Mobile: "",
            Message: "",
            password: "",
            ConfirmPassword: "",
            gender: "",
            error: {}
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formValidation = () => {
        const { username, Email, Mobile, Message, password, ConfirmPassword, gender } = this.state
        let isValid = true;
        const error = {};


        if (username.length < 3) {
            error.username = "Minimum 3 character  Required"
            isValid = false;
        }
        if (username.length > 10) {
            error.username = "maximum 10 character allow"
            isValid = false;
        }
        if (!username) {
            error.username = "Enter Name";
            isValid = false;

        }


        if (!Email) {
            isValid = false;
            error.Email = "Email is required.";
        }
        else {
            var emails = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;;
            if (!emails.test(Email)) {
                isValid = false;
                error.Email = "Invalid emails.";
            }
        }

        if (!Mobile) {
            isValid = false;
            error.Mobile = "Phone number is required.";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(Mobile)) {
                isValid = false;
                error.Mobile = "Invalid phone number.";
            }
        }
        // if (!gender) {
        //     error.gender = "Choose gender";
        //     isValid = false;
        // }

        if (!Message) {
            error.Message = "Enter Message";
            isValid = false;
        }


        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/)) {
            isValid = false;
            error.password = "Invalid Password"
        }
        if (!password) {
            isValid = false;
            error.password = " Password is required.";
        }

        if (password !== ConfirmPassword) {

            isValid = false;
            error.ConfirmPassword = "Password Not Match";
        }
        if (!ConfirmPassword) {
            isValid = false;
            error.ConfirmPassword = "Please enter Confirm Password";
        }
        this.setState({ error });
        return isValid;

    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid) {
            console.log("onsubmit" + this.state.username + this.state.Email + this.state.Mobile + this.state.Message + this.state.password + this.state.ConfirmPassword)
            this.setState({ username: "", Email: "", Mobile: "", gender: "", Message: "", password: "", ConfirmPassword: "", error: {} })
        }

    }
    render() {
        const { username, Email, Mobile, Message, password, ConfirmPassword, error, gender } = this.state
        return (

            <div className='Form'>
                <h1 style={{ color: "skypink" }}><b>Registration Form</b></h1>
                <form className='label' onSubmit={this.onSubmit}>
                    {Object.keys(error).map((key) => {
                        return<b> <div style={{ color: 'brown'}} key={key}>{error[key]}</div></b>
                    })}
                    &nbsp;<b> Name  :</b>  <br /> <input type="text" name="username" value={username} onChange={this.onChange.bind(this)}></input><br />
                    &nbsp; <b>Email :</b> <br /><input type="text" name="Email" value={Email} onChange={this.onChange.bind(this)}></input><br />
                    &nbsp; <b>Mobile :</b> <br /> <input type="number" name="Mobile" value={Mobile} onChange={this.onChange.bind(this)}></input><br />

                    <b> Gender :</b> <i>Male</i><input type="radio" name="gender" value={gender} onChange={this.onChange.bind(this)}></input>
                    <i>Female</i><input type="radio" name="gender" value={gender} onChange={this.onChange.bind(this)}></input><br />

                    &nbsp; <b>Message :</b><br /> <input type="text" name="Message" value={Message} onChange={this.onChange.bind(this)}></input><br />
                    &nbsp; <b> Password : </b><br /> <input type="text" name="password" value={password} onChange={this.onChange.bind(this)}></input><br />
                    &nbsp; <b> Confirm Password :</b><br /> <input type="text" name="ConfirmPassword" value={ConfirmPassword} onChange={this.onChange.bind(this)}></input><br />
                    &nbsp; <b> I Agree Terms & Condition</b> <input type="checkbox"></input><br></br>
                    <input className='btn' type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}


export default Form;