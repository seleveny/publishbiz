import React from 'react';
import {Typography} from "antd";

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(96vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg, #E8B7D4, #33539E)', // 这里是渐变色的示例

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

const CooperateType: React.FC = () => {
    return (
        <div style={MultiStyle}>
            <div style={publishImageStyle} />
            <Title style={textStyle}>合作方式</Title>
        </div>
    );
};

export default CooperateType;
