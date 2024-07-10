import { Head, usePage } from "@inertiajs/react";
import RoleDashboard from "./RoleDashBoard";
import '../../../css/Contact.css';
import { Link } from "@inertiajs/react";
export default function About() {
    return (
        <>
            <RoleDashboard>
                <Head title="Contact" />
                <div className="containe-fluid p-5">
                    <div className="About-Section p-5">
                        <div className="card p-5">
                            <div className="headers d-flex align-items-center justify-content-around">
                                <div>
                                    <h6 className="display-6 fw-semibold">A1Ideaz</h6>
                                    <p className="">This is a Big Platform For Developing the Advanced Features Application Using the Latest Technologies</p>
                                    <h4 className="display-5">Software Development</h4>
                                </div>
                                <div>
                                    <i class="fa-solid fa-bolt FLASH-ICONS"></i>
                                </div>
                            </div>
                            {/* links */}
                            <div className="links mt-5 d-flex align-items-center justify-content-around">
                                <div className="">
                                    <Link href="" className="nav-link fs-5">Mail</Link>
                                    <Link href="" className="nav-link fs-5">Enquiry</Link>
                                    <Link href="" className="nav-link fs-5">Call : 7659387340</Link>
                                    <Link href="" className="nav-link fs-5">Phone: 04634 746453</Link>
                                    <Link href="" className="btn btn-dark mt-4">Chat</Link>
                                </div>
                                <div className="">
                                    <h5>Form</h5>
                                    <div className="input-group flex-nowrap mt-3">
                                        <span className="input-group-text">Name</span>
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>

                                    <div className="input-group flex-nowrap mt-4">
                                        <span className="input-group-text">Email</span>
                                        <input type="email" className="form-control" placeholder="User Email" />
                                    </div>
                                    <div className="input-group flex-nowrap mt-4">
                                        <span className="input-group-text">Phone</span>
                                        <input type="email" className="form-control" placeholder="User Number" />
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn btn-danger mt-4">Enquiry</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RoleDashboard>
        </>
    )
}