import React from 'react';
import {Menu, MenuProps} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '学术专注出版',
        key: '1',
    },
    {
        label: '小说文学出版',
        key: '2',
    },
    {
        label: '个人传记出版',
        key: '3',
    },
    {
        label: '教材教辅出版',
        key: '4',
    },
    {
        label: '更多',
        key: '5',
        children: [
            { key: '7', label: '人文科学出版'},
            { key: '8', label: '商业传记出版'},
        ]
    }
];

const Navigate: React.FC = () => {
    return (
        <Menu mode="horizontal" items={items} theme="light"/>
    );
};

export default Navigate;
