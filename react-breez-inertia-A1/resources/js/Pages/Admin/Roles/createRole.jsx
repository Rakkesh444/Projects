import React from 'react';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react"
import '../../../../css/create.css'
import { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import AdminLayout from "../../Layouts/AdminLayout";
import { Button } from "react-bootstrap";
import { count } from "rsuite/esm/internals/utils/ReactChildren";
import PermissionList from "./PermissionList";
export default function Register() {

    const { auth, permissions, permissionGroups, flash, error } = usePage().props
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    //Alert Msg Close Setup || Adding onClick() Methos In the Cose Btn
    const [visible, setVisible] = useState(true);
    const [errors, setErrors] = useState({});
    const { data, setData, processing, post } = useForm({
        name: '',
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const handlePermissionChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedPermissions([...selectedPermissions, value]);
        } else {
            setSelectedPermissions(selectedPermissions.filter(id => id !== value));
        }
    };


    // const handleChange = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    // const handleChanged = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Inertia.post('/register', form);
        //router.post('/rolestore', data);
        // post(route('rolestore', role.id, { permission_ids: selectedPermissions }));
        post(route('roles.store', { permission_ids: selectedPermissions }));
        const ValidationErrors = {};
        if (!data.name.trim()) {
            ValidationErrors.name = 'Role Name is Required'
        }

        setErrors(ValidationErrors);
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
                                    <Link href={route('roles.index')} className="btn btn-danger py-1 px-4">Back</Link>
                                    <h1 className="display-4 text-center fs-1 Create-Header">
                                        Create New Role
                                    </h1>
                                    {flash.success && visible && (
                                        <div className="alert alert-success alert-dismissible fade show" role="alert" data-mdb-alert-init >
                                            <strong>Created : </strong>{flash.success}
                                            <button type="button" className="btn-close" data-mdb-dismiss="alert" onClick={() => setVisible(false)}></button>
                                        </div>
                                    )}
                                </div>
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
                                            value={data.name}
                                            name="name"
                                            onChange={handleChange}
                                            required
                                        />
                                        {errors.name && <div className='text-danger'>{errors.name}</div>}
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    {/* <PermissionList /> */}
                                    {permissionGroups.map(permissionGroup => (
                                        <div className="Permissions col-md-4 card" key={permissionGroup.id}>
                                            <h6 className='mb-3'>{permissionGroup.name}</h6>

                                            {permissionGroup.permissions.map(permission => (
                                                <div key={permission.id} >
                                                    <input type="checkbox"
                                                        value={permission.id}
                                                        onChange={handlePermissionChange}
                                                        className="form-check-input"
                                                        name='permission_ids' id="permissions" />
                                                    {permission.name}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="mb-3 row">
                                    <label htmlFor="name"
                                        className="fw-semibold col-sm-2 col-form-label">
                                        Asign Permissions
                                    </label>
                                    <div className="col-12 col-sm-10">
                                        {permissions.map(permission => (
                                            <div key={permission.id}>
                                                <input type="checkbox" className="form-check-input" value={permission.id} name='permissions' id="permissions" />
                                                <label htmlFor="" >{permission.name}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                                <div className="mb-3 buttons">
                                    <Button type="submit"
                                        className="btn btn-warning mb-3"
                                        disabled={processing}>
                                        Create User
                                    </Button>
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