import React from 'react';
import PropTypes from 'prop-types';
import Button  from './Button';

const Header = ({ title, toggleAdd, showAdd }) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
                color={showAdd ? '#EF6F6C' : '#59C9A5'} 
                text={showAdd ? 'Close' : 'Add'}
                onClick={toggleAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
