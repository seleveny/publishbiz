import React from 'react';
import {Menu, MenuProps} from 'antd';
import './App.css';
import { scroller } from 'react-scroll';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: '图书出版',
        key: 'book-publishing',
        className: 'custom-menu-item',
        onClick: (item  ) => {
            scrollToSection(item.key);
        },
    },
    {
        label: '服务项目',
        key: 'service-items',
        className: 'custom-menu-item',
        onClick: (item  ) => {
            scrollToSection(item.key);
        },
    },
    {
        label: '业务优势',
        key: 'business-advantages',
        className: 'custom-menu-item',
        onClick: (item  ) => {
            scrollToSection(item.key);
        },
    },
    {
        label: '合作方式',
        key: 'cooperation-methods',
        className: 'custom-menu-item',
        onClick: (item  ) => {
            scrollToSection(item.key);
        },
    },
    {
        label: '出版流程',
        key: 'publishing-process',
        className: 'custom-menu-item',
        onClick: (item  ) => {
            scrollToSection(item.key);
        },
    }
];

const NavigateStyle: React.CSSProperties = {
    width: 'calc(85vw - 40px)',
    backgroundColor: 'transparent',
}


const Navigate: React.FC = () => {
    return (
        <Menu mode="horizontal" style={NavigateStyle} theme={"dark"} items={items}/>
    );
};

function scrollToSection(sectionId: string) {
    scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offsetTop: 100,
    });
}

export default Navigate;
