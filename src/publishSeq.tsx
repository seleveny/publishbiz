import React from 'react';
import {Image, Typography} from "antd";

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
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
            <Image src={"../pic/bookpub.jpg"} style={publishImageStyle} preview={false}></Image>
            <Title style={textStyle}>出版流程</Title>
        </div>
    );
};

export default PublishSeq;
