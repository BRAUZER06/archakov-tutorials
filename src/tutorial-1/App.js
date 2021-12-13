import React from 'react';
import ProfileFunc from './components/ProfileFunc';

import './App.css';

const App = () => {
    return (
        <div>
            <ProfileFunc name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
        </div>
    );
};

export default App;
