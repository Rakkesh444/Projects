import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function ShowLink() {
    const { error, status } = usePage().props;
    const [email, setEmail] = useState('');

    const handledSubmit = (e) => {
        e.preventDefaut();
        Inertia.post('/password/email', { email })
    }
    return (
        <> <Head title="ForgetPassword" />
            <div className="container-fluid bg-dark" style={{
                height: '100vh',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div className="text-center">
                    <h2 className="text-light display-5" style={{ position: 'relative', top: '150px' }}>Forget Form</h2>
                    {status && <div className="success">{status}</div>}
                    {error.email && <div className="errors">{error.email}</div>}
                </div>
                <form onSubmit={handledSubmit} style={{
                    width: '350px',
                    margin: 'auto',
                    background: 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)',
                    padding: '30px 60px',
                    borderRadius: '10px',
                }}>
                    <div className="" data-mdb-input-init>
                        <input type="email" id="email" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="row" style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center'
                    }}>
                        <button type="submit" className="col-md-5 btn btn-success mt-4">SendLink</button>
                    </div>
                </form>
            </div>
        </>
    )
}