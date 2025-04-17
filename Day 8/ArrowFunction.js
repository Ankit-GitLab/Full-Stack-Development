
import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
    const shoot = () => {
        alert("Great COLLEGE!");
    };

    return (
        <button onClick={shoot}>CLICK!</button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
