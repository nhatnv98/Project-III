import React, { Component, useState } from 'react';
import './NavbarForm.css';
function Register() {
    const [userInfo, setInfo] = useState()
    const handleChange = (e) => {

        setInfo[{
            ...user
            [name]:e.target.value
        }]
        console.log(JSON.stringify(userInfo));
    }

    return (
        <div>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">

                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                name="firstName"
                                                    onChange={() => handleChange()} placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    onChange={() => handleChange()}
                                                    placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                onChange={() => handleChange()}
                                                placeholder="Email Address" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user" id="exampleInputPassword"
                                                    onChange={() => handleChange()}
                                                    placeholder="Password" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user" id="exampleRepeatPassword"
                                                    onChange={() => handleChange()}
                                                    placeholder="Repeat Password" />
                                            </div>
                                        </div>
                                        <a href="login.html" className="btn btn-primary btn-user btn-block">
                                            Register Account
                            </a>
                                        {/* <hr />
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw" /> Register with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
                            </a> */}
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="login.html">Already have an account? Login!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Register;