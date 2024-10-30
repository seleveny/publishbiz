import React from 'react';
import {Menu, MenuProps} from 'antd';
import './App.css';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '学术专注出版',
        key: '1',
        className: 'custom-menu-item',
    },
    {
        label: '小说文学出版',
        key: '2',
        className: 'custom-menu-item',
    },
    {
        label: '个人传记出版',
        key: '3',
        className: 'custom-menu-item',
    },
    {
        label: '教材教辅出版',
        key: '4',
        className: 'custom-menu-item',
    },
    {
        label: '人文科学出版',
        key: '5',
        className: 'custom-menu-item',
    },
    {
        key: '6',
        label: '商业传记出版',
        className: 'custom-menu-item'
    }
];


const Navigate: React.FC = () => {
    return (
        <Menu mode="horizontal" className="custom-menu" theme={"dark"} items={items}/>
    );
};

export default Navigate;
