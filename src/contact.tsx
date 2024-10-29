import React from "react";
import {Card, Image, Space} from 'antd';


const flyStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    right: 0,
    paddingBottom: 16,
    paddingRight: 16,
    color: '#fff',
};

const cardStyle: React.CSSProperties = {
    textAlign: 'center',
}

const imageStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
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
