import React from 'react';
import ServiceText from "./serviceText.tsx";
import CooperateType from "./cooperateType.tsx";
import PublishSeq from "./publishSeq.tsx";

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
            <ServiceText/>
            <CooperateType/>
            <PublishSeq/>
        </div>
    );
};

export default MultiText;
