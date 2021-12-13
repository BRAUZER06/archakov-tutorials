import React from 'react';

// class Profile extends React.Component {
//     regDate = (date) =>
//         date.toLocaleString('ru', {
//             month: 'long',
//             day: 'numeric',
//         }) + ` ${date.getFullYear()}`;

//     render() {
//         return (
//             <div>
//                 <p>
//                     Привет, <b>{this.props.name.split(' ')[0]}!</b>
//                 </p>
//                 <span>Дата регистрации: {this.regDate(this.props.registredAt)} </span>
//             </div>
//         );
//     }
// }

const Profile = ({ name, registredAt }) => {g
    const regDate = (date) =>
        date.toLocaleString('ru', {
            month: 'long',
            day: 'numeric',
        }) + ` ${date.getFullYear()}`;

    return (
        <div>
            <p>
                Привет, <b>{name.split(' ')[0]}!</b>
            </p>
            <span>Дата регистрации: {regDate(registredAt)} </span>
        </div>
    );
};

export default Profile;
