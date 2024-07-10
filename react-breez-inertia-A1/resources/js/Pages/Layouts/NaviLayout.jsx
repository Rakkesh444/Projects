import { Link, usePage } from "@inertiajs/inertia-react"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavigationLay({ children }) {
    const { auth } = usePage().props;

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link href="" className="navbar-brand">A1Ideaz</Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navigationBar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* List and Links */}
                        <div className="collapse navbar-collapse" id="navigationBar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="" className="nav-link">{auth.user.name}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}