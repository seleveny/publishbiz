import React from 'react';
import {Flex, Typography} from "antd";

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(90vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg,  #F66072, #2CCAE9)', // 这里是渐变色的示例

}

const textStyle: React.CSSProperties = {
    marginTop: 'calc(8vh)',
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

const CooperateTypeStyle: React.CSSProperties = {
    display: 'flex',
    position: 'absolute',
    marginTop: 'calc(12vh)',
    height: 'calc(70vh)',
    width: 'calc(100vw)',
    alignItems: 'center',
    justifyContent: 'center',
}

const CorpTypeStyle: React.CSSProperties = {
    fontSize: '14rem',
    color: 'transparent', // 设置字体颜色为透明
    backgroundClip: 'text', // 裁剪背景到文字
    WebkitBackgroundClip: 'text', // 兼容 WebKit 浏览器
    backgroundImage: 'linear-gradient(90deg, #3f51b5, #9c27b0)', // 这里是渐变色的示例
    marginBottom: '2rem'
}

const CooperateType: React.FC = () => {
    return (
        <div style={MultiStyle}>
            <div style={publishImageStyle}/>
            <Title style={textStyle}>合作方式</Title>
            <Flex style={CooperateTypeStyle}>
                <Title style={CorpTypeStyle}>自费    or    公费</Title>
            </Flex>
        </div>
    );
};

export default CooperateType;
