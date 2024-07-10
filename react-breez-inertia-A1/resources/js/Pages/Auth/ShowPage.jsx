import { Head, Link, usePage } from "@inertiajs/react";
import "../../../css/Profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Breadcrumb } from "antd";
import AdminLayout from "../Layouts/AdminLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Profile() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`/show`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id])
    return (
        <>
            <Head title="Profile" />
            <AdminLayout>
                <div className="container Profile-Container">
                    <h1 className="mb-4 display-1">Profile</h1>
                    <div className="Profile-Details d-flex flex-column">
                        <p className="mt-3">Name :  </p>
                        <p className="mt-5">Email : </p>
                    </div>
                    <Breadcrumb
                        style={{
                            marginTop: "50px",
                            fontSize: "15px",
                            color: "#fff",
                        }}
                        items={[
                            {
                                title: <Link href={route('dashboard')}>Dashboard</Link>
                            },
                            {
                                title: <Link href={route('contact')}>Aboute</Link>
                            },
                            {
                                title: <Link href={route('about')}>Contact</Link>
                            }
                        ]}
                    />
                    <div className="Logout">
                        <Link href={route('logout')} className="nav-link mt-5 text-warning fs-4">Logout <span><i class="bi bi-box-arrow-in-right"></i></span></Link>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}