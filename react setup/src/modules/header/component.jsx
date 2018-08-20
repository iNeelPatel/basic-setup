import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Row, Col } from "antd";
import RenderAuthorized from "ant-design-pro/lib/Authorized";
import styles from "./style.css";

const SubMenu = Menu.SubMenu;

const HeaderComponent = props => (
  <Layout.Header className={styles.header}>
    <div className="logo" style={{ width: 200, float: "left" }}>
      <Row gutter={20}>
        <Col span="6">
          <img
            src="/assets/logo-short-format.svg"
            style={{ width: 50, position: "relative", top: -2 }}
            alt="logo"
          />
        </Col>
        <Col span="18">
          <span
            style={{ fontSize: 14, color: "#ddd", textTransform: "uppercase" }}
          >
            | Order Factory
          </span>
        </Col>
      </Row>
    </div>

    <Menu
      onClick={props.handleNavigate}
      mode="horizontal"
      selectedKeys={[props.selectedRoute]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="/user/dashboard/">
        <span>Dashboard</span>
      </Menu.Item>
      {props.roles.some(role => role === "accounts" || role === "master") && (
        <SubMenu title={<span>Accounts</span>}>
          <Menu.Item key="/user/accounts/">
            <span>User List</span>
          </Menu.Item>
          {props.roles.some(role => role === "master") && (
            <Menu.Item key="/user/accounts/permissions">
              <span>Permissions</span>
            </Menu.Item>
          )}
        </SubMenu>
      )}
      {props.roles.some(role => role === "inventory") && (
        <SubMenu title={<span>Inventory</span>}>
          <Menu.Item key="/user/inventory/">
            <span>Housekeeping</span>
          </Menu.Item>
          <Menu.Item key="/user/inventory/warehouse/">
            <span>Warehouse</span>
          </Menu.Item>
        </SubMenu>
      )}
      {props.roles.some(role => role === "product") && (
        <SubMenu title={<span>Product</span>}>
          <Menu.Item key="/user/product/bundle/">
            <span>Product Bundles</span>
          </Menu.Item>
          <Menu.Item key="/user/product/base/">
            <span>Base Products</span>
          </Menu.Item>
        </SubMenu>
      )}

      {props.roles.some(
        role =>
          role === "barcode" ||
          role === "label" ||
          role === "ship" ||
          role === "master"
      ) && (
        <SubMenu title={<span>Factory</span>}>
          {props.roles.some(role => role === "barcode") && (
            <Menu.Item key="/user/factory/barcode/">
              <span>Barcode</span>
            </Menu.Item>
          )}
          {props.roles.some(role => role === "label") && (
            <Menu.Item key="/user/factory/label/">
              <span>Label</span>
            </Menu.Item>
          )}
          {props.roles.some(role => role === "insert") && (
            <Menu.Item key="/user/factory/insert/">
              <span>Insert</span>
            </Menu.Item>
          )}
          {props.roles.some(role => role === "insert") && (
            <Menu.Item key="/user/factory/coupon/">
              <span>Coupon</span>
            </Menu.Item>
          )}
          {props.roles.some(role => role === "ship") && (
            <Menu.Item key="/user/factory/ship/">
              <span>Ship</span>
            </Menu.Item>
          )}
        </SubMenu>
      )}

      {props.roles.some(role => role === "history" || role === "master") && (
        <SubMenu title={<span>Orders</span>}>
          {props.roles.some(role => role === "current") && (
            <Menu.Item key="/user/order/current/">
              <span>Current Orders</span>
            </Menu.Item>
          )}

          {props.roles.some(role => role === "history") && (
            <Menu.Item key="/user/order/history/">
              <span>Order History</span>
            </Menu.Item>
          )}
          {props.roles.some(role => role === "history") && (
            <Menu.Item key="/user/order/failed/">
              <span>Failed/Cancelled Orders</span>
            </Menu.Item>
          )}

          {props.roles.some(role => role === "history") && (
            <Menu.Item key="/user/order/cart/">
              <span>In Progress Orders</span>
            </Menu.Item>
          )}
        </SubMenu>
      )}

      {props.roles.some(role => role === "subscription") && (
        <SubMenu title={<span>Subscription</span>}>
          <Menu.Item key="/user/subscription/current/">
            <span>Current</span>
          </Menu.Item>
          <Menu.Item key="/user/subscription/terminate/">
            <span>Terminated</span>
          </Menu.Item>
          <Menu.Item key="/user/subscription/failed/">
            <span>Failed</span>
          </Menu.Item>
          <Menu.Item key="/user/subscription/plans/">
            <span>Plans</span>
          </Menu.Item>
        </SubMenu>
      )}

      {props.roles.some(role => role === "marketing") && (
        <SubMenu title={<span>Marketing</span>}>
          <Menu.Item key="/user/marketing/announcement/">
            <span>Announcements</span>
          </Menu.Item>

          <Menu.Item key="/user/marketing/campaign/">
            <span>Coupon</span>
          </Menu.Item>
          <Menu.Item key="/user/marketing/referrals/">
            <span>Referrals</span>
          </Menu.Item>
          <Menu.Item key="/user/marketing/affiliate/">
            <span>Affiliates</span>
          </Menu.Item>
        </SubMenu>
      )}

      <SubMenu title={<span>Settings</span>}>
        <Menu.Item key="logout">
          <span>Logout</span>
        </Menu.Item>

        <Menu.Item key="/user/settings/profile/">
          <span>Profile</span>
        </Menu.Item>
        {props.roles.some(role => role === "master") && (
          <Menu.Item key="/user/settings/printers/">
            <span>Printers</span>
          </Menu.Item>
        )}
      </SubMenu>
    </Menu>
    <div style={{ clear: "both" }} />
  </Layout.Header>
);

HeaderComponent.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
  selectedRoute: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default HeaderComponent;
