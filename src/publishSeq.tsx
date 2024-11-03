import React from 'react';
import {Space, Typography} from "antd";
import PublishItem from "./publishItem.tsx";
import Contact from "./contact.tsx";

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(90vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(0deg, #161617CC, #3f51b5CC)', // 这里是渐变色的示例
}


const textStyle: React.CSSProperties = {
    marginTop: 'calc(8vh)',
    fontSize: '3vw',
    marginBottom: 0,
    position: 'absolute',
    alignItems: 'center',
    color: "white"
}

const MultiStyle: React.CSSProperties = {
    marginTop: 'calc(2vh)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
}

const flyStyle: React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    color: '#fff',
    marginTop: 'calc(60vh)'
};

const PublishSeq: React.FC = () => {
    return (
        <div style={MultiStyle} id='publishing-process'>
            <div style={publishImageStyle}></div>
            <Title style={textStyle}>出版流程</Title>
            <PublishItem/>
            <Space style={flyStyle}>
                <Contact/>
            </Space>
        </div>
    );
};

export default PublishSeq;
