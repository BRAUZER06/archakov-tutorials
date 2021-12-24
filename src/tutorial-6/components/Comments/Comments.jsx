import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const style = {
    width: '330px',
    margin: '10px auto',
};

export default function Comments({ comments, deleteComment }) {
    const onDelete = (id) => {
        deleteComment(id);
    };

    return (
        <List sx={style}>
            <h3>Отзывы:</h3>
            {comments.map((comment) => {
                return (
                    <React.Fragment key={comment.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={comment.fullName}
                                secondary={<React.Fragment>{comment.text}</React.Fragment>}
                            />
                            <Button
                                onClick={() => onDelete(comment.id)}
                                size="small"
                                type="submit"
                                variant="text"
                                color="error">
                                x
                            </Button>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                );
            })}
        </List>
    );
}
