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
    background: 'linear-gradient(-45deg,  #3f51b5CC, #ff6f00CC)', // 这里是渐变色的示例

}

const textStyle: React.CSSProperties = {
    marginTop: 'calc(8vh)',
    fontSize: '3rem',
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

const AdvantageTypeStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 'calc(30vh)',
    width: 'calc(90vw)',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'space-evenly',
    columnGap: 'calc(5vw)',
    rowGap: '0px',
    flexWrap: 'wrap',
    gap: '4rem',
}

const AdvantageItemStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    fontSize: '4rem',
    border: '2px dashed white',
    fontStyle: 'italic',
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: '#161717CC'
}

const AdvantageSpecialItemStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    fontSize: '4rem',
    border: '3px dashed white',
    fontStyle: 'italic',
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: '#FF6600CC', // 这里是渐变色的示例
}

const Advantage: React.FC = () => {
    return (
        <div style={MultiStyle}>
            <div style={publishImageStyle}/>
            <Title style={textStyle}>业务优势</Title>
            <Flex style={AdvantageTypeStyle}>
                <div style={AdvantageItemStyle}>正规流程</div>
                <div style={AdvantageItemStyle}>一书一号</div>
                <div style={AdvantageItemStyle}>费用合理</div>
                <div style={AdvantageItemStyle}>出版高效</div>
                <div style={AdvantageItemStyle}>质量保证</div>
                <div style={AdvantageSpecialItemStyle}>学科范围广</div>
                <div style={AdvantageSpecialItemStyle}>退稿率低</div>
            </Flex>
        </div>
    );
};

export default Advantage;
