import { Link, usePage } from "@inertiajs/react";
import { usePermissions } from "../PermisionPage/Permissionpage";

export default function RolePermission() {
    const { roles, groupnames, auth } = usePage().props;
    const { hasRole } = usePermissions();
    const { hasPermission } = usePermissions();
    return (
        <>
            <div className="conainer-fluid bg-dark" style={{ height: '250vh', width: '100%' }}>
                <div className="pt-5 px-5">
                    {/* {hasRole('Admin') && (
                        <Link href={route('admin.index')} className="btn btn-warning py-1 px-4p">Back</Link>
                    )} */}
                    {hasPermission('RPList') && (
                        <Link href={route('yourrole')} className="btn btn-warning py-1 px-4p">Back</Link>
                    )}
                </div>
                <div className="container p-5">
                    <div className="Head-Text d-flex align-items-center justify-content-between">
                        <h1 className="text-secondary display-6">Role | Permissions List</h1>
                        <div>
                            {hasPermission('Create Role') && (
                                <Link href={route('roles.create')} className="btn btn-danger py-1 px-4 m-2">Create Role</Link>
                            )}
                            {hasPermission('Create Permissions') && (
                                <Link href={route('permissions.create')} className="btn btn-danger py-1 px-4 m-2">Create Permission</Link>
                            )}
                        </div>
                    </div>
                    {/* Fetch The Roles */}
                    <div className="mt-5">
                        <h4 className="mb-4 text-light display-6">Roles</h4>
                        {roles.map(role => (
                            <div style={{
                                marginBottom: '10px',
                                marginLeft: '50px',
                            }}>
                                <ul>
                                    <li className="fw-semibold text-light" >{role.name}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Fetch The Permissions Groupa and Permissions */}
                    <div className="row mt-5">
                        <h4 className="mb-4 text-light  display-6">Permissions Groups | Permissions</h4>
                        {groupnames.map(group => (
                            <div className="col-md-4 p-5" style={{
                                background: 'rgba(255,255,255,.1)',
                                margin: '10px',
                                // width: '100%',
                                boxShadow: "0 0 2px #fff",
                            }}>
                                <h6 className="fw-semibold text-light" width="100%">{group.name}</h6>
                                <hr />
                                {group.permissions.map(permission => (
                                    <p className="text-secondary" width="100%" >{permission.name}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        </>
    )
}