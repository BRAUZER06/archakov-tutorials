import React from 'react';

class ProfileClass extends React.Component {
    regDate = (date) =>
        date
            .toLocaleString('ru', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            })
            .split(' ')
            .slice(0, -1)
            .join(' ');

    render() {
        return (
            <div>
                <p>
                    Привет, <b>{this.props.name.split(' ')[0]}!</b>
                </p>
                <span>Дата регистрации: {this.regDate(this.props.registredAt)} </span>
            </div>
        );
    }
}

export default ProfileClass;
