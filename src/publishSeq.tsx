import React from 'react';
import {Typography} from "antd";
import PublishItem from "./publishItem.tsx";

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(96vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg,#FC0000, #D0E6A5)', // 这里是渐变色的示例
}

const textStyle: React.CSSProperties = {
    marginTop: 20,
    marginBottom: 0,
    position: 'absolute',
    alignItems: 'center',
    color: "white"
}

const MultiStyle: React.CSSProperties = {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
}


const PublishSeq: React.FC = () => {
    return (
        <div style={MultiStyle}>
            <div style={publishImageStyle}></div>
            <Title style={textStyle}>出版流程</Title>
            <PublishItem/>
        </div>
    );
};

export default PublishSeq;
