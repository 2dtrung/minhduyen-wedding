import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>Trang chủ</SidebarLink>
          <SidebarLink to="celebrate" onClick={toggle}>Về chúng mình</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Câu chuyện</SidebarLink>
          <SidebarLink to="moments" onClick={toggle}>Bộ sưu tập</SidebarLink>
          <SidebarLink to="form" onClick={toggle}>Xác nhận</SidebarLink>
          <SidebarLink to="information" onClick={toggle}>Địa chỉ</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
