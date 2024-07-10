import React from 'react';
import ReactDOM from 'react-dom';
import "../../../css/Login.css"
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Button } from "react-bootstrap";
import { useState } from "react";
export default function login() {
    const { error } = usePage().props;
    const { data, setData, processing } = useForm({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        router.post('/login', data);

        const ValidationErrors = {}
        if (!data.email.trim()) {
            ValidationErrors.email = "Email is Required";
        }
        if (!data.password.trim()) {
            ValidationErrors.password = "Password is required"
        } else if (data.password.length < 8) {
            ValidationErrors.password = " Password Atleast 8 Characters"
        }
        setErrors(ValidationErrors);
    }

    return (
        <>
            <Head title="Login" />
            <div className="container-fluids">
                <div className="container">
                    <div className="cards m-auto">
                        <form onSubmit={loginSubmit}>
                            <h1 className="display-4 text-center fs-1 text-light Login-Header">User Login</h1>
                            {error.email && <div className='error text-danger'>{error.email}</div>}
                            {/* email section */}
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="form-label fw-medium"><span><i className="bi bi-person"></i></span>User Email</label>
                                <input type="email" className="form-control focus-ring focus-ring-secondary" id="email" name="email" defaultValue={data.email} onChange={handleChange} />
                                {errors.email && <span className="text-danger">{errors.email}</span>}

                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label fw-medium"><span><i className="bi bi-person-lock"></i></span>User Password</label>
                                <input type="password" className="form-control focus-ring focus-ring-secondary" id="password" name="password" defaultValue={data.password} onChange={handleChange} />
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                                {/* {error.password && <div className='error text-danger'>{error.password}</div>} */}
                            </div>
                            <div className="mb-3 buttons text-center">
                                <button type="submit" disabled={processing} className="btn btn-warning mb-3">Login</button>
                                <p style={{ position: 'relative', top: '30px', left: '150px', fontSize: '10px' }}><Link href={route('password.request')} className='nav-link btn btn-dark py-1 px-1 w-50'>Froget Password</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}