import React from 'react';
import ReactDOM from 'react-dom';
import { Head, Link, router, useForm } from "@inertiajs/react"
import '../../../../css/create.css'
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "../Layouts/AdminLayout";
import { Button } from "react-bootstrap";
export default function Register() {
    const { data, setData, processing } = useForm({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Inertia.post('/register', form);
        router.post('/delete', data);
        //post(route('register'));

    };


    return (
        <>
            <Head title="Delete" />
            <AdminLayout>
                <div className="container-fluid-create-user">
                    <div className="container">
                        <div className="m-auto">
                            <form onSubmit={handleSubmit}>
                                <h1 className="display-4 text-center fs-1 Create-Header">
                                    Delete Existing User
                                </h1>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="email"
                                        className=" col-sm-2 col-form-label fw-medium"
                                    >
                                        User Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="email"
                                            className="form-control focus-ring focus-ring-danger"
                                            id="email"
                                            value={data.email}
                                            name="email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="password"
                                        className=" col-sm-2 col-form-label fw-medium"
                                    >
                                        User Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control
                                        focus-ring focus-ring-danger"
                                            id="password"
                                            value={data.password}
                                            name="password"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 buttons">
                                    <button type="submit"
                                        className="btn btn-warning mb-3"
                                        disabled={processing}>
                                        Delete User
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* container End */}
                        <div className="footer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/old-vmware-logo.png" alt="old-vmware-logo" />
                            <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque, animi neque sit suscipit adipisci.</span>
                            <p>
                                <Link href={route("logout")} className="nav-link fs-5 ms-5 "><i class="bi bi-box-arrow-in-left"></i> Logout</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}