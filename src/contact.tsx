import React from "react";
import {Flex, Image} from 'antd';
import './App.css';


const cardStyle: React.CSSProperties = {
    width: 'calc(8vw)',
    height: 'calc(10vw)',
    textAlign: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    paddingTop: 'calc(1vw)',
    flexWrap: 'wrap',
    border: '1px solid white',
    borderRadius: 'calc(0.8vw)',
    lineHeight: '100%',
}

const imageStyle: React.CSSProperties = {
    display: 'flex',
    width: 'calc(7vw)',
    height: 'calc(7vw)',
    backgroundColor: 'transparent',
}

const headerStyle: React.CSSProperties = {
    backgroundColor: 'transparent', // 设置 Header 背景色为半透明黑色
    fontSize: 'calc(1.2vw)',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
};


const Contact: React.FC = () => {
    return (
        <div>
            <Flex style={cardStyle}>
                <div style={headerStyle}>联系我们</div>
                <Image src="../pic/contact.png" style={imageStyle} preview={false}/>
            </Flex>
        </div>
    );
};

export default Contact;
