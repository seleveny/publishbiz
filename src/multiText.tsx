import React from 'react';

import CulturalShow from "./culturalShow.tsx";
import ServiceText from "./serviceText.tsx";
import CooperateType from "./cooperateType.tsx";
import PublishSeq from "./publishSeq.tsx";
import Advantage from "./advantage.tsx";

const publishImageStyle: React.CSSProperties = {
    paddingLeft: 'calc(2vw)',
    paddingRight: 'calc(2vw)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
}

const MultiText: React.FC = () => {
    return (
        <div style={publishImageStyle}>
            <CulturalShow/>
            <ServiceText/>
            <Advantage/>
            <CooperateType/>
            <PublishSeq/>
        </div>
    );
};

export default MultiText;
