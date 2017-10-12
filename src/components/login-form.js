import React, { Component } from 'react'
export default class LoginForm extends Component {
    render() {
        return (
            < div className="container py-5" >
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <span className="anchor" id="formLogin" />
                                {/* form card login */}
                                <div className="card rounded-0">
                                    <div className="card-header">
                                        <h3 className="mb-0">Login</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="form" role="form" autoComplete="off" id="formLogin">
                                            <div className="form-group">
                                                <label htmlFor="uname1">Username</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required autoComplete="new-password" />
                                            </div>
                                            <div>
                                                <label className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-indicator" />
                                                    <span className="custom-control-description small">Remember me on this computer</span>
                                                </label>
                                            </div>
                                            <button type="button" className="btn btn-success btn-lg float-right">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}