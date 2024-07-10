import React, { useEffect } from 'react';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react"
import '../../../../css/create.css'
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "../../Layouts/AdminLayout";
import { usePermissions } from '../PermisionPage/Permissionpage';
export default function Register() {
    const { users, roles, permissions, userPermissions, permissionsGroups, flash, successmessage } = usePage().props;
    const [selectedRoles, setSelectedRoles] = useState(users.roles.map(role => role.id));
    const [selectedPermissions, setSelectedPermissions] = useState(users.permissions.map(permission => permission.id));
    const [name, setName] = useState(users.name)
    const [email, setEmail] = useState(users.email)
    //Alert Msg Close Setup || Adding onClick() Methos In the Cose Btn
    const [visible, setVisible] = useState(true);
    const [successMsg, setSuccessMsg] = useState('');
    const { hasRole } = usePermissions();
    const { hasPermission } = usePermissions();
    // useEffect(() => {
    //     if (flash.success) {
    //         setSuccessMsg(flash.success)
    //     }
    // }, [flash.success])
    const { data, setData, put, processing } = useForm({
        name: users.name,
        email: users.email,
    });
    const handleChanged = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };
    const handleRoleChanged = (e) => {
        const { value, checked } = e.target;
        const id = parseInt(value)
        if (checked) {
            setSelectedRoles([...selectedRoles, id])
        } else {
            setSelectedRoles(selectedRoles.filter(role => role !== id))
        }
    };
    const handlePermissionsChanged = (e) => {
        const { value, checked } = e.target;
        const id = parseInt(value)
        if (checked) {
            setSelectedPermissions([...selectedPermissions, id])
        } else {
            setSelectedPermissions(selectedPermissions.filter(permissionId => permissionId !== id))
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Inertia.post('/register', form);
        // router.put(`/update/${auth.user.id}`, data);
        // put(route('users.updateUser'), { name, email, user_role: selectedRoles, user_permissions: selectedPermissions });
        router.put(`/users/${users.id}`, { name, email, user_role: selectedRoles, user_permissions: selectedPermissions });
        // Inertia.put(`/users/${users.id}`, { name, email, user_role: selectedRoles, user_permissions: selectedPermissions });
    };
    return (
        <>
            <Head title="Update" />
            <AdminLayout>
                <div className="container-fluid-create-user">
                    <div className="container">
                        <div className="m-auto">
                            {/* {successMsg && visible &&
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    {successMsg}
                                    <button type="button" className='btn-close' data-mdb-dismiss="alert" onClick={() => setVisible(false)}></button>
                                </div>
                            } */}
                            <form onSubmit={handleSubmit}>
                                <h1 className="display-4 text-center fs-1 Create-Header">
                                    Update User Data
                                </h1>
                                {flash.success && visible && (
                                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>Updated : </strong> {flash.success}
                                        <button type="button" className="btn-close" data-mdb-dismiss="alert" onClick={() => setVisible(false)}>
                                            &times;
                                        </button>
                                    </div>
                                )}
                                {/* {successmessage && <Alert message={successmessage} />} */}
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="name"
                                        className=" col-sm-2 col-form-label fw-semibold"
                                    >
                                        User name
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control focus-ring focus-ring-danger"
                                            id="name"
                                            value={name}
                                            name="name"
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="email"
                                        className=" col-sm-2 col-form-label fw-semibold"
                                    >
                                        User email
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="email"
                                            className="form-control
                                        focus-ring focus-ring-danger"
                                            id="email"
                                            value={email}
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                {hasPermission('AsignRole') && (
                                    <div className="mb-3 row">
                                        <label
                                            htmlFor="email"
                                            className=" col-sm-2 col-form-label fw-semibold"
                                        >
                                            Asign Roles
                                        </label>
                                        <div className="col-sm-10">
                                            {/* <select className="form-select">
                                            {roles.map(role => (
                                                <option key={role.id} value={role.name}>{role.name}</option>
                                            ))}
                                        </select> */}
                                            <div className='card p-3 w-25'>
                                                {
                                                    roles.map(role => (
                                                        <div key={role.id}>
                                                            <input type="checkbox"
                                                                value={role.id}
                                                                className="form-check-input"
                                                                checked={selectedRoles.includes(role.id)}
                                                                onChange={handleRoleChanged}
                                                            />
                                                            <label htmlFor="">{role.name}</label>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {hasPermission('AssignPermission') && (
                                    <div className="mb-3 row">
                                        <label
                                            htmlFor="email"
                                            className=" col-sm-2 col-form-label fw-semibold "
                                        >
                                            Give Permissions
                                        </label>
                                        <div className="col-sm-10">
                                            <div className="row">
                                                {permissionsGroups.map(permissionGroup => (
                                                    <div className="col-md-4 card" key={permissionGroup.id}>
                                                        <h6 className='mb-3'>{permissionGroup.name}</h6>
                                                        {permissionGroup.permissions.map(permission => (
                                                            <div key={permission.id}>
                                                                <input type="checkbox"
                                                                    value={permission.id}
                                                                    className="form-check-input"
                                                                    checked={selectedPermissions.includes(permission.id)}
                                                                    onChange={handlePermissionsChanged}
                                                                />
                                                                <label htmlFor="">{permission.name}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="mb-3 buttons">
                                    <button type="submit"
                                        className="btn btn-success  text-dark mb-3"
                                        disabled={processing}>
                                        Update User
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
                </div >
            </AdminLayout >
        </>
    )
}