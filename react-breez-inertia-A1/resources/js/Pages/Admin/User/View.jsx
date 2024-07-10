import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../../../css/View.css';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '../../Layouts/AdminLayout';
import { usePermissions } from '../PermisionPage/Permissionpage';
export default function ViewData() {
    const { user, auth, flash } = usePage().props;
    const [visible, setVisible] = useState(true);
    // const [data, setData, id] = useState([]);
    // useEffect(() => {
    //     axios.get('/data')
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }, [])
    const { hasRole } = usePermissions();
    const { hasPermission } = usePermissions();
    return (
        <>
            <Head title='View' />
            <AdminLayout>
                <div className="container">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h1 className='display-6 mt-5 mb-5 text-success'>View User Details
                        </h1>
                        <Link href={route('users.create')} className='btn btn-primary py-1 px-4'>Create User</Link>
                    </div>
                    {flash.success && visible && (
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Updated : </strong> {flash.success}
                            <button type="button" className="btn-close" data-mdb-dismiss="alert" onClick={() => setVisible(false)}>
                                &times;
                            </button>
                        </div>
                    )}
                    <table className='table table-striped table-hover'>
                        <thead className='table-warning'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(users => (
                                <tr key={users.id}>
                                    <td>{users.id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.roles.map(userrole => (
                                        <p>{userrole.name}</p>
                                    ))}</td>
                                    <td>
                                        {hasPermission('Edit Users') && (
                                            <Link href={route('users.edit', users.id)} className='btn btn-primary py-1 px-4 m-2'>Edit</Link>
                                        )}
                                        {hasPermission('Delete Users') && (
                                            <Link href={route('users.destroy', users.id)}
                                                method='DELETE'
                                                as='button'
                                                className='btn btn-danger py-1 px-4 m-2'>Delete</Link>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
        </>
    )
}