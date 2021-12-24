import React from 'react';
import Comments from './components/Comments/Comments.jsx';
import FeedBack from './components/FeedBack/FeedBack.jsx';

import './App.css';

const App = () => {
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        setComments(JSON.parse(localStorage.getItem('comments')));
    }, []);

    React.useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const addComment = (postObj) => {
        setComments((prev) => [...prev, postObj]);
    };

    const deleteComment = (objId) => {
        let newComments = comments.filter((item) => item.id !== objId);
        setComments(newComments);
    };

    return (
        <div className="wrapper">
            {comments.length ? (
                <div className="comments">
                    {<Comments comments={comments} deleteComment={deleteComment} />}
                </div>
            ) : (
                ''
            )}

            <br />
            <FeedBack addComment={addComment} />
        </div>
    );
};

export default App;
