import { useState } from 'react';
import {
  Breadcrumb, Layout, Menu, theme,
} from 'antd';
import type { MenuProps } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const {
  Header, Content, Footer, Sider,
} = Layout;

const items: MenuItem[] = [
  {
    key: '1',
    label: 'Test',
    icon: <PieChartOutlined />,
  },
  {
    key: '2',
    label: 'Test 2',
    icon: <PieChartOutlined />,
    children: [
      {
        key: '3',
        label: 'Test 3',
        icon: <PieChartOutlined />,
      },
    ],
  },
];

function RootPage() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default RootPage;
