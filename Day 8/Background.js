import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    const myStyle ={
        color:"white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
  return (
    <>
      <h1 style={myStyle}>Hello Student!</h1>
      <p>Add a little style!</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);