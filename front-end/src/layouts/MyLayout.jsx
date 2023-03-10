import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Button, Dropdown, Avatar, Calendar, Popover } from 'antd';
import { DatabaseOutlined, HomeOutlined, UserOutlined, DollarOutlined, CarryOutOutlined, ShoppingOutlined, EditOutlined, LogoutOutlined, CalendarOutlined, LockOutlined } from '@ant-design/icons';
import moment from "moment";
import 'antd/dist/antd.css';
import './MyLayout.css';
import { Route, Switch } from "react-router-dom";
import EmployeeManagement from "../pages/EmployeeManagement";
import FinancialManagement from "../pages/FinancialManagement";
import MaterialManagement from "../pages/MaterialManagement";
import OrderManagement from "../pages/OrderManagement";
import QuotationsManagement from "../pages/QuotationsManagement";
import ReceiveGoods from "../pages/ReceiveGoods";
import RequisitionManagement from "../pages/RequisitionManagement";
import SupplierManagement from "../pages/SupplierManagement";
import PersonalManagement from "../pages/PersonalManagement";
import PasswordEdit from "../pages/PasswordEdit";
import documentflowmanagement from "../pages/documentflowmanagement";
import PaymentManagement from "../pages/PaymentManagement";
import Home from "../pages/Home";
import logo from "../graphs/logo.png";
import { getToken } from '../utils/auth';

const { Header, Footer, Content } = Layout;

const base = "http://localhost:3000/avatar/"

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

class MyLayout extends Component {
    state = {
        user: {
            name: JSON.parse(getToken()).userName,
            avatar: JSON.parse(getToken()).avatar
        },
        selectedKey: []
    };
    handleClick = (e) => {
        this.setState({
            current: e.key,
            selectedKeys: e.key
        });
        const path = e.key.toString();
        this.props.history.push({
            pathname: path,
        });
        console.log(e);
    };

    componentDidMount() {
        // ??????????????????????????????
        console.log(JSON.parse(getToken()));
        this.setState({
            user: {
                name: JSON.parse(getToken()).userName,
                avatar: JSON.parse(getToken()).avatar
            },
            selectedKeys: this.props.location.pathname
        })

        // ?????????????????????????????????????????????
        if (window.history && window.history.pushState) {
            window.onpopstate = function () {
                window.location.reload(true); //????????????
            };
        }
    };

    render() {
        const menu = (
            <Menu onClick={this.handleClick}>
                <Menu.Item key="/Home/personalManagement" icon={<EditOutlined />}>
                    ????????????
                </Menu.Item>
                <Menu.Item key="/Home/passwordEdit" icon={<LockOutlined />}>
                    ????????????
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                    key="/"
                    danger
                    onClick={() => {
                        this.props.history.push("/");
                    }}
                    icon={<LogoutOutlined />}
                >
                    ????????????
                </Menu.Item>
            </Menu>
        );
        const content = (
            <div
                style={{
                    width: "300px",
                    border: "1px solid #f56a00",
                    borderradius: "2px",
                }}
            >
                <Calendar fullscreen={false} />
            </div>
        );
        return (
            <Layout>
                <Header
                    className="ant-menu"
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <img src={logo} alt="error" className="logo" />
                    <Menu
                        style={{
                            float: 'left'
                        }}
                        mode="horizontal"
                        onClick={this.handleClick}
                        defaultSelectedKeys={['/Home']}
                        selectedKeys={this.state.selectedKeys}
                        items={[
                            getItem('??????', '/Home', <HomeOutlined />),
                            getItem('????????????', 'sub2', <UserOutlined />, [
                                getItem('????????????', '/Home/employeeManagement'),
                                getItem('???????????????', '/Home/supplierManagement'),
                            ]),
                            getItem('????????????', '/Home/materialManagement', <DatabaseOutlined />),
                            getItem('????????????', 'sub4', <ShoppingOutlined />, [
                                getItem('??????????????????', '/Home/requisitionManagement'),
                                getItem('???????????????', '/Home/quotationsManagement'),
                                getItem('??????????????????', '/Home/orderManagement'),
                                getItem('???????????????', '/Home/documentflowmanagement'),
                            ]),
                            getItem('????????????', '/Home/receiveGoods', <CarryOutOutlined />),
                            getItem('????????????', 'sub3', <DollarOutlined />, [
                                getItem('????????????', '/Home/financialManagement'),
                                getItem('????????????', '/Home/paymentManagement')
                            ]),
                        ]}
                    />
                    <span style={{
                        float: 'right'
                    }}>
                        <Popover placement="bottom" content={content} trigger="click">
                            <Button danger shape="round" size="small" style={{ marginRight: "50px" }}
                            >
                                <CalendarOutlined />
                                Today&nbsp; : &nbsp;{moment().format("YYYY-MM-DD")}
                            </Button>
                        </Popover>
                        <Dropdown overlay={menu} placement="bottom">
                            <Button
                                type="text"
                                size="large"
                                icon={
                                    <Avatar
                                        style={{ backgroundColor: '#f56a00' }}
                                        src={this.state.user.avatar !== null ? `${base}${this.state.user.avatar}`:'https://joeschmoe.io/api/v1/random'}
                                        size="large"
                                    />
                                }
                            >
                                &nbsp;&nbsp;{this.state.user.name}
                            </Button>
                        </Dropdown>
                    </span>
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '10px 0',
                        }}
                    >
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 525,
                        }}
                    >
                        <Switch>
                            <Route
                                path="/Home/employeeManagement"
                                component={EmployeeManagement}
                            />
                            <Route
                                path="/Home/supplierManagement"
                                component={SupplierManagement}
                            />
                            <Route
                                path="/Home/materialManagement"
                                component={MaterialManagement}
                            />
                            <Route
                                path="/Home/requisitionManagement"
                                component={RequisitionManagement}
                            />
                            <Route
                                path="/Home/quotationsManagement"
                                component={QuotationsManagement}
                            />
                            <Route path="/Home/orderManagement"
                                component={OrderManagement}
                            />
                            <Route path="/Home/receiveGoods"
                                component={ReceiveGoods}
                            />
                            <Route
                                path="/Home/financialManagement"
                                component={FinancialManagement}
                            />
                            <Route
                                path="/Home/personalManagement"
                                component={PersonalManagement}
                            />
                            <Route
                                path="/Home/paymentManagement"
                                component={PaymentManagement}
                            />
                            <Route
                                path="/Home/passwordEdit"
                                component={PasswordEdit}
                            />
                            <Route
                                path="/Home/documentflowmanagement"
                                component={documentflowmanagement}
                            />
                            <Route path="/Home" component={Home} />
                        </Switch>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    2019 ???????????????????????????????????? Copyright ?? 2022 MIS Group 3
                </Footer>
            </Layout>
        );
    }
}

export default MyLayout;