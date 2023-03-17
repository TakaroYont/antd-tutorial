import {useState} from 'react'
import './App.css'
import {Button} from "antd";
import {AlertOutlined} from "@ant-design/icons";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import LayoutFooter from "./layouts/components/Footer";
import LayoutSideMenu from "./layouts/components/SideMenu";
import LayoutHeader from "./layouts/components/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout className="App">
      <Sider width={256} style={{minHeight: '100vh', color: 'white'}}>
        <LayoutSideMenu/>
      </Sider>
      <Layout>
        <Header style={{background: 'blue', textAlign: 'center', padding: 0, width: "100vw"}}>
          <LayoutHeader/>
        </Header>
        <Content style={{margin: '24px 16px 0'}}>
          <div style={{padding: 24, background: '#fff', minHeight: 360}}>
            <Button icon={<AlertOutlined/>}>click</Button>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}><LayoutFooter/></Footer>
      </Layout>
    </Layout>
  )
}

export default App
