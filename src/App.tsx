import React from 'react';
import {Flex, Image, Layout} from 'antd';
import Navigate from './navigate';
import MultiText from './multiText.tsx';
import './App.css';

const {Header, Footer, Content} = Layout;


const headerStyle: React.CSSProperties = {
    display: 'flex',
    textAlign: 'center',
    color: '#fff',
    height: '64px',
    backgroundColor: 'black',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'white',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#161617CC',
};


const layoutStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    width: 'calc(100vw)',
    backgroundColor: 'white',
};

const iconStyle: React.CSSProperties = {
    marginLeft: 'calc(10vw)',
    marginRight: 'calc(5vw)',
    width: '40px',
    height: '40px',
};

const App: React.FC = () => (
    <Flex gap="middle" style={layoutStyle} vertical>
        {/*头部内容*/}
        <Header style={headerStyle}>
            <Flex vertical={true} wrap={true}>
                <Image src="../pic/logo.png" preview={false} style={iconStyle}/>
                <Navigate/>
            </Flex>
        </Header>
        {/*主体内容*/}
        <Content style={contentStyle}>
            <Flex vertical={true} wrap={true}>
                <MultiText/>
            </Flex>
        </Content>
        {/*底部内容*/}
        <Footer style={footerStyle}>
            <Flex vertical={true} wrap={true}>
                京口区书童办公服务工作室
            </Flex>
        </Footer>
    </Flex>
);

export default App;
