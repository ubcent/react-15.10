import React from 'react';

export default function Login() {        
    return (
        <form className="mx-auto article">
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email"/>
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}