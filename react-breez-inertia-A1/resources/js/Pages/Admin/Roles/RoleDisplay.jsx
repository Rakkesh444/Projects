import React from 'react';
import ReactDOM from 'react-dom';
import '../../../../css/View.css';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '../../Layouts/AdminLayout';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function ViewData({ auth }) {
    const { roles, flash } = usePage().props
    const [data, setData, id] = useState([]);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        axios.get('/roledata')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])
    return (
        <>
            <Head title='View' />
            <AdminLayout user={auth.user}>
                <div className="container mt-5">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h1 className="display-4 text-success text-center fs-1 Create-Header">
                            Role List
                        </h1>
                        <Link href={route('roles.create')} className="btn btn-primary py-1 px-4">Create Role</Link>
                    </div>
                    {flash.success && visible && (
                        <div className='alert alert-success alert-dismissible fade show' role="alert">
                            <strong>Updated : </strong> {flash.success}
                            <button type='button' className='btn-close' data-mdb-dismiss="alert" onClick={() => setVisible(false)}></button>
                        </div>
                    )}
                    <table className='table table-striped table-hover mt-5'>
                        <thead className='table-warning'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map(role => (
                                <tr key={role.id}>
                                    <td>{role.id}</td>
                                    <td>{role.name}</td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            {auth.user.permissions.includes('Edit Role') && (
                                                <Link href={route('roles.edit', role.id)} className='btn btn-primary py-0 px-4'>Edit</Link>
                                            )}
                                            {
                                                auth.user.permissions.includes('Delete Role') && (
                                                    <Link
                                                        href={route('roles.destroy', role.id)}
                                                        method='DELETE'
                                                        as='button'
                                                        className='btn btn-danger py-0 px-3 mx-2'>Delete</Link>
                                                )}

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout >
        </>
    )
}