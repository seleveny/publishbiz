import React from 'react';
import {Space, Typography} from "antd";
import Contact from "./contact.tsx";
import './App.css';

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(90vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg, #3f51b5CC, #9c27b0CC)', // 这里是渐变色的示例

}

const textStyle: React.CSSProperties = {
    marginTop: 'calc(12vh)',
    position: 'absolute',
    alignItems: 'center',
    fontSize: 'calc(12vw)',
    color: "white",
}

const subTextStyle: React.CSSProperties = {
    marginTop: 'calc(12vh + 17vw)',
    position: 'absolute',
    alignItems: 'center',
    fontSize: 'calc(3.5vw)',
    color: "#B4D9F3",
    fontStyle: 'italic', // 设置字体为斜体
}

const MultiStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
}
const flyStyle: React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    color: '#fff',
    marginTop: 'calc(60vh)',
    marginLeft: 'calc(50vw)',
};

const CulturalShow: React.FC = () => {
    return (
        <div style={MultiStyle} id={'book-publishing'}>
            <div style={publishImageStyle}/>
            <Title style={textStyle}>图书出版</Title>
            <Title style={subTextStyle}>小小书童，为您服务！</Title>
            <Space style={flyStyle}>
                <Contact/>
            </Space>
        </div>
    );
};

export default CulturalShow;
