import React from 'react';
import ReactDOM from 'react-dom';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react"
import '../../../../css/create.css'
import AdminLayout from "../../Layouts/AdminLayout";
import { usePermissions } from "./Permissionpage";
import { Button } from "react-bootstrap";
export default function Register() {
    const { auth, permissions } = usePage().props;
    const { data, setData, put } = useForm({
        name: permissions.name,
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('permissions.update', permissions.id, data));
    };

    const { hasRole } = usePermissions();
    const { hasPermission } = usePermissions();
    return (
        <>
            <Head title="Create" />
            <AdminLayout>
                <div className="container-fluid-create-user">
                    <div className="container ">
                        <div className="m-auto">
                            <form onSubmit={handleSubmit}>
                                <Link href={route('permissions.index')} className="btn btn-danger py-1 px-4">Back</Link>
                                <h1 className="display-4 text-center fs-1 Create-Header">
                                    Edit Permission
                                </h1>

                                <div className="mb-3 row">
                                    <label htmlFor="name"
                                        className="fw-semibold col-sm-2 col-form-label">
                                        Permission Name
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
                                    </div>
                                </div>
                                <div className="mb-3 buttons">
                                    <button type="submit"
                                        className="btn btn-warning mb-3"
                                    >
                                        Update Permission
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