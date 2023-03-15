import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { BsFacebook, BsGoogle, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        console.log('username: ', this.state.username, 'password: ', this.state.password)
        console.log('All state: ', this.state)
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }

            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log("login success")
            }

        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }

    handlerShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='text-login col-12'>
                            Login
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>User name:</label>
                            <input
                                type='text'
                                // value={this.state.username}
                                onChange={(event) => {
                                    this.handleOnChangeUsername(event)
                                }}
                                className='form-control'
                                placeholder='Enter your user name'
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                    // value={this.state.password}
                                    className='form-control'
                                    onChange={(event) => {
                                        this.handleOnChangePassword(event)
                                    }}
                                    placeholder='Enter your password' />
                                <span onClick={() => {
                                    this.handlerShowHidePassword()
                                }}>{this.state.isShowPassword ? <BsFillEyeFill className='eyeopen' /> : <BsFillEyeSlashFill className='eyeopen' />}</span>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                        </div>
                        <div className='col-12'><button className='btn-login' onClick={() => this.handleLogin()}>Login</button></div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>

                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span >Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <BsFacebook className='fs-4 facebook' />
                            <BsGoogle className='fs-4 google' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
