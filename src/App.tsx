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


const layoutStyle : React.CSSProperties = {
    overflow: 'auto',
    width: 'calc(100vw)',
    height: 'calc(100vh)',
    backgroundColor: 'white',
    scrollbarWidth: 'none',
};

const iconStyle: React.CSSProperties = {
    marginLeft: 16,
    marginRight: 32,
    width: '26px',
    height: '26px',
};

const App: React.FC = () => (
    <Flex gap="middle" vertical>
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
                <Flex vertical={true} wrap={true}>
                    <MultiText/>
                </Flex>
            </Content>
            {/*底部内容*/}
            <Footer style={footerStyle}>
                <Flex vertical={true} wrap={true}>
                    @图书出版有限公司
                </Flex>
            </Footer>
            {/*联系我们*/}
            <Contact/>
        </Layout>
    </Flex>
);

export default App;
