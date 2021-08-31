import React from 'react';

import './styles/InfoScreen.scss';

const InfoScreen = (props) => {
    const { name1, name2, name3, slogan, text, comment1, comment2, comment3, closeInfoScreen, showInfoScreen } = props;
    return (
        <div className='info-screen'
            style={showInfoScreen === true ? { display: 'flex' } : { display: 'none' }}
            onClick={closeInfoScreen}
        >
            <img
                className='close'
                src={process.env.PUBLIC_URL + 'images/herb.svg'}
                alt='herb'
                onClick={closeInfoScreen}
            />
            <div className='information'>
                <div className='name1-name2'>
                    <p className='name1'>{name1}</p>
                    <p className='name2'>{name2}</p>
                </div>
                <p className='name3'>{name3}</p>
                <p className='slogan'>{slogan}</p>
                <p className='text'>{text}</p>
                <p className='comment1'>{comment1}</p>
                <p className='comment1'>{comment2}</p>
                <p className='comment1'>{comment3}</p>
            </div>
        </div>
    );
};

export default InfoScreen;