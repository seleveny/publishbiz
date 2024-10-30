import React from 'react';
import {Flex, Image, Layout} from 'antd';
import Contact from './contact';
import Navigate from './navigate';
import MultiText from './multiText.tsx';

const {Header, Footer, Content} = Layout;


const headerStyle: React.CSSProperties = {
    display: 'flex',
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'black',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'white',
    // 隐藏滚动条
    scrollbarWidth: 'none',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'black',
    scrollbarWidth: 'none',
};


const layoutStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    width: 'calc(100vw)',
    backgroundColor: 'white',
};

const iconStyle: React.CSSProperties = {
    marginLeft: 16,
    marginRight: 32,
    width: '26px',
    height: '26px',
};

const App: React.FC = () => (
    <Flex gap="middle" style={layoutStyle} vertical>
        {/*头部内容*/}
        <Header style={headerStyle}>
            <Flex>
                <Image src="../pic/logo.jpeg" preview={false} style={iconStyle}/>
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
        {/*联系我们*/}
        <Contact/>
    </Flex>
);

export default App;
