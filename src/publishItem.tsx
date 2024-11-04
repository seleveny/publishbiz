import React from 'react';
import './App.css';

const PublishSeqStyle: React.CSSProperties = {
    position: 'absolute',
    marginTop: 'calc(20vh)',
    width: 'calc(90vw)',
    height: 'calc(50vh)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

const publishSeqItemStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    fontSize: '2vw',
    lineHeight: '5vw',
    padding: '0.3vw',
    borderRadius: '1vw',
    backgroundColor: 'dodgerblue'
}


// const upArrowStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '0%',
//     transform: 'translateY(-100%)',
//     width: '0',
//     height: '0',
//     borderBottom: '1vw solid #3f51b5CC',
//     borderLeft: '1vw solid transparent',
//     borderRight: '1vw solid transparent',
//     left: '50%',
//     marginLeft: '-1vw',
// }
//
// const downArrowStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '100%',
//     transform: 'translateY(-100%)',
//     width: '0',
//     height: '0',
//     borderTop: '1vw solid #3f51b5CC',
//     borderLeft: '1vw solid transparent',
//     borderRight: '1vw solid transparent',
//     left: '50%',
//     marginLeft: '-1vw',
//     marginTop: '1vw',
// }
//
// const leftArrowStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     width: '0',
//     height: '0',
//     borderTop: '1vw solid transparent',
//     borderBottom: '1vw solid transparent',
//     borderRight: '1vw solid #3f51b5CC',
//     right: '100%',
//     marginRight: '0px',
// }

const rightArrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '0',
    height: '0',
    borderTop: '1vw solid transparent',
    borderBottom: '1vw solid transparent',
    borderLeft: '1vw solid dodgerblue',
    left: '100%',
    marginLeft: '0px',
}

const layoutStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    margin: '2vw'
}


const PublishItem: React.FC = () => {
    return (
        <div style={PublishSeqStyle}>
            <div style={layoutStyle}>
                <div style={publishSeqItemStyle}>交稿预审</div>
                <div style={rightArrowStyle}></div>
            </div>
            <div style={layoutStyle}>
                <div style={publishSeqItemStyle}>签订合同</div>
                <div style={rightArrowStyle}></div>
            </div>
            <div style={layoutStyle}>
                <div style={publishSeqItemStyle}>申领书号</div>
                <div style={rightArrowStyle}></div>
            </div>
            <div style={layoutStyle}>
                <div style={publishSeqItemStyle}>三审三校</div>
                <div style={rightArrowStyle}></div>
            </div>
            <div style={layoutStyle}>
                <div style={publishSeqItemStyle}>设计封面</div>
                <div style={rightArrowStyle}></div>
            </div>
            <div style={layoutStyle}>
                <div style={publishSeqItemStyle}>质检验证</div>
                <div style={rightArrowStyle}></div>
            </div>
            <div style={layoutStyle}>
                <div style={publishSeqItemStyle}>定稿硬刷</div>
            </div>
        </div>
    );
};

export default PublishItem;
