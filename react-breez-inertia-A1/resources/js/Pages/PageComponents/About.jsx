import AdminLayout from "../Layouts/AdminLayout";
import "../../../css/About.css";
import { Head } from "@inertiajs/react";
import UserLayouts from "../Layouts/UserLayout";
export default function About() {
    return (
        <>
            <Head title="About" />
            <UserLayouts>
                <div className=" container Aboute-Container">
                    <h1 className="text-dark text-center display-1">About</h1>
                    <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae totam ratione qui laudantium eaque, perferendis repellat odio molestias ex molestiae modi vero incidunt distinctio dolor. Dolorum iste iure ipsam consequuntur?</p>
                </div>
            </UserLayouts>
        </>
    )
}