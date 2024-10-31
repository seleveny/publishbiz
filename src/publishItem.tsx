import React from 'react';
import './App.css';

const PublishSeqStyle: React.CSSProperties = {
    position: 'absolute',
    marginTop: 'calc(20vh)',
    width: 'calc(90vw)',
    height: 'calc(80vh)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

const publishSeqItemStyle: React.CSSProperties = {
    color: 'white',
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: '6rem',
    padding: '10px',
    borderRadius: '1rem',
    backgroundColor: '#3f51b5CC'
}


// const upArrowStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '0%',
//     transform: 'translateY(-100%)',
//     width: '0',
//     height: '0',
//     borderBottom: '1rem solid #3f51b5CC',
//     borderLeft: '1rem solid transparent',
//     borderRight: '1rem solid transparent',
//     left: '50%',
//     marginLeft: '-1rem',
// }
//
// const downArrowStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '100%',
//     transform: 'translateY(-100%)',
//     width: '0',
//     height: '0',
//     borderTop: '1rem solid #3f51b5CC',
//     borderLeft: '1rem solid transparent',
//     borderRight: '1rem solid transparent',
//     left: '50%',
//     marginLeft: '-1rem',
//     marginTop: '1rem',
// }
//
// const leftArrowStyle: React.CSSProperties = {
//     position: 'absolute',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     width: '0',
//     height: '0',
//     borderTop: '1rem solid transparent',
//     borderBottom: '1rem solid transparent',
//     borderRight: '1rem solid #3f51b5CC',
//     right: '100%',
//     marginRight: '0px',
// }

const rightArrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '0',
    height: '0',
    borderTop: '1rem solid transparent',
    borderBottom: '1rem solid transparent',
    borderLeft: '1rem solid #3f51b5CC',
    left: '100%',
    marginLeft: '0px',
}

const layoutStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    margin: '2rem'
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
                <div style={publishSeqItemStyle}>定稿</div>
            </div>
        </div>
    );
};

export default PublishItem;
