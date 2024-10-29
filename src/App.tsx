import React from 'react';
import {Flex, Image, Layout} from 'antd';
import Contact from './contact';
import Navigate from './navigate';
import MultiText from './multiText.tsx';

const {Header, Footer, Content} = Layout;


const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
    marginLeft: 'calc(10vw)',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#161617CC',
    overflow: 'auto'
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#777777',
};


const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100vw)',
    height: 'calc(100vh)',
    maxWidth: 'calc(100%)',
    backgroundColor: '#fff',
};

const iconStyle: React.CSSProperties = {
    paddingRight: 16,
    width: '40px',
    height: '20px',
};

const App: React.FC = () => (
    <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
            {/*头部内容*/}
            <Header style={headerStyle}>
                <Flex>
                    <Image src="../pic/logo.jpeg" preview={false} style={iconStyle}/>
                    <Navigate/>
                </Flex>
            </Header>
            {/*主体内容*/}
            <Content style={contentStyle}>
                <Flex vertical={true} wrap={false}>
                    <MultiText/>
                </Flex>
            </Content>
            {/*底部内容*/}
            <Footer style={footerStyle}>

            </Footer>
            {/*联系我们*/}
            <Contact/>
        </Layout>
    </Flex>
);

export default App;
