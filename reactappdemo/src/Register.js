import React from 'react';

//Class Component
class Register extends React.Component {

    render(){
        return(
            <div>
                <h3>Register New User</h3>
                <form>
                    <div className="form-group">
                        <lable for="email">Email:</lable>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="form-group">
                        <lable for="firstName">First Name:</lable>
                        <input type="text" className="form-control" id="firstName" placeholder="Enter first name" name="firstName"/>
                    </div>
                    <div className="form-group">
                        <lable for="lastName">Last Name:</lable>
                        <input type="text" className="form-control" id="lastName" placeholder="Enter last name" name="lastName"/>
                    </div>
                    <div className="form-group">
                        <lable for="pwd">Password:</lable>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password"/>
                    </div>
                        <div className="checkbox">
                        <label>
                        <input type="checkbox" name="remember"/> Remember me
                        </label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;