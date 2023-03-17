import {Menu} from "antd";
import {
  ApartmentOutlined,
  ApiOutlined,
  BarsOutlined,
  DashboardOutlined,
  HomeOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  SolutionOutlined,
  TeamOutlined,
  ToolOutlined,
  UserOutlined,
  UserSwitchOutlined
} from "@ant-design/icons";
import React from "react";

const LayoutSideMenu = () => {
  return <Menu mode="inline"
               items={[
                 {
                   label: "主页",
                   key: "dashboard",
                   icon: <DashboardOutlined/>,
                 },
                 {
                   label: "用户管理",
                   key: "user_management",
                   icon: <TeamOutlined/>,
                   children: [
                     {
                       label: "用户信息",
                       key: "user_info",
                       icon: <UserOutlined/>
                     },
                     {
                       label: "公司信息",
                       key: "com_info",
                       icon: <HomeOutlined/>
                     },
                     {
                       label: "部门信息",
                       key: "dept_info",
                       icon: <ApartmentOutlined/>
                     },
                     {
                       label: "岗位信息",
                       key: "job_info",
                       icon: <IdcardOutlined/>
                     },
                   ]
                 },
                 {
                   label: "权限管理",
                   key: "auth_management",
                   icon: <SafetyCertificateOutlined/>,
                   children: [
                     {
                       label: "角色信息",
                       key: "role_info",
                       icon: <UserSwitchOutlined/>
                     },
                     {
                       label: "服务授权",
                       key: "api_auth",
                       icon: <SolutionOutlined/>
                     },
                     {
                       label: "菜单授权",
                       key: "menu_auth",
                       icon: <SolutionOutlined/>
                     },
                   ]
                 },
                 {
                   label: "系统管理",
                   key: "sys_management",
                   icon: <SettingOutlined/>,
                   children: [
                     {
                       label: "业务字典",
                       key: "biz_dict",
                       icon: <ReadOutlined/>
                     },
                     {
                       label: "系统服务",
                       key: "sys_api",
                       icon: <ApiOutlined/>
                     },
                     {
                       label: "系统菜单",
                       key: "sys_menu",
                       icon: <BarsOutlined/>
                     },
                     {
                       label: "系统设置",
                       key: "biz_dict",
                       icon: <ToolOutlined/>
                     },
                   ]
                 },
                 {
                   label: "关于 Demo",
                   key: "about_demo",
                   icon: <InfoCircleOutlined/>
                 }
               ]}/>
}
export default LayoutSideMenu;
