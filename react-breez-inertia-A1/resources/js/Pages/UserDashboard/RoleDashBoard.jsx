
import { Head, Link, usePage } from "@inertiajs/react";
import { Layout, Menu, theme, Dropdown, Space } from "antd";
import { useState } from "react";
import "../../../css/dashboard.css";
import { usePermissions } from "../Admin/PermisionPage/Permissionpage";
export default function RoleDashboard({ children }) {
    const { auth } = usePage().props;
    const { hasRole } = usePermissions();
    const { hasPermission } = usePermissions();
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const anyRoll = auth.user.roles;
    return (
        <>
            <Head title="YourPanel" />
            <Layout>
                <Sider
                    className=".Main-Side-Bar"
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    breakpoint="lg"
                    collapsedWidth="50"
                    style={{
                        position: 'fixed',
                        height: '100vh',
                        zIndex: 9999,
                        background: "#fff"
                    }}>
                    <Menu
                        theme="light"
                        mode="inline"
                        style={{
                            marginTop: "70px"
                        }}>
                        {/* Dashboard Link */}
                        <Menu.Item key="RoleDashboard" className="Menu-Links " icon={<i className="Menu-Links bi bi-bookmark-fill"></i>}>
                            <Link href={route('dashboard')}>Dashboard</Link>
                        </Menu.Item>
                        {/* Peermissions setup */}

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
                                    <Link href={route('roles.create')}>Create Roles</Link>
                                </Menu.Item >
                            )}
                            {/* Create Permissions Menu || Assign Permission To Create Permission*/}
                            {hasPermission('Create Permissions') && (
                                <Menu.Item key='rolesPermissionsTWO'>
                                    <Link href={route('permissions.create')}>Create Permission</Link>
                                </Menu.Item>
                            )}
                            {hasPermission('Permission Group') && (
                                <Menu.Item key='PermissionGroup'>
                                    <Link href={route('group')} className="Sidebar-Menu-Links">PermissionGroup</Link>
                                </Menu.Item>
                            )}
                        </Menu.SubMenu>
                        {/* See All Roles & Users & Permissiosn List Menu's */}
                        <Menu.SubMenu key='ListLinks' title="List" icon={<i className="bi bi-tablet"></i>}>
                            {/* User List Menu || Assign Permission To User List*/}
                            {hasPermission('User List') && (
                                <Menu.Item key='UserList' >
                                    <Link href={route('users.index')} className='nav-link Sidebar-Menu-Links'>User List</Link>
                                </Menu.Item >
                            )}
                            {/*  Role List Menu || Assign Permission To Role List*/}
                            {hasPermission('Role List') && (
                                <Menu.Item key='RoleLists'>
                                    <Link href={route('rolelist')} className='nav-link Sidebar-Menu-Links'>Role List</Link>
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
                        {/* Sections Link [About/Contact/Help]*/}
                        <Menu.Item key="r-1" className="Menu-Links " icon={<i className="Menu-Links bi bi-clipboard-fill"></i>}>
                            <Link href={route('about.aboutIndex')}>About</Link>
                        </Menu.Item>
                        <Menu.Item key="r-2" className="Menu-Links " icon={<i className="Menu-Links bi bi-chat-fill"></i>}>
                            <Link href={route('contacts.aboutIndex')}>Contact</Link>
                        </Menu.Item>
                        <Menu.Item key="r-3" className="Menu-Links " icon={<i className="Menu-Links bi bi-exclude"></i>}>
                            <Link href={route('products.productsIndex')}>Blog</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        className='Header'
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            position: 'sticky',
                            top: 0,
                            zIndex: 1,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                        <div className="container d-flex align-items-center justify-content-around">
                            <h5 className="display-6 fw-semibold text-secondary">DashBoard</h5>
                            <div className="d-flex">
                                {hasRole('Admin') && (
                                    <Link href={route('admin.index')} className="nav-link ms-5 fw-semibold text-success">Admin Dashboard</Link>
                                )}
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: 'logout',
                                                label: (
                                                    <span>
                                                        <Link href={route('logout')} className="nav-link text-dark">
                                                            <i class="bi bi-box-arrow-in-left"></i> Logout</Link>
                                                    </span>
                                                ),

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
                                    trigger={['click']}
                                >
                                    <Link href="" onClick={(e) => e.preventDefault()} className="nav-link ms-5 fw-semibold text-danger">
                                        <Space>
                                            {auth.user.name}
                                            <i className="bi bi-chevron-down"></i>
                                        </Space></Link>
                                </Dropdown>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            height: "100vh"
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}