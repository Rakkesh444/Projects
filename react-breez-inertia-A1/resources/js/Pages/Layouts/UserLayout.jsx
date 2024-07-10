import { usePage, Link, Head } from "@inertiajs/react";
import React, { useState } from "react";
import "../../../css/dashboard.css";
import { usePermissions } from "../Admin/PermisionPage/Permissionpage";
import { Layout, Menu, theme, Dropdown, Space } from 'antd';
const UserLayouts = ({ children }) => {
    const { Header, Sider, Content } = Layout;
    // to get Authenticatable User Name
    const { auth, role, userrole, user, roles } = usePage().props;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { hasRole } = usePermissions();
    const { hasPermission } = usePermissions();
    const menu = (
        <Menu>
            <Menu.Item key="Logout" icon={<i className="bi bi-box-arrow-in-left"></i>}>
                <Link href={route('logout')} className="nav-link">Logout</Link>
            </Menu.Item>
            <Menu.Item key="Profile" icon={<i className="bi bi-person-fill"></i>}>
                <Link href={route('profile')} className="nav-link">Profile</Link>
            </Menu.Item>
            {hasRole('Admin') && (
                <Menu.Item key="admin" icon={<i className="bi bi-person-fill"></i>}>
                    <Link href={route('admin.index')} className="nav-link text-dark">
                        Admin Panel</Link>
                </Menu.Item>
            )}
            {/* {auth.user.roles.join(', ') && (
                <Menu.Item key="manager" icon={<i className="bi bi-person-fill"></i>}>
                    <Link href={route('yourrole')} className="nav-link text-dark">
                        {auth.user.name} </Link>
                </Menu.Item>
            )} */}
        </Menu>
    )
    return (
        <>
            <Head title="Dashboard" />
            <Layout className="Main-Container-Layout">
                <Sider
                    className='Main-Side-Bar'
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    breakpoint='lg'
                    collapsedWidth="50"
                    style={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        height: "100vh",
                        right: 0,
                        paddingTop: "60px",
                        overflow: "auto",
                        zIndex: 9999,
                    }}

                >
                    <div className="Sidebar-Menu-Inside-Content">
                        <h3 className="text-light ms-4 mb-4">A1Ideaz</h3>
                        <span className="text-light ms-4">{auth.user.name}</span>
                    </div>
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme='light'
                        mode='inline'
                        className="Menu-Links"
                        style={{
                            height: "100%"
                        }} >
                        <Menu.Item key="1" icon={<i className="bi bi-bookmark-fill"></i>} >
                            <Link href={route('dashboard')} className="nav-link Sidebar-Menu-Links">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<i className="bi bi-moon"></i>} >
                            <Link href={route('about')} className='nav-link Sidebar-Menu-Links'>About</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<i className="bi bi-chat"></i>} >
                            <Link href={route('contact')} className='nav-link Sidebar-Menu-Links'>Contact</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<i className="bi bi-clipboard2-data"></i>} >
                            <Link href="" className='nav-link Sidebar-Menu-Links'>Help</Link>
                        </Menu.Item>

                        {/* {hasPermission('Create Users') && (
                            <Menu.SubMenu key='userPermissions' title="Users" icon={<i className="bi bi-people-fill"></i>}>
                                <Menu.Item key='userPermissionsONE'>
                                    <Link className='nav-link Sidebar-Menu-Links' href={route('users.create')} >Create User</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        )}

                        {hasPermission('Create Role') && (
                            <Menu.SubMenu key='rolesPermissions' title="Create" icon={<i className="bi bi-person-lock"></i>}>
                                <Menu.Item key='rolesPermissionsOne' >
                                    <Link href={route('roles.create')}>Create Roles</Link>
                                </Menu.Item >
                            </Menu.SubMenu>
                        )}

                        {hasPermission('Create Permissions') && (
                            <Menu.SubMenu key='rolesPermissions_01' title="Create" icon={<i className="bi bi-person-lock"></i>}>
                                <Menu.Item key='rolesPermissionsTWO'>
                                    <Link href={route('permissions.create')}>Create Permission</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        )}
                        {hasPermission('User List') && (
                            <Menu.SubMenu key='ListLinks' title="List" icon={<i className="bi bi-tablet"></i>}>
                                <Menu.Item key='UserList' >
                                    <Link href={route('users.index')} className='nav-link Sidebar-Menu-Links'>User List</Link>
                                </Menu.Item >
                            </Menu.SubMenu>
                        )}
                        {hasPermission('Role List') && (
                            <Menu.SubMenu key='ListLinks_01' title="List" icon={<i className="bi bi-tablet"></i>}>
                                <Menu.Item key='RoleLists'>
                                    <Link href={route('rolelist')} className='nav-link Sidebar-Menu-Links'>Role List</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        )}
                        {hasPermission('Permissions List') && (
                            <Menu.SubMenu key='ListLinks_02' title="List" icon={<i className="bi bi-tablet"></i>}>
                                <Menu.Item key='PermissionsList'>
                                    <Link href={route('permissions.index')} className='nav-link Sidebar-Menu-Links'>Permission List</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        )} */}


                    </Menu>
                </Sider>

                <Layout className="Main-Layout">
                    <Header
                        className='Header'
                        style={{
                            padding: 0,
                        }} >
                        <div className="Boot-Canvas">
                            <Link href="" className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" > Menu</Link>
                        </div>
                        <div className='div-1'>
                            <h3 className="display-6" style={{ color: "#6b6868" }}>A1Ideaz</h3>
                        </div>
                        {/* User Name DropDown */}
                        <Dropdown
                            overlay={menu}
                            // Clicking Property, You Have Don't Use This property Dropdown is Assigned Hover Type
                            trigger={['click']}
                        >
                            <Link href="" onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <p className="text-danger">
                                        {auth.user.name}
                                        <i className="bi bi-chevron-down"></i>
                                    </p>
                                </Space>
                            </Link>
                        </Dropdown>
                        {/* User Name DropDown End*/}
                    </Header>
                    <div className="offcanvas offcanvas-start bg-dark" data-bs-theme="dark" id="offcanvasExample" >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">A1ideaz <span className="fs-6 text-danger">{auth.user.name}</span></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="Offcanvas-Links">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link href={route('dashboard')} className="nav-link"><span><i className="bi bi-bookmark-fill"></i></span> Dashboard</Link></li>
                                    <li className="nav-item dropdown">
                                        <Link href="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><span><i className="bi bi-bookmark-fill"></i></span> Features</Link>
                                        <ul className="dropdown-menu">
                                            <li><Link href={route('create')} className="dropdown-item">Create User</Link></li>
                                            <li><Link href={route('delete')} className="dropdown-item">Delete User</Link></li>
                                            <li><Link href="" className="dropdown-item">Update User</Link></li>
                                            <li><Link href="" className="dropdown-item">Viiw User List</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link href={route('about')} className="nav-link"><span><i className="bi bi-bookmark-fill"></i></span> About</Link></li>
                                    <li className="nav-item"><Link href={route('contact')} className="nav-link"><span><i className="bi bi-bookmark-fill"></i></span> Contact</Link></li>
                                    <li className="nav-item"><Link href="" className="nav-link"><span><i className="bi bi-bookmark-fill"></i></span> Help</Link></li>
                                    <li className="nav-item"><Link href={route('logout')} className="nav-link"><span><i className="bi bi-bookmark-fill"></i></span> Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Content
                        className="Admin-Content-Layout">
                        {children}

                        {auth.user.roles.join(', ') && (
                            <div className="row">
                                    <div className="col-md-5">
                                <Link href={route('yourrole')}>
                                        <div className="card p-5 d-flex flex-row align-items-center justify-content-between mx-5" style={{
                                            background: ' linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
                                        }}>
                                            <div style={{ position: 'relative', left: '-20px' }}>
                                                <h5 className='text-light fs-6 display-6 fw-semibold'>Your Dashboar</h5>
                                                <p className='text-secondary'>{user.name}</p>

                                            </div>
                                            <p className='card-text text-light d-flex gap-2' style={{ position: 'relative', left: '20px' }}><i className="bi bi-people-fill"></i> {roles.map((role, id) => (
                                                <span key={id}> {role}</span>
                                            ))}</p>
                                        </div>
                                </Link>
                                    </div>
                            </div>
                        )}
                    </Content>
                </Layout>
            </Layout >
        </>
    )
}

export default UserLayouts;