import { Head, usePage } from "@inertiajs/react";
import RoleDashboard from "./RoleDashBoard";
import { Link } from "@inertiajs/react";
export default function About() {
    const { imgurl1 } = usePage().props;
    return (
        <>
            <RoleDashboard>
                <Head title="About" />
                <div className="container p-5">
                    <div className="About-Section d-flex align-items-center justify-content-around">
                        <div className="text">
                            <h6 className="display-6 fw-semibold text-secondary">A1Ideaz</h6>
                            <p className="">This is a Big Platform For Developing the Advanced Features Application Using the Latest Technologies</p>
                            <h4 className="display-5">Software Development</h4>
                            <Link href={route('products.productsIndex')} className="btn btn-dark" data-mdb-ripple-init>Product</Link>
                        </div>
                        <div>
                            <img src={imgurl1} alt="" />
                        </div>
                    </div>
                </div>
            </RoleDashboard>
        </>
    )
}