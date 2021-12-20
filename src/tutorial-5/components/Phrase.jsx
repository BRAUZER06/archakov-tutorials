import React from 'react';

const Phrase = ({ phrases }) => {
    return (
        <div className="list">
            {phrases.map((noun, index) => {
                return (
                    <div className="block" key={index}>
                        <h3>{noun}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Phrase;
