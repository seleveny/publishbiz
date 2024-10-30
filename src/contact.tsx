import React from "react";
import {Card, Image, Space} from 'antd';
import './App.css';


const flyStyle: React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    bottom: 'calc(10vh)',
    right: 'calc(10vw)',
    color: '#fff',
};

const cardStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
}

const imageStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    backgroundColor: 'transparent',
}

const Contact: React.FC = () => {
    return (
        <Space style={flyStyle}>
            <Card title="联系我们" bordered={true} style={cardStyle}>
                <Image src="../pic/contactqr.png" style={imageStyle} preview={false} />
            </Card>
        </Space>
    );
};

export default Contact;
