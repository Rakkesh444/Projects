import React from 'react';
import ReactDOM from 'react-dom';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react"
import '../../../../css/create.css'
import AdminLayout from "../../Layouts/AdminLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import { Button } from "react-bootstrap";
import { usePermissions } from '../PermisionPage/Permissionpage';
export default function Register() {
    const { auth, roles, permissions, permissionGroups, flash } = usePage().props;
    const [selectedPermissions, setSelectedPermissions] = useState(roles.permissions.map(p => p.id));
    const [name, setName] = useState(roles.name);
    const { hasRole } = usePermissions();
    const { hasPermission } = usePermissions();
    const [visible, setVisible] = useState(true);
    const { data, setData, processing, put } = useForm({
        name: roles.name,
    });
    // const handleChange = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    const handlePermissionChange = (e) => {
        const { value, checked } = e.target;
        const id = parseInt(value, 10)
        if (checked) {
            setSelectedPermissions([...selectedPermissions, id]);
        } else {
            setSelectedPermissions(selectedPermissions.filter(permissionId => permissionId !== id));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //mycode
        //put(route('roles.update', role.id, { permissions_ids: selectedPermissions }));
        //this route separate form UpdatePermission Controller
        router.put(`/roles/${roles.id}`, { name, permission_ids: selectedPermissions });
        // Inertia.put(`/roles/${roles.id}`, { name, permission_ids: selectedPermissions });
    };
    return (
        <>
            <Head title="Create" />
            <AdminLayout>
                <div className="container-fluid-create-user">
                    <div className="container ">
                        <div className="m-auto">
                            <form onSubmit={handleSubmit}>
                                <Link href={route('roles.index')} className="btn btn-danger py-1 px-4">Back</Link>
                                <h1 className="display-4 text-center fs-1 Create-Header">
                                    Edit Role
                                </h1>
                                {flash.success && visible && (
                                    <div className='alert alert-success alert-dismissible fade show' role="alert">
                                        {flash.success}
                                        <button type='button' className='btn-close' data-mdb-dismiss="alert" onClick={() => setVisible(false)} ></button>
                                    </div>
                                )}
                                <div className="mb-3 row">
                                    <label htmlFor="name"
                                        className="fw-semibold col-sm-2 col-form-label">
                                        Role Name
                                    </label>
                                    <div className="col-12 col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control focus-ring focus-ring-danger"
                                            id="name"
                                            value={name}
                                            name="name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {hasPermission('AssignPermission') && (
                                    <div className="mb-3 row">
                                        <label htmlFor="name"
                                            className="fw-semibold col-sm-2 col-form-label">
                                            Assign Permissions
                                        </label>
                                        <div className="col-12 col-sm-10">
                                            <div className="row">
                                                {permissionGroups.map(permissionGroup => (
                                                    <div className="col-md-4 card" key={permissionGroup.id}>
                                                        <h6 className='mb-3'>{permissionGroup.name}</h6 >
                                                        {permissionGroup.permissions.map(permission => (
                                                            <div key={permission.id}>
                                                                <input type="checkbox"
                                                                    value={permission.id}
                                                                    onChange={handlePermissionChange}
                                                                    checked={selectedPermissions.includes(permission.id)}
                                                                    className="form-check-input"
                                                                />
                                                                <label htmlFor="" className="form-check-label">
                                                                    {permission.name}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                            {/* <select className="form-select" >
                                            {permissions.map(permission => (
                                                <option name="permissions" value={permission.id} key={permission.id}>{permission.name}</option>
                                            ))}
                                        </select> */}
                                        </div>
                                    </div>
                                )}
                                <div className="mb-3 buttons">
                                    <input type="submit"
                                        className="btn btn-warning mb-3"
                                        value='update' />
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