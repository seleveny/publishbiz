import React from 'react';
import {Typography} from "antd";
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
    fontSize: '14rem',
    color: "white",
}

const subTextStyle: React.CSSProperties = {
    marginTop: 'calc(12vh + 20rem)',
    position: 'absolute',
    alignItems: 'center',
    fontSize: '3rem',
    color: "#B4D9F3",
    fontStyle: 'italic', // 设置字体为斜体
}

const MultiStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
}

const CulturalShow: React.FC = () => {
    return (
        <div style={MultiStyle}>
            <div style={publishImageStyle} />
            <Title style={textStyle}>图书出版</Title>
            <Title style={subTextStyle}>小小书童，为您服务！</Title>
            <Contact />
        </div>
    );
};

export default CulturalShow;
