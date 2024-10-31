import React from 'react';
import {Typography} from "antd";
import ServiceItem from "./serviceItem.tsx";

const {Title} = Typography;

const publishImageStyle: React.CSSProperties = {
    width: 'calc(90vw)',
    height: 'calc(90vh)',
    borderRadius: '20px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    background: 'linear-gradient(45deg, #494268, #85A4BA)', // 这里是渐变色的示例
}

const textStyle : React.CSSProperties = {
    marginTop: 'calc(8vh)',
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

const ServiceItemStyle: React.CSSProperties = {
    position: 'absolute',
    paddingTop: 'calc(10vh)',
    width: 'calc(80vw)',
    height: 'calc(80vh)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'space-evenly',
    justifyContent: 'center',
    columnGap: 'calc(2vw)',
    flexWrap: 'wrap',
}

const serviceItems = [
    {
        title: '专著出版',
        description: '',
        image: '../pic/1.jpg',
    },
    {
        title: '教辅/教材出版',
        description: '',
        image: '../pic/2.jpg',
    },
    {
        title: '杂志书籍出版',
        description: '',
        image: '../pic/3.jpg',
    },
    {
        title: '科普图书出版',
        description: '',
        image: '../pic/4.jpg',
    },
    {
        title: '大众图书出版',
        description: '',
        image: '../pic/5.jpg',
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
