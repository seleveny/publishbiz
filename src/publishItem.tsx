import React from 'react';
import {Timeline} from "antd";
import './App.css';

const PublishSeqStyle: React.CSSProperties = {
    position: 'absolute',
    paddingTop: 'calc(20%)',
    paddingRight: 'calc(10%)',
    width: 'calc(60%)',
    height: 'calc(60%)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

const contentStyle: React.CSSProperties = {
    position: "absolute",
    textAlign: "left",
}

const childrenStyle: React.CSSProperties = {
    fontSize: 30,
}

const items = [
    {
        children: '稿件初审',
        style: childrenStyle
    },
    {
        children: '商定出版社',
        style: childrenStyle,
    },
    {
        children: '签订合同',
        style: childrenStyle,
    },
    {
        children: '交付书稿',
        style: childrenStyle,
    },
    {
        children: '排版出版',
        style: childrenStyle,
    },
    {
        children: '定稿',
        style: childrenStyle,
    },
    {
        children: '验证',
        style: childrenStyle,
    },
    {
        children: '收获',
        style: childrenStyle,
    }
]

const PublishItem: React.FC = () => {
    return (
        <div style={PublishSeqStyle}>
            <Timeline
                mode="left"
                items={items}
                style={contentStyle}
            />
        </div>
    );
};

export default PublishItem;
