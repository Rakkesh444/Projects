
import React from 'react';
import ReactDOM from 'react-dom';
import { Head, Link, router, useForm, usePage } from "@inertiajs/react"
import '../../../../css/create.css'
import AdminLayout from "../../Layouts/AdminLayout";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Button } from "react-bootstrap";
export default function Register() {
    const { data, setData, processing, post } = useForm({});
    const { flash, permissionGroups } = usePage().props;
    //Alert Msg Close Setup || Adding onClick() Methos In the Cose Btn
    const [visible, setVisible] = useState(true);
    const [groupId, setGroupId] = useState('');
    const [permissions, setPermissions] = useState(['']);
    const handlePermissionChange = (id, value) => {
        const newPermission = [...permissions]
        newPermission[id] = value;
        setPermissions(newPermission);
    }

    const addPermissions = () => {
        setPermissions([...permissions, ''])
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Inertia.post('/register', form);
        //router.post('/rolestore', data);
        // post(route('rolestore'));
        post(route('permissions.store', { group_ids: groupId, permissions }));
        // Inertia.post('permissions.store', { group_ids: groupId, permissions })
    };


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
                                    Create New Pemissions
                                </h1>
                                {flash.success && visible && (
                                    <div class="alert alert-success alert-dismissible fade show" role="alert" data-mdb-alert-init>
                                        <strong>Success : </strong> {flash.success}
                                        <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close" onClick={() => setVisible(false)}></button>
                                    </div>
                                )}
                                <div className="mb-3 row">
                                    <label htmlFor="name"
                                        className="fw-semibold col-sm-2 col-form-label">
                                        Permission group
                                    </label>
                                    <div className="col-12 col-sm-10">
                                        <select className="form-select"
                                            id="groupId"
                                            value={groupId}
                                            onChange={(e) => setGroupId(e.target.value)}
                                        >
                                            <option value="">Select Group Name</option>
                                            {permissionGroups.map(group => (
                                                <option key={group.id} value={group.id}>{group.name}</option>
                                            ))}

                                        </select>
                                    </div>
                                </div>
                                {permissions.map((permission, id) => (
                                    <div className="mb-3 row" key={id}>
                                        <label htmlFor="name"
                                            className="fw-semibold col-sm-2 col-form-label">
                                            Permission Name
                                        </label>
                                        <div className="col-12 col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control focus-ring focus-ring-danger"
                                                id={`permission${id}`}
                                                value={permission}
                                                name="name"
                                                onChange={(e) => handlePermissionChange(id, e.target.value)}
                                            />
                                        </div>
                                    </div>

                                ))}
                                <div className="mb-3 buttons d-flex px-3">
                                    <button type="submit"
                                        className="btn btn-success py-1 m-3 px-5 mb-3"
                                        onClick={addPermissions}
                                    >
                                        Add
                                    </button>
                                    <button type="submit"
                                        className="btn btn-warning py-1 m-3 px-5 mb-3"
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