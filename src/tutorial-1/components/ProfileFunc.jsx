import React from 'react';

const ProfileFunc = ({ name, registredAt }) => {
    const regDate = (date) =>
        date.toLocaleString('ru', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

    return (
        <div>
            <p>
                Привет, <b>{name.split(' ')[0]}!</b>
            </p>
            <span>Дата регистрации: {regDate(registredAt)} </span>
        </div>
    );
};

export default ProfileFunc;
