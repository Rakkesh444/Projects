import AdminLayout from "../Layouts/AdminLayout";
import "../../../css/Contact.css";
import { Head, Link } from "@inertiajs/react";
import {
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined,
    MailOutlined

} from '@ant-design/icons';
import { Col, Row } from "antd";
import UserLayouts from "../Layouts/UserLayout";
export default function About() {
    return (
        <>
            <Head title="Contact" />
            <UserLayouts>
                <div className="container Contact-Container">
                    <Row className="Contact-Row-Section">
                        <Col span={12} className="text-dark">
                            <h1>You Contact Our Team</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius iure enim amet officia nihil ullam. Ducimus dolore sequi consequatur dolorem distinctio mollitia dolor nam minima, perspiciatis veritatis non, eum quos!</p>
                            <div className="Links d-flex gap-4 align-items-center text-warning">
                                <Link href="" className="nav-link text-warning"><TwitterOutlined /></Link>
                                <Link href="" className="nav-link text-warning"><FacebookOutlined /></Link>
                                <Link href="" className="nav-link text-warning"><InstagramOutlined /></Link>
                                <Link href="" className="nav-link text-warning"><MailOutlined /></Link>
                            </div>

                            <div className="buttons">
                                <Link href="" className="btn btn-danger mt-4">Send</Link>
                            </div>
                        </Col>
                        <Col span={12}>
                            <img src="" alt="" />
                        </Col>
                    </Row>
                </div>
            </UserLayouts>
        </>
    )
}