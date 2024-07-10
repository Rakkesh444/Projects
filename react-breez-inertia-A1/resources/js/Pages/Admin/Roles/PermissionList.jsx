import React, { useEffect, useState } from 'react';
import axios from 'axios';
const RolePermissionList = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        axios.get('/data')
            .then(response => {
                setRoles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the roles and permissions!', error);
            });
    }, []);

    return (
        <div className='row'>
            <h4 className='text-primary display-5 mb-5 mt-3'>Permissions</h4>
            {roles.map(role => (
                <div key={role.id} className='col-md-4'>
                    <h6>{role.name}</h6>
                    <ul>
                        {role.permissions.map(permission => (
                            <div key={permission.id}>
                                <input type="checkbox" key={permission.id} value={permission.id} name='permissions' id='permissions' className='form-check-input' />
                                {permission.name}
                            </div>
                            //<li key={permission.id}>{permission.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default RolePermissionList;