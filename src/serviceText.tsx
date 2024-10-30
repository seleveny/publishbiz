import React from 'react';
import {Typography} from "antd";
import ServiceItem from "./serviceItem.tsx";

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(96vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg, #3f51b5, #9c27b0)', // 这里是渐变色的示例
}

const textStyle : React.CSSProperties = {
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

const ServiceItemStyle: React.CSSProperties = {
    position: 'absolute',
    paddingTop: 'calc(10%)',
    width: 'calc(60%)',
    height: 'calc(90%)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'space-evenly',
    justifyContent: 'center',
    columnGap: 'calc(5%)',
    flexWrap: 'wrap',
}

const serviceItems = [
    {
        title: '服务项目1',
        description: '服务项目1的描述',
        image: '../pic/1.jpg',
    },
    {
        title: '服务项目2',
        description: '服务项目2的描述',
        image: '../pic/2.jpg',
    },
    {
        title: '服务项目3',
        description: '服务项目1的描述',
        image: '../pic/3.jpg',
    },
    {
        title: '服务项目4',
        description: '服务项目4的描述',
        image: '../pic/4.jpg',
    },
    {
        title: '服务项目5',
        description: '服务项目5的描述',
        image: '../pic/5.jpg',
    },
    {
        title: '服务项目6',
        description: '服务项目6的描述',
        image: '../pic/6.jpg',
    },
    {
        title: '服务项目7',
        description: '服务项目7的描述',
        image: '../pic/7.jpg',
    },
    {
        title: '服务项目8',
        description: '服务项目8的描述',
        image: '../pic/8.jpg',
    }
]

const ServiceText: React.FC = () => {
    return (
        <div style={MultiStyle}>
            <div style={publishImageStyle}></div>
            <Title style={textStyle}>服务项目</Title>
            <div style={ServiceItemStyle}>
                {serviceItems.map((item, index) => (
                    <ServiceItem
                        key={index} // 确保每个组件都有一个唯一的 key
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceText;
