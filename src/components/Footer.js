import React from 'react';

const footerStyle = {
    "margin-left": "10px",
    "align": "center"
}

export default function Footer() {
  return (
    <footer className='center'>
        <div style={footerStyle}>  
          <a href='https://www.linkedin.com/in/harrison-lewis-163b65147/'>
            <img src='https://img.icons8.com/787878/linkedin.png' alt='LinkedIn' />
          </a>
          <a href='https://github.com/Stratiz'>
            <img src='https://img.icons8.com/787878/github.png' alt='GitHub' />
          </a>
          <a href='https://stackoverflow.com/'>
            <img src='https://img.icons8.com/787878/stackoverflow.png' alt='Stack Overflow' />
          </a>
        </div>
    </footer>
  );
}