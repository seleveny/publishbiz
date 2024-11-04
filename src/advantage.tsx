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
    fontSize: 'calc(3vw)',
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
    marginTop: 'calc(16vh + 3vw)',
    width: 'calc(90vw)',
    height: 'calc(58vh - 7vw)',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'space-evenly',
    columnGap: '2vw',
    rowGap: '2vw',
    flexWrap: 'wrap',
    gridColumnGap: '2vw',
    gridRowGap: '2vw',
}

const AdvantageItemStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    fontSize: '4vw',
    fontStyle: 'italic',
    padding: '1vw',
    borderRadius: '1vw',
    lineHeight: '6vw',
    backgroundColor: '#161717CC',
}

const AdvantageSpecialItemStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    fontSize: '4vw',
    border: '2px solid white',
    fontStyle: 'italic',
    padding: '1vw',
    borderRadius: '1vw',
    lineHeight: '6vw',
    backgroundColor: '#FF6600CC', // 这里是渐变色的示例
}

const Advantage: React.FC = () => {
    return (
        <div style={MultiStyle} id={'business-advantages'}>
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
