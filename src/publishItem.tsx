import React from 'react';
import {StepProps, Steps} from "antd";
import './App.css';

const PublishSeqStyle: React.CSSProperties = {
    position: 'absolute',
    paddingTop: 'calc(35vh)',
    width: 'calc(60vw)',
    height: 'calc(60vh)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

const stepStyle: React.CSSProperties = {
    justifyContent: 'space-around',
    width: 'calc(100vw)',
}

const items: StepProps[] = [
    {
        title: '交稿预审',
        status: 'process',
        description: '',
    },
    {
        title: '商定出版社',
        status: 'process',
        description: '',
    },
    {
        title: '签订合同',
        status: 'process',
        description: '',
    },
    {
        title: '申领书号',
        status: 'process',
        description: '',
    },
    {
        title: '三审三校',
        status: 'process',
        description: '',
    },
    {
        title: '封面设计',
        status: 'process',
        description: '',
    },{
        title: '质检验证',
        status: 'process',
        description: '',
    },
    {
        title: '定稿',
        status: 'process',
        description: '',
    },
    {
        title: '出版',
        status: 'process',
        description: '',
    },
]

const PublishItem: React.FC = () => {
    return (
        <div style={PublishSeqStyle}>
            <Steps
                type="navigation"
                size="default"
                style={stepStyle}
                current={-1}
                labelPlacement="vertical"
                items={items}
            />
        </div>
    );
};

export default PublishItem;
