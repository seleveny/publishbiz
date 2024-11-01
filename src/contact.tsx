import React from "react";
import {Card, Image} from 'antd';
import './App.css';


const cardStyle: React.CSSProperties = {
    width: 'calc(8vw)',
    height: 'calc(12vw)',
    textAlign: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'transparent',
}

const imageStyle: React.CSSProperties = {
    display: 'flex',
    width: 'calc(7vw)',
    height: 'calc(7vw)',
    backgroundColor: 'transparent',
}

const headerStyle: React.CSSProperties = {
    height: '30%', // 设置 Header 高度为 30%
    backgroundColor: 'transparent', // 设置 Header 背景色为半透明黑色
};

const bodyStyle: React.CSSProperties = {
    paddingTop: 'calc(1vw)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%', // 设置 Body 高度为 70%
    backgroundColor: 'transparent', // 设置 Body 背景色为半透明黑色
};

const Contact: React.FC = () => {
    return (
        <Card title="联系我们" bordered={true} style={cardStyle} headStyle={headerStyle} bodyStyle={bodyStyle}>
            <Image src="../pic/contact.png" style={imageStyle} preview={false}/>
        </Card>
    );
};

export default Contact;
