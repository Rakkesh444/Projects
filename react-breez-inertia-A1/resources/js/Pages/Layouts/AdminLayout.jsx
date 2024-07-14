import { usePage, Link } from "@inertiajs/react";
import React, { useState } from "react";
import "../../../css/dashboard.css";
import { Layout, Menu, theme, Dropdown, Space } from 'antd';
import { usePermissions } from "../Admin/PermisionPage/Permissionpage";
const AdminLayout = ({ children }) => {
    const { Header, Sider, Content } = Layout;
    // to get Authenticatable User Name
    const { auth } = usePage().props;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { hasPermission } = usePermissions();
    const { hasRole } = usePermissions();
    return (
        <>
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
                        height: "100vh",
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
                        mode='inline'>
                        {/* DashBoard Menu */}
                        <Menu.Item key="AdminDashboar" icon={<i className="bi bi-bookmark-fill"></i>}>
                            <Link href={route('dashboard')} className="nav-link Sidebar-Menu-Links">Dashboard</Link>
                        </Menu.Item>

                        {/* User Permissions Sub Menu's  || Assign Permissions To Create User*/}
                        {hasPermission('Create Users') && (
                            <Menu.SubMenu key='userPermissions' title="Users" icon={<i className="bi bi-people-fill"></i>}>
                                <Menu.Item key='userPermissionsONE'>
                                    <Link className='nav-link Sidebar-Menu-Links' href={route('users.create')} >Create User</Link>
                                </Menu.Item>
                            </Menu.SubMenu>
                        )}

                        {/* Roles Permissions Sub Menu's */}
                        <Menu.SubMenu key='rolesPermissions' title="Create" icon={<i className="bi bi-person-lock"></i>}>
                            {/* Create Role Menu || Assign Permission To Create Role*/}
                            {hasPermission('Create Role') && (
                                <Menu.Item key='rolesPermissionsOne' >
                                    <Link href={route('roles.create')} className="Sidebar-Menu-Links">Create Roles</Link>
                                </Menu.Item >
                            )}
                            {/* Create Permissions Menu || Assign Permission To Create Permission*/}
                            {hasPermission('Create Permissions') && (
                                <Menu.Item key='rolesPermissionsTWO'>
                                    <Link href={route('permissions.create')} className="Sidebar-Menu-Links">Create Permission</Link>
                                </Menu.Item>
                            )}
                            {hasPermission('Permission Group') && (
                                <Menu.Item key='PermissionGroup'>
                                    <Link href={route('group')} className="Sidebar-Menu-Links">PermissionGroup</Link>
                                </Menu.Item>
                            )}
                        </Menu.SubMenu>

                        {/* See All Roles & Users & Permissiosn List Menu's */}
                        <Menu.SubMenu key='ListLiks' title="List" icon={<i className="bi bi-tablet"></i>}>
                            {/* User List Menu || Assign Permission To User List*/}
                            {hasPermission('User List') && (
                                <Menu.Item key='UserList' >
                                    <Link href={route('users.index')} className='nav-link Sidebar-Menu-Links'>User List</Link>
                                </Menu.Item >
                            )}
                            {/*  Role List Menu || Assign Permission To Role List*/}
                            {hasPermission('Role List') && (
                                <Menu.Item key='RoleLists'>
                                    <Link href={route('roles.index')} className='nav-link Sidebar-Menu-Links'>Role List</Link>
                                </Menu.Item>
                            )}
                            {/* Permissions List Menu || Assign Permission To Permissions List*/}
                            {hasPermission('Permissions List') && (
                                <Menu.Item key='PermissionsList'>
                                    <Link href={route('permissions.index')} className='nav-link Sidebar-Menu-Links'>Permission List</Link>
                                </Menu.Item>
                            )}
                            {/* Roles And Permissions List Menu || Assign Permission To Permissions List*/}
                            {hasPermission('RPList') && (
                                <Menu.Item>
                                    <Link href={route('list')} className="nav-link Sidebar-Menu-Links">R & P List</Link>
                                </Menu.Item>
                            )}
                        </Menu.SubMenu>
                    </Menu>
                </Sider >

                <Layout className="Main-Layout">
                    <Header
                        className='Header'
                        style={{
                            padding: 0,
                            width: '100%',
                            zIndex: 99,
                        }} >
                        <div className="Boot-Canvas">
                            <Link href="" className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" > Menu</Link>
                        </div>
                        <div className='div-1'>
                            <Link href={route('dashboard')}>
                                <h3 className="display-6" style={{ color: "#6b6868" }}>A1Ideaz</h3>
                            </Link>
                        </div>
                        {/* User Name DropDown */}
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: 'Logout',
                                        label: (
                                            <span>
                                                <Link href={route('logout')} className="nav-link text-dark">
                                                    <i className="bi bi-box-arrow-in-left"></i> Logout</Link>
                                            </span>
                                        )
                                    },
                                    {
                                        key: 'Profile',
                                        label: (
                                            <span>
                                                <Link href={route('profile')} className="nav-link text-dark">
                                                    <i className="bi bi-person-fill"></i> Profile</Link>
                                            </span>
                                        ),
                                    },
                                ]
                            }}
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
                        className="Admin-Content-Layout"
                        width="75%"
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout >
        </>
    )
}

export default AdminLayout;