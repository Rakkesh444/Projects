import { Head, Link } from "@inertiajs/react";
import RoleDashboard from "./RoleDashBoard";
export default function Products() {
    return (
        <>
            <RoleDashboard>
                <Head title="Products" />
                <div className="container p-5">
                    {/* Products Cards */}
                    <div className="row row-cols-1 row-cols-md-4">
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-solid fa-droplet m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>Apps</h6>
                                    <p className="mt-2">Develope Advance Apps</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your App</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-brands fa-squarespace m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>Web Sites</h6>
                                    <p className="mt-2">Develope Advance Web Apps</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your Web Apps</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-brands fa-openid m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>AI Apps</h6>
                                    <p className="mt-2">Develope Advance AI Apps</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your AI App</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-regular fa-moon m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>Domains</h6>
                                    <p className="mt-2">Provided By Names</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your Domain</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row row-cols-1 row-cols-md-4">
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-solid fa-droplet m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>Apps</h6>
                                    <p className="mt-2">Develope Advance Apps</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your App</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-brands fa-squarespace m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>Web Sites</h6>
                                    <p className="mt-2">Develope Advance Web Apps</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your Web Apps</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-brands fa-openid m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>AI Apps</h6>
                                    <p className="mt-2">Develope Advance AI Apps</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your AI App</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card p-3">
                                <i class="fa-regular fa-moon m-auto text-secondary" style={{ fontSize: '70px' }}></i>
                                <div className="card-body">
                                    <h6>Domains</h6>
                                    <p className="mt-2">Provided By Names</p>
                                    <p className="fw-semibold" style={{
                                        fontSize: '12px'
                                    }}>Choose your Domain</p>

                                    <Link href="" className="btn btn-danger py-1 px-4 mt-3"> Click Me !! </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RoleDashboard>
        </>
    )
}