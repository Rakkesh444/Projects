import React, { useEffect, useState } from 'react';
import "../../css/dashboard.css";
import AdminLayout from './Layouts/AdminLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
export default function DashBoard() {
    const { userCount, roleCount, permissionCount, roles } = usePage().props;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
        const intervel = setInterval(fetchData, 5000);
        return () => clearInterval(intervel);
    }, [])

    const fetchData = async () => {
        const response = await fetch('/dashboard/data');
        // const response = await axios.get('admin.manager');
        const result = await response.json();
        setData(result);
    }
    return (
        <>
            < Head title='Dashboards' />
            <AdminLayout>
                <div className='container Admin-Dashboar-container'>
                    {/* Admin Cards */}
                    <div className="Box-Container">
                        <div className="row row-cols-sm-1 row-cols-md-3">
                            <div className="col mt-4">
                                <Link href={route('users.index')}>
                                    <div className="card p-5 d-flex flex-row align-items-center justify-content-between" style={{
                                        background: ' linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
                                    }}>
                                        <div style={{ position: 'relative', left: '-20px' }}>
                                            <h5 className='text-light fs-6 display-6 fw-semibold'>User Count</h5>
                                            <p className='text-secondary'>Update The Count</p>
                                        </div>
                                        <p className='card-text text-light fs-5 d-flex gap-2' style={{ position: 'relative', left: '20px' }}><i className="bi bi-people-fill"></i>{userCount}</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col mt-4">
                                <Link href={route('roles.index')}>
                                    <div className="card p-5 d-flex flex-row align-items-center justify-content-between" style={{
                                        background: ' radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)',
                                    }}>
                                        <div style={{ position: 'relative', left: '-20px' }}>
                                            <h5 className='text-light fs-6 display-6 fw-semibold'>Role Count</h5>
                                            <p className='text-secondary'>Update The Count</p>
                                        </div>
                                        <p className='card-text text-light fs-5 d-flex gap-2' style={{ position: 'relative', left: '20px' }}><i className="bi bi-intersect"></i>{roleCount}</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col mt-4">
                                <Link href={route('permissions.index')}>
                                    <div className="card p-5 d-flex flex-row align-items-center justify-content-between" style={{
                                        background: 'linear-gradient(107.2deg, rgb(150, 15, 15) 10.6%, rgb(247, 0, 0) 91.1%)',
                                    }}>
                                        <div style={{ position: 'relative', left: '-20px' }}>
                                            <h5 className='text-light fs-6 display-6 fw-semibold'>Permission Count</h5>
                                            <p className='text-secondary'>Update The Count</p>
                                        </div>
                                        <p className='card-text text-light fs-5 d-flex gap-2' style={{ position: 'relative', left: '20px' }}><i className="bi bi-journal-text"></i>{permissionCount}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Live Chart Container */}
                    <div className="container mt-5">
                        <h3 className='display-5 text-secondary'>Live Chart</h3>
                        <ResponsiveContainer className="mt-5" width="100%" height={400}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray={"3 3"} />
                                <XAxis dataKey='name' />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke='#8884d8' activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </AdminLayout >
        </>
    )
}