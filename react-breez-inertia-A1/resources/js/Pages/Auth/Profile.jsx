import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';
export default function profilePage() {
    const { auth, user, flash } = usePage().props;
    // const { data, setData, put } = useForm({
    //     name: auth.user.name,
    //     email: auth.user.email
    // })
    const [visible, setVisible] = useState(true);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const submit = (e) => {
        e.preventDefault();
        router.put('updateprofile', { name, email })
        // Inertia.put('updateprofile', { name, email })
    };
    return (
        <>
            <Head title="Profile" />
            <section className="container-fluid bg-dark d-flex align-items-center justify-content-center"
                style={{
                    height: "100vh",
                    width: "100%",
                }}>
                <div className="container">
                    <form onSubmit={submit}>
                        <div className='' style={{ position: 'relative', top: '-75px' }}>
                            <h3 className='display-6 text-light'>Profile</h3>
                            {flash.success && visible && (
                                <div className='alert alert-success alert-dismissible fade show' role="alert">
                                    {flash.success}
                                    <button type="button" className='btn-close' onClick={() => setVisible(false)} data-mdb-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )}                        </div>
                        <div className="row">
                            <label htmlFor="" className="form-label text-light fw-semibold">User Name</label>
                            <div className="col-md-10">
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <label htmlFor="" className="form-label text-light fw-semibold">User Email</label>
                            <div className="col-md-10">
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="buttons row mt-4">
                            <div className="col-md-3">
                                <button type="submit" className="btn btn-danger">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}