import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const Slider = (props) => {
  console.log(props);
  return (
    <>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%' }}
        >
          {props.menuList.map((item, index) => {
            return (
                <Menu.Item key={index + 1} onClick={() => {
                    props.handlerCick(item,index)
              }}>
                <span>{item}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </>
  );
};
export default Slider;
