import React from 'react';
import {Col, Flex, Row, Typography} from "antd";

const {Title, Paragraph, Text} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(90vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg,  #3f51b5CC, #e91e63CC)', // 这里是渐变色的示例

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

const CooperateTypeStyle: React.CSSProperties = {
    display: 'flex',
    marginTop: 'calc(8vh + 3rem)',
    position: 'absolute',
    width: 'calc(90vw)',
    height: 'calc(82vh - 3rem)',
    alignItems: 'center',
    justifyContent: 'center',
}

const containTextStyle: React.CSSProperties = {
    background: '#FFFFFF',
    minWidth: 'calc(25vw)',
    height: 'calc(60vh)',
    textAlign: 'center',
    borderRadius: '1rem',
    paddingTop: '1rem',
};

const cooperateTextStyle: React.CSSProperties = {
    fontSize: '2rem',
    position: 'relative',
}

const CooperateType: React.FC = () => {
    return (
        <div style={MultiStyle} id={'cooperation-methods'}>
            <div style={publishImageStyle}/>
            <Title style={textStyle}>合作方式</Title>
            <Flex style={CooperateTypeStyle}>
                <Row gutter={24}>
                    <Col className="gutter-row" span={8}>
                        <div style={containTextStyle}>
                            <Typography>
                                <Title style={cooperateTextStyle}>自费出版</Title>
                                <Paragraph>
                                    <Text>以自有资金为基础，为您提供专业的图书出版服务。</Text>
                                </Paragraph>
                            </Typography>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={containTextStyle}>
                            <Typography>
                                <Title style={cooperateTextStyle}>公费出版</Title>
                                <Paragraph>
                                    <Text>以政府或机构的资金为基础，为您提供专业的图书出版服务。</Text>
                                </Paragraph>
                            </Typography>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={containTextStyle}>
                            <Typography>
                                <Title style={cooperateTextStyle}>合作出版</Title>
                                <Paragraph>
                                    <Text>以政府或机构的资金为基础，为您提供专业的图书出版服务。</Text>
                                </Paragraph>
                            </Typography>
                        </div>
                    </Col>
                </Row>
            </Flex>
        </div>
    );
};

export default CooperateType;
