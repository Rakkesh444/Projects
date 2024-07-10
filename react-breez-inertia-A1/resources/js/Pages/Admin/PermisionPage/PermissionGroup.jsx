import React from 'react';
import ReactDOM from 'react-dom';
import { Head, useForm, usePage } from '@inertiajs/react';
import '../../../../css/create.css';
import AdminLayout from '@/Pages/Layouts/AdminLayout';
import { Link } from '@inertiajs/inertia-react';
import { useState } from 'react';
import { Button } from "react-bootstrap";
export default function PermissionGroup() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(true);
    const { data, setData, post } = useForm({
        name: '',
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('store'), data);
    }
    return (
        <>
            <Head title="PermissionGroup" />
            <AdminLayout>
                <div className="container-fluid-create-user">
                    <div className="container ">
                        <div className="m-auto">
                            <form onSubmit={handleSubmit}>
                                <Link href='' className="btn btn-danger py-1 px-4">Back</Link>
                                <h1 className="display-4 text-center fs-1 Create-Header">
                                    Permission Group Craeting
                                </h1>
                                {flash.success && visible && (
                                    <div className='alert alert-success alert-dismissible fade show ' role="alert">
                                        <strong>Created : </strong> {flash.success}
                                        <button type="button" className='btn-close' data-mdb-dismiss="alert" onClick={() => setVisible(false)}></button>
                                    </div>
                                )}
                                <div className="mb-3 row">
                                    <label htmlFor="name"
                                        className="fw-semibold col-sm-2 col-form-label">
                                        Permission Group Name
                                    </label>
                                    <div className="col-12 col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control focus-ring focus-ring-danger"
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 buttons">
                                    <button type="submit"
                                        className="btn btn-warning mb-3"
                                    >
                                        Save
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