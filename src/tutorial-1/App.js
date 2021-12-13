import React from 'react';
import Profile from './components/Profile';

import './App.css';

const App = () => {
    return (
        <div>
            <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
        </div>
    );
};

export default App;
