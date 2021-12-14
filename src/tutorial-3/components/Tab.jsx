import React from 'react';

const Tab = ({ inputId, title, description, index, activeItem, setActiveItem }) => {
    return (
        <div className={activeItem === index ? `${'tab active'}` : 'tab'}>
            <input id={inputId} type="checkbox" name="tabs" />
            <label onClick={() => setActiveItem(index)} htmlFor={inputId}>
                {title}
            </label>
            <div className="tab-content">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Tab;
