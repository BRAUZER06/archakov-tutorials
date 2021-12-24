import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './FeedBack.css';

const style = {
    width: '330px',
    margin: '10px auto',
};

export default function FeedBack({ addComment }) {
    const postDate = (date) =>
        date.toLocaleString('en', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        let fullName = e.target.name.value;
        let email = e.target.email.value;
        let text = e.target.comment.value;

        if (fullName.trim() && email.trim() && text.trim()) {
            let id = Math.ceil(Math.random() * 1000000);
            let newPost = {
                id,
                fullName,
                email,
                createdAt: postDate(new Date(Date.now())),
                text,
            };

            addComment(newPost);
            fullName = '';
            email = '';
            text = '';
            e.target.reset();
        } else {
            alert('Введите корректные данные!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="feedback">
            <h2>Обратная связь:</h2>
            <TextField
                id="demo-helper-text-misaligned-no-helper"
                name="name"
                label="Имя"
                variant="outlined"
                required
                sx={style}
            />
            <TextField
                id="demo-helper-text-misaligned-no-helper"
                name="email"
                label="Почта"
                variant="outlined"
                required
                sx={style}
            />
            <TextField
                id="demo-helper-text-misaligned-no-helper"
                name="comment"
                label="Текст..."
                variant="outlined"
                required
                multiline
                sx={style}
            />
            <Button type="submit" variant="contained">
                Отправить
            </Button>
        </form>
    );
}
