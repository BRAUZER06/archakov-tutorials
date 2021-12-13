import React from 'react';

const Form = () => {
    let email = '';
    let password = '';

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            email = e.target.value;
        } else if (e.target.name === 'password') {
            password = e.target.value;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() && password.trim()) {
            console.log({ email, password });
            email = '';
            password = '';
            e.target.reset();
        } else {
            alert('Введите корректные данные!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" />
                <input onChange={handleChange} type="text" name="email" placeholder="E-mail" />
            </div>
            <div>
                <label htmlFor="password" />
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                />
            </div>
            <button type="submit">Войти</button>
        </form>
    );
};

export default Form;
