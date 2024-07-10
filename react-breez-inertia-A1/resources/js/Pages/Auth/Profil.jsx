import React from 'react';
import ReactDOM from 'react-dom';
import { Head, Link, usePage } from "@inertiajs/react";
import "../../../css/Profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Breadcrumb } from "antd";
import AdminLayout from "../Layouts/AdminLayout";
export default function Profile() {
    const { auth } = usePage().props;
    return (
        <>
            <Head title="Profile" />
            <AdminLayout>
                <div className="container Profile-Container">
                    <div className="Profile-Details">
                        <div className="card p-4 mt-5">
                            <h1 className="mb-4 display-5 text-center">Profile</h1>
                            <h5 htmlFor="" className="mt-3">Name : <span className="fw-light">{auth.user.name}</span></h5>
                            <h5 htmlFor="" className="mt-5">Email : <span className="fw-light">{auth.user.email}</span> </h5>
                            <Breadcrumb
                                style={{
                                    marginTop: "50px",
                                    fontSize: "15px",
                                    color: "#fff",
                                }}
                                items={[
                                    {
                                        title: <Link href={route('dashboard')}>Dashboard</Link>
                                    },
                                    {
                                        title: <Link href={route('contact')}>Aboute</Link>
                                    },
                                    {
                                        title: <Link href={route('about')}>Contact</Link>
                                    }
                                ]}
                            />
                            <div className="Logout">
                                <Link href={route('logout')} className="nav-link mt-5 text-warning fs-4">Logout <span><i class="bi bi-box-arrow-in-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </AdminLayout>

        </>
    );
}