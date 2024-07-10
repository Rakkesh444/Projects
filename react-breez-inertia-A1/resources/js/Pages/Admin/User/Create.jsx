import React from 'react';
import ReactDOM from 'react-dom';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react"
import '../../../../css/create.css'
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "../../Layouts/AdminLayout";
import { Button } from "react-bootstrap";
export default function Register() {
    const { flash } = usePage().props;
    const { data, setData, processing, post } = useForm({
        name: '',
        email: '',
        password: '',
    });
    //Alert Msg Close Setup || Adding onClick() Methos In the Cose Btn
    const [visible, setVisible] = useState(true)
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Inertia.post('/register', form);
        //router.post('users.store', data);
        post(route('users.store'));
    };


    return (
        <>
            <Head title="Create" />
            <AdminLayout>
                <div className="container-fluid-create-user">
                    <div className="container ">
                        <div className="m-auto">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <Link href={route('view')} className="btn btn-danger py-1 px-4">Back</Link>
                                    <h1 className="display-4 text-center fs-1 Create-Header">
                                        Create New User
                                    </h1>
                                    {flash.success && visible && (
                                        <div class="alert alert-success alert-dismissible fade show" role="alert" data-mdb-alert-init>
                                            <strong>Success</strong> {flash.success}
                                            <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close" onClick={() => setVisible(false)}></button>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="name"
                                        className="fw-semibold col-sm-2 col-form-label">
                                        User Name
                                    </label>
                                    <div className="col-12 col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control focus-ring focus-ring-danger"
                                            id="name"
                                            value={data.name}
                                            name="name"
                                            onChange={handleChange}
                                        />
                                        {errors.name && <span className="text-danger">{errors.name}</span>}
                                    </div>

                                </div>
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
                                            onChange={handleChange}
                                        />
                                        {errors.email && <span className="text-danger">{errors.email}</span>}
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="password"
                                        className=" col-sm-2 col-form-label fw-medium"
                                    >
                                        User Password
                                    </label>
                                    <div className="col-12 col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control
                                        focus-ring focus-ring-danger"
                                            id="password"
                                            value={data.password}
                                            name="password"
                                            onChange={handleChange}
                                        />
                                        {errors.password && <span className="text-danger">{errors.password}</span>}
                                    </div>
                                </div>
                                <div className="mb-3 buttons">
                                    <button type="submit"
                                        className="btn btn-warning mb-3"
                                        disabled={processing}>
                                        Create User
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* container End */}
                        <div className="footer">
                            <img width="96" height="96" src="https://img.icons8.com/color/96/old-vmware-logo.png" alt="old-vmware-logo" />
                            <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque, animi neque sit suscipit adipisci.</span>
                            <p>
                                <Link href={route("logout")} className="nav-link fs-5 ms-5 "><i className="bi bi-box-arrow-in-left"></i> Logout</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}