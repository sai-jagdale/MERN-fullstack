import React from 'react';

//Class Component
class Login extends React.Component {

    render(){
        return(
            <div>
                <form>
                    <form>
                        <div className="form-group">
                            <lable for="email">Email:</lable>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
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
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </form>
            </div>
        );
    }
}

export default Login;