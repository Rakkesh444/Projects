import React from 'react';
import ReactDOM from 'react-dom';
import '../../../../css/View.css';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '../../Layouts/AdminLayout';
import { usePermissions } from './Permissionpage';

export default function ViewData({ auth }) {
    const { permissions } = usePage().props
    // const [data, setData, id] = useState([]);
    // useEffect(() => {
    //     axios.get('/roledata')
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
            <AdminLayout user={auth.user}>
                <div className="container">
                    <div className='d-flex align-items-center justify-content-between'>
                        <h1 className='display-6 mt-5 mb-5 text-success'>View Permission List
                        </h1>
                        <Link href={route('permissions.create')} className='btn btn-primary py-1 px-2'>Create Permission</Link>
                    </div>

                    <table className='table table-striped table-hover'>
                        <thead className='table-warning'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {permissions.map(permission => (
                                <tr key={permission.id}>
                                    <td>{permission.id}</td>
                                    <td>{permission.name}</td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            {hasPermission('Edit Permissions') && (
                                                <Link href={route('permissions.edit', permission.id)} className='btn btn-primary py-0 px-4'>Edit</Link>
                                            )}
                                            {hasPermission('Delete Permissions') && (
                                                <Link
                                                    href={route('permissions.destroy', permission.id)}
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