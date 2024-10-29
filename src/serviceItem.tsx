import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

interface ServiceItemProps {
    image: string;
    title: string;
    description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({image, title, description}) => {
    return (
            <Card
                hoverable
                style={{width: '20%'}}
                cover={<img src={image} alt="example" style={{height: '40%', width: 'auto'}} /> }
            >
                <Meta title={title} description={description}/>
            </Card>
    );
};

export default ServiceItem;
