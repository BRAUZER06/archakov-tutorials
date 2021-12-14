import React from 'react';

const Tab = ({ inputId, title, description, index, activeIndex, setActiveIndex }) => {
    return (
        <div className={activeIndex === index ? 'tab active' : 'tab'}>
            <input id={inputId} type="checkbox" name="tabs" />
            <label onClick={() => setActiveIndex(index)} htmlFor={inputId}>
                {title}
            </label>
            <div className="tab-content">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Tab;
