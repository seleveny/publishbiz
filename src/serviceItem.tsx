import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import './App.css';

interface ServiceItemProps {
    image: string;
    title: string;
    description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({image, title, description}) => {
    return (
            <Card
                hoverable
                style={{minWidth: "calc(12vw)", height: 'calc(18vw)'}}
                cover={<img src={image} alt="example" style={{height: 'auto', width: 'auto'}} /> }
            >
                <Meta title={title} description={description} className="ant-card-meta-title"/>
            </Card>
    );
};

export default ServiceItem;
