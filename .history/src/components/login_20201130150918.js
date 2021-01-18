import Axios from 'axios';
import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import NavbarForm from './NavbarForm';
import './NavbarForm.css';
//import App from './App';
function Login(props) {
    const [userInfo, setInfo] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...userInfo,
            [name]: value
        })
    }
    const apiLogin = async () => {
        const data = {
            email: userInfo.email,
            password: userInfo.password,
        }

        const url = 'http://localhost:5000/api/auth/login'
        const res = await Axios.post(url, data)
        const result = res.data.result
        // console.log(res.data.data.token);
        // console.log(res.data.token);

        if (result === "success") {
            localStorage.setItem('token', res.data.data.token)
            localStorage.setItem('role', res.data.data.user.role)
            console.log('aaaa',res.data.data.user.role)
            if (res.data.data.user.role === 'ADMIN') {
                props.history.push("/home")
            } else if (res.data.data.user.role === 'TEACHER') {
                props.history.push("/giaovien")
            } else if (res.data.data.user.role === 'STUDENT'){
                console.log('here')
                props.history.push("/hocsinh")
            }
        }
        else {
            alert('Sai mat khau')

        }
        console.log(res.data.result);
    }
    const handleLoginButton = () => {
        apiLogin()

    }
    return (
        <div>

            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp"
                                                        name="email"
                                                        onChange={(e) => handleChange(e)}
                                                        placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" id="exampleInputPassword"
                                                        name="password"
                                                        onChange={(e) => handleChange(e)}
                                                        placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                                    </div>
                                                </div>
                                                <a className="btn btn-primary btn-user btn-block"
                                                    //  onClick={}handleRegistButton()
                                                    onClick={() => {
                                                        handleLoginButton()
                                                    }}
                                                >
                                                    Login
                                                    </a>
                                                {/* <hr />
                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw" /> Login with Google
                                </a>
                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                                </a> */}
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
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


export default withRouter(Login);